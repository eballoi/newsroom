export const fetchUserById = async (id: number) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`
	);
	if (!res.ok) throw new Error("Failed to fetch user");

	const user = await res.json();
	return {
		...user,
		avatar: "/images/avatar.png",
	};
};
