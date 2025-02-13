import { Text } from "@/_shared/components/Text";
import { FC } from "react";
import { ParagraphProps } from "./Paragraph/types";

export const Paragraph: FC<ParagraphProps> = ({ title, description }) => {
	return (
		<>
			<Text variant="p2">{title}</Text>
			<Text>{description}</Text>
		</>
	);
};
