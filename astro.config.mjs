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
			head: [
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.css' } },
				{ tag: 'script', attrs: { src: 'https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.polyfilled.min.js', defer: true } },
				{ tag: 'script', attrs: { src: '/js/plyr-init.js', defer: true } },
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
