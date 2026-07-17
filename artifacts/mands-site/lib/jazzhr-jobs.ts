export type JazzHrJob = {
  id: string;
  title: string;
  location: string;
  url: string;
};

const HREF_RE =
  /<a href="(https:\/\/mandsc\.applytojob\.com\/apply\/([A-Za-z0-9]+)\/[^"]+)">\s*([\s\S]*?)\s*<\/a>/;
const LOCATION_RE = /fa-map-marker[\s\S]*?<\/i>\s*([^<]+)/;

function decodeBasicEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export function parseJazzHrJobs(html: string): JazzHrJob[] {
  const jobs: JazzHrJob[] = [];
  const seen = new Set<string>();

  for (const block of html.split(/<li class="list-group-item">/i).slice(1)) {
    const hrefMatch = block.match(HREF_RE);
    if (!hrefMatch) continue;

    const url = hrefMatch[1];
    const id = hrefMatch[2];
    const title = decodeBasicEntities(hrefMatch[3].replace(/\s+/g, " "));
    const locationMatch = block.match(LOCATION_RE);
    const location = decodeBasicEntities(
      (locationMatch?.[1] ?? "").replace(/\s+/g, " "),
    );

    if (!id || !title || !url || seen.has(id)) continue;
    seen.add(id);
    jobs.push({ id, title, location, url });
  }

  return jobs;
}

const JAZZHR_BOARD_URL = "https://mandsc.applytojob.com/apply";

export type JazzHrJobsResult =
  | { ok: true; jobs: JazzHrJob[] }
  | { ok: false; jobs: []; error: string };

export async function fetchJazzHrJobs(): Promise<JazzHrJobsResult> {
  try {
    const response = await fetch(JAZZHR_BOARD_URL, {
      headers: {
        "user-agent": "MNSConsultingCareersBot/1.0 (+https://mnsconsulting.com/careers)",
        accept: "text/html",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return {
        ok: false,
        jobs: [],
        error: `JazzHR board returned ${response.status}`,
      };
    }

    const html = await response.text();
    const jobs = parseJazzHrJobs(html);

    if (jobs.length === 0) {
      // Distinguish empty board vs parse miss: if the board markup marker is missing, treat as error.
      if (!html.includes("list-group-item")) {
        return {
          ok: false,
          jobs: [],
          error: "JazzHR board markup not recognized",
        };
      }
    }

    return { ok: true, jobs };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown JazzHR fetch error";
    return { ok: false, jobs: [], error: message };
  }
}
