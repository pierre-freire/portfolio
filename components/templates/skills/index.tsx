import { faCode } from "@fortawesome/free-solid-svg-icons";

import SkillItem from "@/components/atoms/skillItem";
import SectionHeading from "@/components/molecules/sectionHeading";
import Paragraph from "@/components/atoms/paragraph";

const skills = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"SASS",
	"Tailwind",
	"Bootstrap",
	"ReactJs",
	"NextJs",
	"Redux",
	"Jest",
	"GIT",
	"Responsiveness",
];

export default function Skills() {
	return (
		<section id="skills" className="flex flex-col items-center">
			<SectionHeading icon={faCode}>Habilidades e Tecnologias</SectionHeading>
			<Paragraph>
				Explore minha caixa de ferramentas de habilidades e as tecnologias de
				ponta que eu domino. Desde desenvolvimento web até design, estou
				equipado para transformar seus sonhos digitais em realidade. Descubra as
				ferramentas que impulsionam minha paixão por inovação e criatividade.
			</Paragraph>
			<div className="flex flex-wrap gap-4 m-8 p-4 md:grid md:grid-cols-3 md:w-2/3">
				{skills.map((elm, i) => {
					return <SkillItem key={i} text={elm} />;
				})}
			</div>
		</section>
	);
}
