import { Layout } from "@/components/Layout";
import { useTranslation } from "next-i18next";

import { ContentArea } from "@/about/components/ContentArea";
import { CtaArea } from "@/about/components/CtaArea";
import { TitleArea } from "@/about/components/TitleArea";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function About() {
	const { t } = useTranslation("about");

	return (
		<Layout>
			<Head>
				<title>{t("seo.title")}</title>
				<meta name="description" content={t("seo.description")} />
			</Head>
			<div className="flex flex-col items-center max-w-4xl mx-auto py-4 lg:py-6">
				<TitleArea />
				<ContentArea />
				<CtaArea />
			</div>
		</Layout>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"])),
		},
	};
}
