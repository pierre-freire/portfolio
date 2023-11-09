"use client";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/molecules/sectionHeading";
import ExperienceItem from "@/components/molecules/experienceItem";
import { useState } from "react";

import { experiences } from "./exp";

export default function Experience() {
	const [exp, setExp] = useState(experiences[0]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	function SelectExp(index: number) {
		setSelectedIndex(index);
		setExp(experiences[index]);
	}

	return (
		<section id="experience" className="flex flex-col items-center mt-4 mb-8">
			<SectionHeading icon={faHouseLaptop}>Experience</SectionHeading>
			<div className="flex flex-col">
				<div className="flex justify-center m-2 gap-2">
					{[0, 1, 2, 3, 4].map((elm) => {
						return (
							<span
								key={elm}
								onClick={(e) => SelectExp(elm)}
								style={{
									display: "block",
									height: "16px",
									width: "16px",
									borderRadius: "50%",
									border: "1px solid white",
									margin: "8px 0px",
									marginLeft: "8px",
									content: "",
									cursor: "pointer",
								}}
								className={`${
									selectedIndex === elm ? "bg-gray-200" : "bg-slate-700"
								}`}
							/>
						);
					})}
				</div>
				<ExperienceItem
					role={exp.role}
					company={exp.company}
					period={exp.period}
					description={exp.description}
					skills={exp.skills}
				/>
			</div>
		</section>
	);
}
