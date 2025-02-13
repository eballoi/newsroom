import { useTranslation } from "next-i18next";
import { FC } from "react";

export const LoadMore: FC<{ loadMore: () => void }> = ({ loadMore }) => {
	const { t } = useTranslation("home");

	return (
		<div className="flex justify-center mt-4 col-span-3">
			<button
				onClick={loadMore}
				className="px-6 py-2 bg-gray-200 text-black rounded-3xl hover:bg-gray-300 transition-all btn btn-primary"
			>
				{t("loadMore")}
			</button>
		</div>
	);
};
