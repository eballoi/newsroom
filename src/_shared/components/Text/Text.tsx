const textVariants = {
	primary: "text-primary",
	title: "text-2xl font-medium tracking-tight",
	small: "text-primary text-sm",
	"small/uppercase": "text-primary text-sm uppercase",
	p1: "text-primary font-regular text-4xl",
	p2: "text-primary font-regular text-3xl",
	p3: "text-primary font-regular text-lg",
};

export const Text = ({
	variant = "primary",
	className = "",
	children,
	...props
}: {
	variant?: keyof typeof textVariants;
	children: React.ReactNode;
	className?: string;
} & React.ComponentProps<"p">) => {
	return (
		<p className={`${textVariants[variant]} ${className}`.trim()} {...props}>
			{children}
		</p>
	);
};
