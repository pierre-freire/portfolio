"use client";
import Image from "next/image";
import SVG from "@/public/profile_image2.svg";
import Paragraph from "@/components/atoms/paragraph";

export default function Personal() {
	return (
		<section className="flex flex-col justify-around items-center p-4 md:flex-row">
			<div className="flex flex-col justify-center max-w-prose">
				<h1 className="text-3xl m-4">Front end Developer</h1>
				<Paragraph>
					Bem-vindo ao meu portfólio! Aqui, você encontrará uma coleção das
					minhas melhores criações e projetos. Sou apaixonado por design e
					desenvolvimento, e estou ansioso para compartilhar meu trabalho e
					experiência. Explore e entre em contato para colaborações incríveis.
				</Paragraph>
			</div>
			<Image
				height={400}
				width={400}
				src={SVG}
				alt="portfolio illustrative image"
				priority
			/>
		</section>
	);
}
