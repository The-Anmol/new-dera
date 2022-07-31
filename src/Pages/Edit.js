import React, { useState, Fragment, useRef } from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'


import "./Styles/Form.css";


const Edit = () => {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const cancelButtonRef = useRef(null)

  let [isDisabled, setIsDisabled] = useState(true);
  let [visibilityForDone, setVisibilityForDone] = useState(true);
  let [visibilityForEdit, setVisibilityForEdit] = useState(true);
  let [visibilityForSave, setVisibilityForSave] = useState(false);

  function enableInput() {
    setIsDisabled(!isDisabled);
    setVisibilityForDone(!visibilityForDone);
    setVisibilityForEdit(!visibilityForEdit);
    setVisibilityForSave(!visibilityForSave);
  }

  return (
    <>
      <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center" id='divBase' >
        <div className="flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max md:flex-1 lg:max-w-screen-lg" >
          {/* Ex-student Biodata Collection */}
          <div className="p-5 bg-white md:flex-1">
            <h1 className="flex justify-between my-4 text-2xl font-semibold text-gray-700 ">Ex-student Biodata Collection
              <button type="submit" onClick={() => setOpenEdit(!openEdit)} className={`w-fit flex justify-between px-4 py-2 m-0 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-slate-800 focus:outline-none focus:ring-blue-200 focus:ring-4 ${visibilityForEdit ? "show" : "hide"}`}>
                <div className="flex self-center my-auto mr-2">
                  {/* <MaterialIcon icon="edit" size={20} /> */}
                  < MdModeEdit size={23} />
                </div>Edit
              </button>
            </h1>
            <Transition.Root show={openEdit} className={`${openEdit ? "" : "hidden"} `} as={Fragment}>
              <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transdiv transition-all sm:my-8 sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                              <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                Submitting Details
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  Are you sure you want to Edit your details ?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-400 text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => { enableInput(); setOpenEdit(!openEdit) }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-red-600 shadow-sm px-4 py-2 bg-red text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpenEdit(!openEdit)}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            <div action="#" className="flex flex-col space-y-5">
              {/* Name */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 readOnly required">Name</label>
                <input defaultValue={"Anmol"} disabled={isDisabled} type="text" id="name" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Age */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="age" className="text-sm font-semibold text-gray-500 required">Age</label>
                </div>
                <input disabled={isDisabled} type="number" id="age" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Gender And MArtial Status */}
              <span className='flex justify-around'>
                {/* Gender */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Gender</label>
                  {/* DropDown Begins */}
                  <div className="relative inline-block dropdown w-fit ">
                    <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
                      <span className="mr-1">Choose</span>
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="absolute hidden pt-1 text-gray-700 dropdown-menu">
                      <li className="">
                        <button className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" >Male</button></li>
                      <li className="">
                        <button className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Female</button></li>
                      <li className="">
                        <button className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400" >Other</button></li>
                    </ul>
                  </div>
                  {/* DropDown Ends */}
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-500 required">Maritial Status</label>
                  </div>
                  <div className="relative inline-block dropdown w-fit ">
                    <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
                      <span className="mr-1">Choose</span>
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="absolute hidden pt-1 text-gray-700 dropdown-menu">
                      <li className="">
                        <button className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" >Married</button></li>
                      <li className="">
                        <button className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Unmarried</button></li>
                    </ul>
                  </div>
                </div>
              </span>
              {/* Phone Number Calling */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500 required">Phone Number ( Calling )</label>
                <input disabled={isDisabled}
                  type="number"
                  id="phone-call"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Phone Number Whatsapp */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500">Phone Number ( Whatsapp )</label>
                <input disabled={isDisabled}
                  type="number"
                  id="phone-whatsapp"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Email*/}
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <input disabled={isDisabled}
                  type="email"
                  id="email"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Address */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="address" className="text-sm font-semibold text-gray-500 required">Address</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="address"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* City */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="city" className="text-sm font-semibold text-gray-500 required">City</label>
                <input disabled={isDisabled}
                  type="text"
                  id="city"
                  required

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* State */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="state" className="text-sm font-semibold text-gray-500 required">City</label>
                <input disabled={isDisabled}
                  type="text"
                  id="state"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Country */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="country" className="text-sm font-semibold text-gray-500 required">Country</label>
                <input disabled={isDisabled}
                  type="text"
                  id="country"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
          {/* Ex-student Details */}
          <div className="p-5 bg-white md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Ex-student Details</h1>
            <div action="#" className="flex flex-col space-y-5">
              {/* Name of the institute */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Name of the institute</label>
                <input disabled={isDisabled}
                  type="text"
                  id="institute-name"
                  required

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Course you were enrolled in */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="course" className="text-sm font-semibold text-gray-500 required">Course you were enrolled in</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="course-enrolled"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Duration during which you studied at a institute (specify the number of years, or months.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="course-duration" className="text-sm font-semibold text-gray-500 required">Duration during which you studied at a institute (specify the number of years, or months.)</label>
                <input disabled={isDisabled}
                  type="text"
                  id="course-duration"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Admission number (at the institute, if you don't remember, leave blank.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="admission-number" className="text-sm font-semibold text-gray-500">Admission number (at the institute, if you don't remember, leave blank.)</label>
                <input disabled={isDisabled}
                  type="number"
                  id="admission-number"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
          {/* CURRENT POSITION DETAILS */}
          <div className="p-5 bg-white md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Current Position Details</h1>
            <div action="#" className="flex flex-col space-y-5">
              {/* What most accurately describes your current position? */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What most accurately describes your current position?</label>
                <div className="flex flex-col gap-2 ">
                  <span>
                    <input disabled={isDisabled} type="radio" id="position-job" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Job</label>
                  </span>
                  <span>
                    <input disabled={isDisabled} type="radio" id="position-student" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Student</label>
                  </span>
                  <span>
                    <input disabled={isDisabled} type="radio" id="position-bussiness" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Businness</label>
                  </span>
                  <span>
                    <input disabled={isDisabled} type="radio" id="position-unemployed" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Unemployed</label>
                  </span>
                  <span className='flex gap-20 align-center'>
                    <span >
                      <input disabled={isDisabled} type="radio" id="position-other" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                      <label className="text-sm font-semibold text-gray-500 ">Other</label>
                    </span>
                    <input disabled={isDisabled} type="number" id="position-other-value" required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                  </span>
                </div>
              </div>
              {/* JOb Type AND Job Sector */}
              <span className='flex justify-around space-y-2'>
                {/* What is your Job Type? */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Type?</label>
                  {/* DropDown Begins */}
                  <div className="relative inline-block dropdown w-fit ">
                    <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
                      <span className="mr-1">Choose</span>
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="absolute hidden pt-1 text-gray-700 w-max dropdown-menu">
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" >Private</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Goverment</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Freelance</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400" >Entrepreneur (you own a bussiness ) </div></li>
                    </ul>
                  </div>
                  {/* DropDown Ends */}
                </div>
                {/* What is your Job Sector? */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Sector?</label>
                  {/* DropDown Begins */}
                  <div className="relative inline-block dropdown w-fit ">
                    <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
                      <span className="mr-1">Choose</span>
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="absolute hidden pt-1 text-gray-700 w-max dropdown-menu">
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" >Manufacturing</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Sports</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Technology</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Health Care</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Finance</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Stock Market</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Economics</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Computer and IT</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Construction</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Energy</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" > Telecommunications</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Agriculture</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Manufacturing</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Retail</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Communication</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Hospitality</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Financial Services</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Real Estate</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Transport</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Mining</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Food</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >E-commerce</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Medical Devices</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Aviation</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Engeneering</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Pharmaceutical</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Research</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Health</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Logistics</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Insurance</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Defence/Police</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Judiciary</div></li>
                      <li className="">
                        <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400" >Other</div></li>
                    </ul>
                  </div>
                  {/* DropDown Ends */}
                </div>
              </span>
              {/* If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500 required">If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list)</label>
                <input disabled={isDisabled}
                  type="text"
                  id="other-job-sector"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Job Domain */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Domain?</label>
                {/* DropDown Begins */}
                <div className="relative inline-block dropdown w-fit ">
                  <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
                    <span className="mr-1">Choose</span>
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                  </button>
                  <ul className="absolute hidden pt-1 text-gray-700 w-max dropdown-menu">
                    <li className="w-max">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" >HR</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Manufacturing</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Accounting, Finance</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Legal</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Supply Chain and Procurement</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Bussiness Process</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >IT</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Engineering</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Medical</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" >Administration</div></li>
                    <li className="">
                      <div className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400" >Others</div></li>
                  </ul>
                </div>
                {/* DropDown Ends */}
              </div>
              {/* If Others, Please specify here*/}
              <div className="flex flex-col space-y-1">
                <label htmlFor="other-job-domain-label" className="text-sm font-semibold text-gray-500">If Others, Please specify here</label>
                <input disabled={isDisabled}
                  type="text"
                  name="other-job-domain-input"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Designation */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="designation" className="text-sm font-semibold text-gray-500 required">Designation</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="designation"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Department */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="department" className="text-sm font-semibold text-gray-500 required">Department</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="department"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Company/Firm/Organization */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-500 required">Company/Firm/Organization</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="company"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* City where you're working */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="working-city" className="text-sm font-semibold text-gray-500 required">City where you're working</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="working-city"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* State where you're working */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="working-state" className="text-sm font-semibold text-gray-500 required">State where you're working</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="working-state"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Country where you're working */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="working-country" className="text-sm font-semibold text-gray-500 required">Country where you're working</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="working-country"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Experience (in Years and months) */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="working-experience" className="text-sm font-semibold text-gray-500 required">Experience (in Years and months)</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="working-experience"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

            </div>
          </div>
          {/* QUALIFICATION DETAILS */}
          <div className="p-5 bg-white md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Qualification Details</h1>
            <div action="#" className="flex flex-col space-y-5">
              {/* Qualifications Completed (Degrees, Diplomas etc.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="  " className="text-sm font-semibold text-gray-500 required">Qualifications Completed (Degrees, Diplomas etc.)</label>
                <input disabled={isDisabled}
                  type="text"
                  id="qualifications-completed"
                  required

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Institute where you completed your most recent qualification from */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="qualifications-completed-institute" className="text-sm font-semibold text-gray-500 required">Institute where you completed your most recent qualification from</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="qualifications-completed-institute"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
          {/* ONGOING STUDY/QUALIFICATION DETAILS */}
          <div className="p-5 bg-white md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Ongoing Study/Qualifiacation Details</h1>
            <div action="" className="flex flex-col space-y-5">
              {/* Which degree /diploma program are you currently enrolled in? */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="ongoing-course" className="text-sm font-semibold text-gray-500 ">Which degree /diploma program are you currently enrolled in?</label>
                <input disabled={isDisabled}
                  type="text"
                  id="ongoing-course"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Area of Study */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="area-study" className="text-sm font-semibold text-gray-500 ">Area of Study</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="area-study"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Institution/University currently enrolled at. */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="currently-enrolled-institute" className="text-sm font-semibold text-gray-500 ">Institution/University currently enrolled at.</label>
                </div>
                <input disabled={isDisabled}
                  type="text"
                  id="currently-enrolled-institute"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Sewa Details*/}
              <div className="p-5 bg-white md:flex-1">
                <h1 className="my-4 text-2xl font-semibold text-gray-700">Sewa Details</h1>
                <div action="#" className="flex flex-col space-y-5">

                  {/* Your skills, areas of expertise (that you could aid in.) */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="skills" className="text-sm font-semibold text-gray-500 required">Your skills, areas of expertise (that you could aid in.)</label>
                    </div>
                    <input disabled={isDisabled}
                      type="text"
                      id="skills"

                      required
                      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    />
                  </div>
                  {/* Are you already a member of any pakki sammitti/sewa group? */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Are you already a member of any pakki sammitti/sewa group?</label>
                    <div className="flex flex-col gap-2 ">
                      <span>
                        <input disabled={isDisabled} type="radio" name="sewa-member-yes" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500 ">Yes</label>
                      </span>
                      <span>
                        <input disabled={isDisabled} type="radio" name="sewa-member-no" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500 ">No</label>
                      </span>
                    </div>
                  </div>
                  {/* Any other indivation you want to share! (For eg. Achievements, Research experience, Sports or other awards) */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="another-info" className="text-sm font-semibold text-gray-500 required">Any other indivation you want to share! (For eg. Achievements, Research experience, Sports or other awards)</label>
                    <input disabled={isDisabled}
                      type="text"
                      id="another-info"

                      required
                      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    />
                  </div>
                  {/* Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!) */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="resume-link-label" className="text-sm font-semibold text-gray-500">Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!)
                    </label>
                    <input disabled={isDisabled}
                      type="text"
                      name="resume-link-input"

                      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    />
                  </div>
                  {/* Suggestions for Dera/Sewa (that could be implemented) */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="suggestion" className="text-sm font-semibold text-gray-500 required">Suggestions for Dera/Sewa (that could be implemented)</label>
                    </div>
                    <input disabled={isDisabled} type="text" id="suggestion" required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className={`flex justify-center  ${visibilityForSave ? "show" : "hide"}`} >
                      <button to="/edit" type="submit" className="flex px-6 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                        <div className='flex self-center my-auto mr-2 ' >
                          {/* <MaterialIcon icon="save" size={25} /> */}
                          < MdSave size={23} />
                        </div>Save
                      </button>
                    </div>
                    <div className={`flex justify-center ${visibilityForDone ? "show" : "hide"}`} >
                      <button onClick={() => setOpen(true)} type="submit" className="flex px-6 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                        <div className='flex self-center my-auto mr-2 ' >
                          {/* <MaterialIcon icon="save" size={25} /> */}
                          < MdDone size={23} />
                        </div>Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition.Root show={open} className={`${open ? " " : "hidden"}`} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transdiv transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                            Submitting Details
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to Submit your details ?
                              <br />    You Sholud read the given details Carefully
                              <br /> Please Make Sure all the details are Correct
                              <br />  All of your data will be send
                              to Dera Sacha Sauda, Sirsa (Harayana) .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-400 text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Done
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-red-600 shadow-sm px-4 py-2 bg-red text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
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
    </>
  )
}


export default Edit;
