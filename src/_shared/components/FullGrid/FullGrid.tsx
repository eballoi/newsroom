import { FC } from "react";
import { FullGridProps } from "./types";

export const FullGrid: FC<FullGridProps> = ({ children }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{children}
		</div>
	);
};
