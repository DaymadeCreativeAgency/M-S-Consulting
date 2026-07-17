import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fixture = readFileSync(
  join(root, "lib/__fixtures__/jazzhr-board-snippet.html"),
  "utf8",
);

const { parseJazzHrJobs } = await import(
  pathToFileURL(join(root, "lib/jazzhr-jobs.ts")).href
);

const jobs = parseJazzHrJobs(fixture);
const expected = [
  {
    id: "weYsOpQI1B",
    title: "3D Animator",
    location: "Remote",
    url: "https://mandsc.applytojob.com/apply/weYsOpQI1B/3D-Animator",
  },
  {
    id: "aaFgBwOIF7",
    title: "Copywriter/Content Strategist",
    location: "Pasadena, CA",
    url: "https://mandsc.applytojob.com/apply/aaFgBwOIF7/CopywriterContent-Strategist",
  },
];

if (JSON.stringify(jobs) !== JSON.stringify(expected)) {
  console.error("Unexpected parse result:\n", jobs);
  process.exit(1);
}

console.log("verify-jazzhr-jobs: ok", jobs.length, "jobs");
