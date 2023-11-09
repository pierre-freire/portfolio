"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "@/components/molecules/navMenu";
import { useState } from "react";

export default function Header() {
	const [showMenu, setShowMenu] = useState(true);

	return (
		<header className="w-full flex items-center justify-between bg-slate-700 relative">
			<p className="border-solid border-r-2 border-slate-100 p-2">
				Pierre Freire
			</p>
			<button
				aria-label="Main navigation menu"
				className={`block p-4 ${
					showMenu ? "rotate-90" : ""
				} transition-transform duration-500 md:hidden`}
				onClick={() => {
					setShowMenu(!showMenu);
				}}
			>
				<FontAwesomeIcon
					icon={faBars}
					style={{ width: "20px" }}
					className="text-slate-300"
				/>
			</button>
			<NavMenu show={showMenu} />
		</header>
	);
}
