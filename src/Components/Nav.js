import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

	var buttonText;
	const login = localStorage.getItem("login");
	if (!login) {
		var buttonText = "Login ";
	}
	else {
		var buttonText = "Log out";
	}

	return (
		<header className="text-gray-700 border-b border-gray-200 body-font">
			<div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
				<div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" target="_blank">
					<span className="ml-3 text-xl"></span>
				</div>
				<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
					<Link to="/" className="mr-5 hover:text-gray-900">Home </Link>
					<Link to="/form" className="mr-5 hover:text-gray-900">Fill Form</Link>
					<Link to="/edit " className="mr-5 hover:text-gray-900">Edit Form</Link>
					<Link to="/admin" className="mr-5 hover:text-gray-900">Admin</Link>
				</nav>
				<Link to="/" className="flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">{buttonText} <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg></Link>
			</div>
		</header>
	);
}