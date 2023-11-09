import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

interface SkillItemProps {
	text: string;
	icon?: boolean;
}

export default function SkillItem({ text, icon = true }: SkillItemProps) {
	return (
		<p className="flex justify-between items-center bg-slate-700 p-2 rounded">
			{icon && (
				<FontAwesomeIcon
					icon={faSquareCheck}
					style={{ width: "24px", marginRight: "8px" }}
					className="text-green-500"
				/>
			)}
			{text}
		</p>
	);
}
