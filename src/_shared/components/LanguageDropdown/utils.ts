import { Languages } from "./constants";

export const getFlag = (language: string) => {
	switch (language) {
		case Languages.DE:
			return "🇩🇪";
		case Languages.IT:
			return "🇮🇹";
		default:
			return "🇬🇧";
	}
};
