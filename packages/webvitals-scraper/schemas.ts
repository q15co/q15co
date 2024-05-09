import { z } from "zod";

export const envSchema = z.object({
  SERPER_KEY: z.string().min(1),
  PAGESPEED_INSIGHTS_KEY: z.string().min(1),
});

export const argSchema = z.tuple([z.string().min(1)]);
