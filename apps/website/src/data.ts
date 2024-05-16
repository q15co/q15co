const baseUrl = "https://octocoach-web-git-avanderbergh-issue197-octocoach.vercel.app";

const res = await fetch(`${baseUrl}/org/q15/api/measures`, {
  headers: {
    "accept-language": "de",
  },
});

if (!res.ok) throw new Error(res.statusText);

type Measure = {
  id: string;
  title: string;
  imageSrc: string;
  imgageAlt: string;
  lang: "de" | "en";
  description: string;
  requirements: string;
};

export const result = (await res.json()) as { count: number; data: Measure[] };
