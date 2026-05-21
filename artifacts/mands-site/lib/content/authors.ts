/**
 * Maps WordPress usernames → display name + LinkedIn URL.
 * Update linkedIn values with real profile URLs when available.
 */
export type AuthorInfo = {
  name: string;
  title?: string;
  linkedIn: string | null;
};

export const AUTHOR_MAP: Record<string, AuthorInfo> = {
  "quinn.brewer": {
    name: "Quinn Brewer",
    linkedIn: "https://www.linkedin.com/in/quinn-brewer/",
  },
  "brandon.jones": {
    name: "Brandon Jones",
    linkedIn: "https://www.linkedin.com/in/brandon-jones-consulting/",
  },
  "brandon.joneswpe@mandsconsulting.com": {
    name: "Brandon Jones",
    linkedIn: "https://www.linkedin.com/in/brandon-jones-consulting/",
  },
  "ashok.aggarwal": {
    name: "Ashok Aggarwal",
    linkedIn: "https://www.linkedin.com/in/ashok-aggarwal-consulting/",
  },
  "javin.ladish": {
    name: "Javin Ladish",
    linkedIn: "https://www.linkedin.com/in/javin-ladish/",
  },
  "jimmy.lutz": {
    name: "Jimmy Lutz",
    linkedIn: "https://www.linkedin.com/in/jimmy-lutz-consulting/",
  },
  LeoTome: {
    name: "Leo Tome",
    linkedIn: "https://www.linkedin.com/in/leo-tome/",
  },
  "sauzanne.higgins": {
    name: "Sauzanne Higgins",
    linkedIn: "https://www.linkedin.com/in/sauzanne-higgins/",
  },
  "M&S Consulting": {
    name: "M&S Consulting",
    linkedIn: "https://www.linkedin.com/company/mands-consulting/",
  },
};

export function resolveAuthor(raw: string): AuthorInfo {
  return (
    AUTHOR_MAP[raw] ?? {
      name: raw
        .replace(/@.*$/, "")
        .replace(/\./g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      linkedIn: "https://www.linkedin.com/company/mands-consulting/",
    }
  );
}
