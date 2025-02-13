import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Basic Meta Tags */}
				<meta charSet="UTF-8" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				{/* SEO Meta Tags */}
				<meta
					name="description"
					content="Newsroom is a responsive blog platform built with Next.js, TypeScript, and Tailwind CSS. 🚀📖"
				/>
				<meta name="keywords" content="nextjs, seo, web development, react" />
				<meta name="author" content="Edoardo Balloi" />

				{/* Open Graph (OG) for Social Media Preview */}
				<meta property="og:title" content="Newsroom" />
				<meta
					property="og:description"
					content="Newsroom is a responsive blog platform built with Next.js, TypeScript, and Tailwind CSS. 🚀📖."
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/eballoi/newsroom/main/public/preview.png"
				/>
				<meta property="og:url" content="https://yourwebsite.com" />
				<meta property="og:type" content="website" />

				{/* Twitter Card for Twitter/X Preview */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Newsroom" />
				<meta
					name="twitter:description"
					content="Newsroom is a responsive blog platform built with Next.js, TypeScript, and Tailwind CSS. 🚀📖."
				/>
				<meta
					name="twitter:image"
					content="https://raw.githubusercontent.com/eballoi/newsroom/main/public/preview.png"
				/>

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
