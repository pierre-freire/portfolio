import Paragraph from "@/components/atoms/paragraph";
import SkillItem from "@/components/atoms/skillItem";

interface ExperienceItemProps {
	company: string;
	role: string;
	period: string;
	description: string;
	activities: Array<string>;
	skills: Array<string>;
}

export default function ExperienceItem({
	company,
	role,
	period,
	description,
	activities,
	skills,
}: ExperienceItemProps) {
	return (
		<div>
			<h3 className="text-xl m-4 ml-8 mb-0 max-w-prose">
				{role} - {company}
			</h3>
			<span className="text-md ml-8 text-slate-400">{period}</span>
			<Paragraph>{description}</Paragraph>
			<ul className="list-disc flex flex-col gap-1 text-md wrap ml-10 mb-4 m-2 px-4">
				{activities?.map((elm, i) => {
					return (
						<li key={i} className="text-wrap max-w-prose leading-5">
							{elm}
						</li>
					);
				})}
			</ul>
			<div className="flex gap-2 ml-2  flex-wrap max-w-prose">
				{skills.map((elm, i) => {
					return <SkillItem key={i} text={elm} icon={false} />;
				})}
			</div>
		</div>
	);
}
