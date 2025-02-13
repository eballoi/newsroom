import { Text } from "@/_shared/components/Text";
import { routes } from "@/_shared/constants/routes";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FC } from "react";

export const CtaArea: FC = () => {
	const { t } = useTranslation("about");

	return (
		<div className="mt-6">
			<Link href={routes.HOME}>
				<Text variant="small" className={"underline"}>
					{t("backCta")}
				</Text>
			</Link>
		</div>
	);
};
