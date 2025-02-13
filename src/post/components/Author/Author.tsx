import { Text } from "@/_shared/components/Text";
import { User } from "@/_shared/types/core";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Author: FC<{ author: User }> = ({ author }) => {
	return (
		<div className="flex flex-col items-center gap-1 px-8 text-center">
			<Image alt="author" src={author.avatar} width={64} height={64} />
			<Text variant="p2">{author.username}</Text>
			<Link href={`mailto:${author.email}`}>
				<Text variant="p3" className="lowercase italic">
					{author.email}
				</Text>
			</Link>
			<Text variant="p3">{author.company.catchPhrase}</Text>
		</div>
	);
};
