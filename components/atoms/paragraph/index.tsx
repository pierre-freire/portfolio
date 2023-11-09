interface ParagraphProps {
	children: string | JSX.Element;
}

export default function Paragraph({ children }: ParagraphProps) {
	return (
		<p className="max-w-prose text-lg m-2 text-justify md:pl-4 md:pr-4">
			{children}
		</p>
	);
}
