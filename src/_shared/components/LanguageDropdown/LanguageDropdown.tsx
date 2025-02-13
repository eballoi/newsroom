import { useTranslation } from "next-i18next";
import { useState } from "react";
import { LanguageDropdownItem } from "./LanguageDropdownItem";
import { Languages } from "./constants";
import { getFlag } from "./utils";
import { useRouter } from "next/router";

export const LanguageDropdown = () => {
	const { t, i18n } = useTranslation("common");
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (lang: string) => {
		const { pathname, asPath, query } = router;
		i18n.changeLanguage(lang);
		router.push({ pathname, query }, asPath, { locale: lang });
		setIsOpen(false);
	};

	return (
		<div className="relative border-l pl-1 md:pl-4">
			<button
				className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
				onClick={() => setIsOpen(!isOpen)}
			>
				{getFlag(i18n.language)}
			</button>
			{isOpen && (
				<div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-32">
					<ul>
						{Object.values(Languages).map((key) => (
							<LanguageDropdownItem
								key={key}
								text={t(`languages.${key}`)}
								setItem={() => handleLanguageChange(key)}
							/>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
