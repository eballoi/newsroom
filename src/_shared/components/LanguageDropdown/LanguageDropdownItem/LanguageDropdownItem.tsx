import { FC } from "react";
import { LanguageDropdownItemProps } from "./types";

export const LanguageDropdownItem: FC<LanguageDropdownItemProps> = ({
	setItem,
	text,
}) => (
	<li
		className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
		onClick={setItem}
	>
		{text}
	</li>
);
