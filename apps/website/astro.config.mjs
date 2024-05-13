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
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
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
