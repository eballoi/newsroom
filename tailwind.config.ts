import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: "var(--gray-100)",
				secondary: "#a2a2ab",
				accent: "#ff0",
			},
			backgroundImage: {
				"card-gradient": "linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)",
			},
		},
		keyframes: {
			bounceHorizontal: {
				"0%, 100%": { transform: "translateX(0)" },
				"50%": { transform: "translateX(5px)" },
			},
		},
		animation: {
			"bounce-horizontal": "bounceHorizontal 0.4s ease-in-out",
		},
	},
	plugins: [],
} satisfies Config;
