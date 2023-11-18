import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/robmunger/testmonorepo',
			},
			sidebar: [
				{
					label: 'Robs Notes',
					items: [
						{ label: 'Notes/Todoooo', link: '/notes/notes/' },
						{ label: 'Questions', link: '/notes/questions/' },
					],
					label: 'Sandbox',
					items: [
						{ label: 'Sandbox .mdx page', link: '/sandbox/mdxpage/' },
						{ label: 'Reveal.js Demo', link: '/sandbox/revealjs/' },
						{ label: 'Real Expanded Slides', link: '/sandbox/realslides/' },
					],
				},
			],
		}),
	],
});
