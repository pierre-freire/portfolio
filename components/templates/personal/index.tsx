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
					Welcome to my portfolio! Here, you&apos;ll find a collection of my
					best creations and projects. I&apos;m passionate about design and
					development, and I&apos;m excited to share my work and experience.
					Explore and get in touch for amazing collaborations.
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
