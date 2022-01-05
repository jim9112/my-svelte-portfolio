const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			heading: ['Ibarra Real Nova', 'serif'],
			body: ['Public Sans', 'sans-serif']
		},
		extend: {
			colors: {
				'primary-cyan': '#5FB4A2',
				'primary-dark-blue': '#203A4C',
				'primary-greyish-blue': '#33323D',
				'secondary-very-light-grey': '#FAFAFA',
				'secondary-light-grey': '#EAEAEB',
				'secondary-bright-red': '#F43030'
			}
		}
	},

	plugins: []
};

module.exports = config;
