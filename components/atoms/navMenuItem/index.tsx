import style from "./index.module.css";

interface NavMenuItem {
	content: string;
	href: string;
}

export default function NavMenuItem({ content, href }: NavMenuItem) {
	return (
		<li className={style.container}>
			<a href={href}>{content}</a>
		</li>
	);
}
