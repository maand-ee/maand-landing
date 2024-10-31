/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#ffd703',
				'black': '#212732',
				'sand': '#e5e4da',
			}
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
			  },
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				'2xl': '1396px',
			  },
		},
	},
	plugins: [],
}
