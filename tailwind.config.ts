import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: 'class',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			'dark-text': '#e8eff3',
			'dark-background': '#090e11',
			'dark-primary': '#9dbdcd',
			'dark-secondary': '#363f68',
			'dark-accent': '#6163ae',
			'light-text': '#0c1317',
			'light-background': '#eef3f6',
			'light-primary': '#325262',
			'light-secondary': '#97a0c9',
			'light-accent': '#51549e',
			'green-dot': '#22c55e',
			'yellow-node': '#ecc94b',
			'red-node': '#ef4444',
			'blue-text': '#06090a',
			'blue-background': '#f4f9fa',
			'blue-primary': '#58acbb',
			'blue-secondary': '#9ad4df',
			'blue-accent': '#60c6d9',
			'transparent': 'transparent',
		},
		screens: {
			sm: '350px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontFamily: {
			heading: 'Tektur',
			body: 'Tektur',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			animation: {
				'move-left': 'move-left 1s linear infinite',
			},
			keyframes: {
				'move-left': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	]
};
export default config;
