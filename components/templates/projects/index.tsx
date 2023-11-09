import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "@/components/atoms/projectItem";
import SectionHeading from "@/components/molecules/sectionHeading";
import Paragraph from "@/components/atoms/paragraph";

export default function Projects() {
	return (
		<section id="projects">
			<section id="skills" className="flex flex-col items-center">
				<SectionHeading icon={faMicrochip}>Apps I&apos;ve built</SectionHeading>
				<Paragraph>
					Navegue pelos meus projetos anteriores e descubra um mundo de
					criatividade e inovação. Cada projeto conta uma história única de
					design, desenvolvimento e paixão por criar soluções excepcionais.
					Explore o meu portfólio e veja o que posso trazer para o seu próximo
					desafio.
				</Paragraph>
				<div className="grid grid-cols-1 justify-items-center grid-row-4 gap-4 mt-8 mb-8 sm:ml-4 sm:mr-4 md:w-2/3 md:grid-cols-2">
					{[1, 2, 3, 4].map((elm, i) => {
						return <ProjectItem key={i} />;
					})}
				</div>
			</section>
		</section>
	);
}
