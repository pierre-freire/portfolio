import SectionHeading from "@/components/molecules/sectionHeading";
import {
	faAddressCard,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactItem from "@/components/molecules/contactItem";

export default function Contact() {
	return (
		<section id="contact" className="flex flex-col items-center mt-4">
			<SectionHeading icon={faAddressCard}>Contato</SectionHeading>
			<div className="flex gap-2 flex-wrap justify-around w-2/3">
				<ContactItem
					icon={faEnvelope}
					name="pierrefreire.profis@gmail.com"
					contact="mailto:pierrefreire.profis@gmail.com"
				/>
				<ContactItem
					icon={faPhone}
					name="+55 (11) 96597-1443"
					contact="https://wa.me/5511965971443"
				/>
				<ContactItem
					icon={faLinkedin}
					name="linkedin.com/in/pierre-freire"
					contact="http://www.linkedin.com/in/pierre-freire/"
				/>
			</div>
		</section>
	);
}
