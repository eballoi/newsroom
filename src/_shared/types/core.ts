export type Post = {
	id: number;
	title: string;
	body: string;
	userId: number;
	hashtags: string[];
	image: string;
	author: User;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
	avatar: string;
};
