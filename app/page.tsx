import Header from "@/components/organisms/header";
import Skills from "@/components/templates/skills";
import Contact from "@/components/templates/contact";
import Personal from "@/components/templates/personal";
import Experience from "@/components/templates/experience";

export default function Home() {
	return (
		<main className="bg-slate-800">
			<Header />
			<Personal />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
