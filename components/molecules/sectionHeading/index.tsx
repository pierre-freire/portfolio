import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SectionHeadingProps {
	children: string | JSX.Element;
	icon: IconProp;
}

export default function SectionHeading({
	children,
	icon,
}: SectionHeadingProps) {
	return (
		<h2 className="flex text-2xl items-center justify-center m-4 max-w-prose">
			<FontAwesomeIcon
				icon={icon}
				style={{ width: "60px" }}
				className="text-slate-300"
			/>
			{children}
		</h2>
	);
}
