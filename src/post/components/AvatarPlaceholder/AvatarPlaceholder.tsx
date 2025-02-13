import { FC } from "react";
import { AvatarPlaceholderProps } from "./types";
import { getInitials } from "./utils";
import { Text } from "@/_shared/components/Text";

export const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({ name }) => {
	const initials = getInitials(name).toUpperCase();

	return (
		<div
			className={`w-8 h-8 bg-gray-500 flex items-center justify-center rounded-full text-m`}
		>
			<Text variant="small" className="font-semibold">
				{initials}
			</Text>
		</div>
	);
};
