import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContactItemProps {
	icon: IconProp;
	name: string;
	contact: string;
}

export default function ContactItem({ icon, name, contact }: ContactItemProps) {
	return (
		<a
			className="flex items-center pb-4 whitespace-nowrap"
			target="_blank"
			href={`${contact}`}
		>
			<FontAwesomeIcon
				icon={icon}
				style={{ width: "24px" }}
				className="text-slate-300"
			/>
			{name}
		</a>
	);
}
