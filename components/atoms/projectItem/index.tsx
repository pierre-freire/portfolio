import Image from "next/image";
import SRC from "@/public/profile_image.svg";
import Paragraph from "../paragraph";

export default function ProjectItem() {
	return (
		<div className="m-2 mt-4 mb-4 flex flex-col items-center">
			<h4 className="text-xl items-center max-w-prose text-center mb-2">
				Nome do projeto
			</h4>
			<Image src={SRC} width={300} height={150} alt="project image" />
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros
				neque, porta eget tortor nec, aliquam aliquam turpis. Maecenas ultrices,
				dolor eget tincidunt consequat.
			</Paragraph>
			<div className="flex w-full mt-2">
				<a className="grow text-center m-1 p-3 bg-indigo-500 rounded cursor-pointer">
					Repositório
				</a>
				<a className="grow text-center m-1 p-3 bg-indigo-500 rounded cursor-pointer">
					Acessar
				</a>
			</div>
		</div>
	);
}
