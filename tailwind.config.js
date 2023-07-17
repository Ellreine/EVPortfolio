/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bio: ['BioRhyme Expanded', 'serif'],
			},
			backgroundImage: {
				'black-gradient': 'var(--black-gradient)',
			},
			colors: {
				primary: 'var(--primary)',
			},
		},
	},

	plugins: [],
};
