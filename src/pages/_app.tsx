import { Navbar } from "@/_shared//components/Navbar";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default appWithTranslation(App);
