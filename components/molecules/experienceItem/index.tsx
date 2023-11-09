import Paragraph from "@/components/atoms/paragraph";
import SkillItem from "@/components/atoms/skillItem";

interface ExperienceItemProps {
	company: string;
	role: string;
	period: string;
	description: string;
	skills: Array<string>;
}

export default function ExperienceItem({
	company,
	role,
	period,
	description,
	skills,
}: ExperienceItemProps) {
	return (
		<div>
			<h3 className="text-xl m-4 ml-8 mb-0 max-w-prose">
				{role} - {company}
			</h3>
			<span className="text-md ml-8 text-slate-400">{period}</span>
			<Paragraph>{description}</Paragraph>
			<div className="flex gap-2 ml-2  flex-wrap max-w-prose">
				{skills.map((elm, i) => {
					return <SkillItem key={i} text={elm} icon={false} />;
				})}
			</div>
		</div>
	);
}
