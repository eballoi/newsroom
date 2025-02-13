import { FC } from "react";
import { useTranslation } from "next-i18next";
import { Paragraph } from "../Paragraph";

export const ContentArea: FC = () => {
	const { t } = useTranslation("about");
	return (
		<section className="flex flex-col items-start gap-4">
			<Paragraph
				title={t("hashtagTitle")}
				description={t("hashtagDescription")}
			/>
			<Paragraph
				title={t("localizationTitle")}
				description={t("localizationDescription")}
			/>
			<Paragraph
				title={t("suggestedContentTitle")}
				description={t("suggestedContentDescription")}
			/>
			<Paragraph
				title={t("socialSharingTitle")}
				description={t("socialSharingDescription")}
			/>
		</section>
	);
};
