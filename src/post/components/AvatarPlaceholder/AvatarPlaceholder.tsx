import { FC } from "react";
import { AvatarPlaceholderProps } from "./types";
import { getInitials } from "./utils";

export const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({ name }) => {
	const initials = getInitials(name).toUpperCase();

	return (
		<div
			className={`w-8 h-8 bg-gray-400 flex items-center justify-center rounded-full text-white text-m`}
		>
			{initials}
		</div>
	);
};
