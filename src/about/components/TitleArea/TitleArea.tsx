import { Text } from "@/_shared/components/Text";
import { useTranslation } from "next-i18next";
import { FC } from "react";

export const TitleArea: FC = () => {
	const { t } = useTranslation("about");

	return (
		<>
			<Text variant="p1">{t("title")}</Text>
			<div className="py-6">
				<Text>{t("description")}</Text>
			</div>
		</>
	);
};
