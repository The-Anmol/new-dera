import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  Button } from "@material-tailwind/react";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

export default function Nav() {

	const [open, setOpen] = useState(false);
	var buttonText;
	var navigate = useNavigate();
	const login = localStorage.getItem("login");
	if (!login) {
		var buttonText = "Login ";
	}
	else {
		var buttonText = "Log out";
	}

	function HandleClick() {
		if (!login) {
			navigate("/");
		}
		else {
			setOpen(!open);
		}
	}

	function logOut(){
			localStorage.removeItem("login");
			navigate("/");
	}

	return (
		<>
			<header className="text-gray-700 border-b border-gray-200 body-font">
				<div className="container relative flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
					<div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" target="_blank">
						<span className="ml-3 text-xl"></span>
					</div>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
						<Link to="/" className="px-3 py-1 mr-5 border-solid rounded hover:bg-gray-200 hover:text-gray-900">Home </Link>
						<Link to="/form" className="px-3 py-1 mr-5 rounded hover:bg-gray-200 hover:text-gray-900">Fill Details</Link>
						<Link to="/edit " className="px-3 py-1 mr-5 rounded hover:bg-gray-200 hover:text-gray-900">Edit Details</Link>
					</nav>
					<Button onClick={HandleClick} className="flex items-center px-3 py-1 mt-4 text-base bg-gray-700 border-0 rounded focus:outline-none hover:bg-gray-900 md:mt-0">
						{buttonText}
						<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg></Button>

<Transition.Root show={open} as={Fragment} className={`z-100  ${open ? "" : "hidden" } `}>
	<Dialog as="div" className="relative z-10"  onClose={setOpen}>
		<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
		</Transition.Child>
	<div className="fixed z-10 inset-0 overflow-y-auto">
		<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
			<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
				<Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
								<ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
							Logout account
						</Dialog.Title>
						<div className="mt-2">
							<p className="text-sm text-gray-500">
								Are you sure you want to logout your account?
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				<button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={ () => {setOpen(!open) ; logOut()}  } >
					Logout
				</button>
				<button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={ () => setOpen(!open)} >
					Cancel
				</button>
			</div>
				</Dialog.Panel>
			</Transition.Child>
		</div>
		</div>
	</Dialog>
</Transition.Root>

				</div>
			</header>
		</>
	);
}
