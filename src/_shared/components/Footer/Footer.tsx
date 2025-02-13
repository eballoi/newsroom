import { FC } from "react";
import { Text } from "@/_shared/components/Text";
export const Footer: FC = () => {
	return (
		<footer className="bg-gray-100 text-center py-4">
			<Text variant="p3" className="text-sm">
				<span>© 2025 Newsroom by Edoardo Balloi. All rights reserved.</span>
			</Text>
		</footer>
	);
};
