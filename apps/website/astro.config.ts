import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import "@catppuccin/palette";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Q15",
      logo: {
        light: "/src/assets/logo_light.svg",
        dark: "/src/assets/logo_dark.svg",
      },
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/q15co/q15co",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
        },
      },
      sidebar: [
        {
          label: "Courses",
          translations: {
            de: "Kurse",
          },
          autogenerate: {
            directory: "courses",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
});
