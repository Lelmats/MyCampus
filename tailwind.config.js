/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    width: {
			"10v": "10vw",
			"20v": "20vw",
			"30v": "30vw",
			"40v": "40vw",
			"50v": "50vw",
			"60v": "60vw",
			"70v": "70vw",
			"80v": "80vw",
			"90v": "90vw",
			"100v": "100vw",
		},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
  ],
}
