import { ofetch } from "ofetch";
import { argSchema, envSchema } from "./schemas";
import { SerpResult } from "./types";
import { google } from "googleapis";
import { writeFile } from "fs/promises";

const [q] = argSchema.parse(process.argv.slice(2));

const env = envSchema.parse(process.env);

const { organic } = await ofetch<SerpResult>(
  "https://google.serper.dev/search",
  {
    method: "POST",
    headers: {
      "X-API-KEY": env.SERPER_KEY,
      "Content-Type": "application/json",
    },
    body: {
      q,
    },
  }
);

const pageSpeedInsights = google.pagespeedonline({
  version: "v5",
  key: env.PAGESPEED_INSIGHTS_KEY,
});

const promises = organic.map(async (entry) => {
  const pageSpeedResult = await pageSpeedInsights.pagespeedapi.runpagespeed({
    url: entry.link,
    category: ["ACCESSIBILITY", "BEST_PRACTICES", "PERFORMANCE", "SEO"],
    strategy: "MOBILE",
  });

  return {
    ...entry,
    pageSpeed: pageSpeedResult.data.lighthouseResult?.categories,
  };
});

const res = await Promise.all(promises);

await writeFile("results.json", JSON.stringify(res), { encoding: "utf-8" });

console.log(res);
