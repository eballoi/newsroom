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
					content="Your website description goes here."
				/>
				<meta name="keywords" content="nextjs, seo, web development, react" />
				<meta name="author" content="Your Name" />

				{/* Open Graph (OG) for Social Media Preview */}
				<meta property="og:title" content="Your Website Title" />
				<meta
					property="og:description"
					content="Your website description goes here."
				/>
				<meta
					property="og:image"
					content="https://yourwebsite.com/preview.jpg"
				/>
				<meta property="og:url" content="https://yourwebsite.com" />
				<meta property="og:type" content="website" />

				{/* Twitter Card for Twitter/X Preview */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Your Website Title" />
				<meta
					name="twitter:description"
					content="Your website description goes here."
				/>
				<meta
					name="twitter:image"
					content="https://yourwebsite.com/preview.jpg"
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
