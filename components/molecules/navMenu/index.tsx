import NavMenuItem from "../../atoms/navMenuItem";

interface NavMenuProps {
	show: boolean;
}

export default function NavMenu({ show }: NavMenuProps) {
	return (
		<nav
			className={`${
				show ? "scale-y-1" : "scale-y-0"
			} transition-transform duration-500 origin-top  w-full absolute top-full bg-slate-700 md:static md:w-auto md:scale-y-1`}
		>
			<ul className="flex flex-col md:flex-row">
				<NavMenuItem content="Skills" href="#skills" />
				<NavMenuItem content="Experience" href="#experience" />
				<NavMenuItem content="Contact" href="#contact" />
			</ul>
		</nav>
	);
}
