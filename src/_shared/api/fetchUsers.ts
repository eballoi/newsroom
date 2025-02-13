import { User } from "@/_shared/types/core";

export const fetchUsers = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`);
	if (!res.ok) throw new Error("Failed to fetch users");

	const users = await res.json();
	return users.map((user: User) => ({
		...user,
		avatar: "/images/avatar.png",
	}));
};
