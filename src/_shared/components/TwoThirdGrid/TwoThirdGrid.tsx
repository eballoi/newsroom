import { FC } from "react";
import { TwoThirdGridProps } from "./types";

export const TwoThirdGrid: FC<TwoThirdGridProps> = ({ children }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">{children}</div>
	);
};
