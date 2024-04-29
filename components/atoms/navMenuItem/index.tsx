interface NavMenuItem {
	content: string;
	href: string;
}

export default function NavMenuItem({ content, href }: NavMenuItem) {
	return (
		<li className="py-2 px-4 flex items-center cursor-pointer hover:bg-[#ffffff20]">
			<a href={href}>{content}</a>
		</li>
	);
}
