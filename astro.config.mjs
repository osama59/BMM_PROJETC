// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mediato',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'الفصل الأول',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'الفصل الثاني',
					autogenerate: { directory: 'reference_2' },
				},
				
			],
		}),
	],
});
