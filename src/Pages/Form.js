import React, { useState } from 'react';
import "./Styles/Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [currentTab, setCurrentTab] = useState("basic");
  const changeTab = (name) => {
    setCurrentTab(name);
  }

  var userIcon = "https://img.icons8.com/ios-glyphs/48/000000/user--v1.png";
  var student = "https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-graduate-award-and-trophy-kosonicon-solid-kosonicon.png";
  var document = "https://img.icons8.com/material-outlined/90/000000/document--v1.png";
  var certificate = "https://img.icons8.com/ios/50/000000/certificate.png";
  var book = "https://img.icons8.com/dotty/80/000000/saving-book.png";
  var wellFare = "https://img.icons8.com/fluency-systems-filled/48/000000/welfare.png";

  if (currentTab === "student") {
    userIcon = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
  }
  if (currentTab === "current") {
    userIcon = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    student = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
  }
  if (currentTab === "qualification") {
    userIcon = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    student = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    document = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
  }
  if (currentTab === "ongoing") {
    userIcon = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    student = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    document = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    certificate = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
  }
  if (currentTab === "sewa") {
    userIcon = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    student = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    document = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    certificate = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
    book = "https://img.icons8.com/material-rounded/48/000000/checkmark--v1.png";
  }


  const buttonPrevious = (<div className='flex gap-2' >
    <img src="https://img.icons8.com/material-rounded/24/000000/left.png" alt="" />
    Previous
  </div>
  );
  const buttonHome = (<div className='flex gap-2' >
    <img src="https://img.icons8.com/material-rounded/24/000000/left.png" alt="" />
    Home
  </div>
  );
  const buttonNext = (<div className='flex gap-2' >
    Next
    <img src="https://img.icons8.com/material-rounded/24/000000/right.png" alt="" />
  </div>
  );


  return (
    <>
      <div className={`flex flex-col p-1 items-center min-h-screen bg-gray-100 sm:p-8 md:w-screen justify-evenly   `} >
        {/* Stepper Line */}
        <div className='z-10 items-center justify-between hidden w-11/12 h-1 mx-auto mt-6 mb-24 bg-white rounded-md text-bg-gray-900 md:w-11/12 lg:w-full xl:w-10/12 2xl:w-6/12 2xsm:flex stepper-line '>
          <div className='h-10 p-2 bg-white rounded-xl after:hidden lg:after:block md:h-16 aspect-square steps ' >
            <img className='m-0' alt='User' src={userIcon} />
          </div>
          <div className='h-10 p-2 bg-white rounded-xl after:hidden lg:after:block md:h-16 aspect-square steps ' >
            <img src={ student } alt="student" />
          </div>
          <div className='h-10 p-2 bg-white rounded-xl md:h-16 after:hidden lg:after:block aspect-square steps ' >
            <img className='m-0' alt='Form' src={document} />
          </div>
          <div className='h-10 p-2 bg-white md:h-16 after:hidden lg:after:block rounded-xl aspect-square steps ' >
            <img alt='Qualification' src={certificate} />
          </div>
          <div className='h-10 p-2 bg-white md:h-16 after:hidden lg:after:block rounded-xl aspect-square steps ' >
            <img alt='Qualification' src={book} />
          </div>
          <div className='h-10 p-2 bg-white md:h-16 after:hidden lg:after:block rounded-xl aspect-square steps ' >
            <img alt='Sewa' src={wellFare} />
          </div>

        </div>

        <h1 className="flex justify-between p-4 mx-auto my-4 text-2xl font-semibold text-center text-gray-900 bg-white rounded-lg ">Ex-student Biodata Collection </h1>
{/* Basic Details */}
        <div className={` h-fit flex-col flex-1 px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-xl md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 md:flex-1  ${currentTab === "basic" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* Ex-student Biodata Collection */}
          <div className="p-5 md:flex-1">
            <form action="#" className="flex flex-col space-y-5">
              {/* Name */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 readOnly required">Name</label>
                <input type="text" id="name" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
              </div>
              {/* Age */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="age" className="text-sm font-semibold text-gray-500 required">Age</label>
                </div>
                <input type="number" id="age" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                <input
                  type="number"
                  id="phone-call"
                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Phone Number Whatsapp */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500">Phone Number ( Whatsapp )</label>
                <input
                  type="number"
                  id="phone-whatsapp"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Email*/}
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <input
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
                <input
                  type="text"
                  id="address"
                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* City */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="city" className="text-sm font-semibold text-gray-500 required">City</label>
                <input
                  type="text"
                  id="city"
                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* State */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="state" className="text-sm font-semibold text-gray-500 required">City</label>
                <input
                  type="text"
                  id="state"
                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Country */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="country" className="text-sm font-semibold text-gray-500 required">Country</label>
                <input
                  type="text"
                  id="country"
                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </form>
          </div>
          <div className='flex justify-between w-full gap-4 m-auto text-black sm:w-6/12'>
            <span className=''>
              <div className='flex justify-center'>
                <Link to="/" type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  { buttonHome }
                </Link>
              </div>
            </span>
            <span className='mb-4 '>
              <div className='flex justify-center'>
                <button onClick={() => changeTab("student")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonNext}
                </button>
              </div>
            </span>
          </div>
        </div>
{/* Ex Student Details */}
        <div className={` h-fit flex-col flex-1 px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-lg md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 md:flex-1  ${currentTab === "student" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* Ex-student Detai ls */}
          <div className="p-5 md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Ex-student Details</h1>
            <form action="#" className="flex flex-col space-y-5">
              {/* Name of the institute */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Name of the institute</label>
                <input
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
                <input
                  type="text"
                  id="course-enrolled"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Duration during which you studied at a institute (specify the number of years, or months.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="course-duration" className="text-sm font-semibold text-gray-500 required">Duration during which you studied at a institute (specify the number of years, or months.)</label>
                <input
                  type="text"
                  id="course-duration"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              {/* Admission number (at the institute, if you don't remember, leave blank.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="admission-number" className="text-sm font-semibold text-gray-500">Admission number (at the institute, if you don't remember, leave blank.)</label>
                <input
                  type="number"
                  id="admission-number"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </form>
          </div>
          <div className='flex w-full gap-4 m-auto mb-4 sm:w-6/12'>
            <span className='m-auto text-black'>
              <div className='flex justify-center'>
                <button onClick={() => changeTab("basic")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonPrevious}
                </button>
              </div>
            </span>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => changeTab("current")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  { buttonNext }
                </button>
              </div>
            </span>
          </div>
        </div>
{/* Current Details */}
        <div className={`h-fit z-20 flex-col shrink flex px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-lg md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 ${currentTab === "current" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* CURRENT POSITION DETAILS */}
          <div className="p-5 md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Current Position Details</h1>
            <form action="#" className="flex flex-col space-y-5">
              {/* What most accurately describes your current position? */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What most accurately describes your current position?</label>
                <div className="flex flex-col gap-2 ">
                  <span>
                    <input type="radio" id="position-job" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Job</label>
                  </span>
                  <span>
                    <input type="radio" id="position-student" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Student</label>
                  </span>
                  <span>
                    <input type="radio" id="position-bussiness" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Businness</label>
                  </span>
                  <span>
                    <input type="radio" id="position-unemployed" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Unemployed</label>
                  </span>
                  <span className='flex gap-20 align-center'>
                    <span >
                      <input type="radio" id="position-other" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                      <label className="text-sm font-semibold text-gray-500 ">Other</label>
                    </span>
                    <input type="number" id="position-other-value" required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
                  type="text"
                  id="working-experience"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

            </form>
          </div>
          <div className='flex w-full gap-4 m-auto mb-4 text-black sm:w-6/12'>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("student")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonPrevious}
                </button>
              </div>
            </span>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("qualification")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonNext}
                </button>
              </div>
            </span>
          </div>
        </div>
{/* Qualification Details */}
        <div className={`h-fit z-20 flex-col shrink flex-1 px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-lg md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 ${currentTab === "qualification" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* QUALIFICATION DETAILS */}
          <div className="p-5 md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Qualification Details</h1>
            <form action="#" className="flex flex-col space-y-5">
              {/* Qualifications Completed (Degrees, Diplomas etc.) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="  " className="text-sm font-semibold text-gray-500 required">Qualifications Completed (Degrees, Diplomas etc.)</label>
                <input
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
                <input
                  type="text"
                  id="qualifications-completed-institute"

                  required
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </form>
          </div>
          <div className='flex w-full gap-4 m-auto mb-4 text-black sm:w-6/12'>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("current")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonPrevious}
                </button>
              </div>
            </span>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("ongoing")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonNext}
                </button>
              </div>
            </span>
          </div>
        </div>
{/* ongoing Study Details */}
        <div className={`h-fit z-20 flex-col shrink flex-1 px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-lg md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 ${currentTab === "ongoing" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* ONGOING STUDY/QUALIFICATION DETAILS */}
          <div className="p-5 md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Ongoing Study/Qualifiacation Details</h1>
            <form action="" className="flex flex-col space-y-5">
              {/* Which degree /diploma program are you currently enrolled in? */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="ongoing-course" className="text-sm font-semibold text-gray-500 ">Which degree /diploma program are you currently enrolled in?</label>
                <input
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
                <input
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
                <input
                  type="text"
                  id="currently-enrolled-institute"

                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </form>
          </div>
          <div className='flex w-full gap-4 m-auto mb-4 text-black sm:w-6/12'>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("ongoing")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonPrevious}
                </button>
              </div>
            </span>
            <span className='m-auto'>
              <div className='flex justify-center'>
                <button onClick={() => setCurrentTab("sewa")} type="submit" className="flex px-6 py-2 text-lg font-semibold text-center transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  {buttonNext}
                </button>
              </div>
            </span>
          </div>
        </div>
{/* Sewa Details */}
        <div className={`h-fit z-20 flex-col shrink flex-1 px-1 sm:px-0 overflow-hidden bg-white rounded-md shadow-lg md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 w-96 ${currentTab === "sewa" ? "flex" : "hidden"} lg:max-w-screen-lg`} >
          {/* Sewa Details*/}
          <div className="flex flex-col p-5 shrink h-fit md:flex-1">
            <h1 className="my-4 text-2xl font-semibold text-gray-700">Sewa Details</h1>
            <form action="#" className="flex flex-col space-y-5">
              {/* Your skills, areas of expertise (that you could aid in.) */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="skills" className="text-sm font-semibold text-gray-500 required">Your skills, areas of expertise (that you could aid in.)</label>
                </div>
                <input
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
                    <input type="radio" name="sewa-member-yes" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Yes</label>
                  </span>
                  <span>
                    <input type="radio" name="sewa-member-no" required className="px-4 py-2 mr-2 transition duration-300 border border-gray-300 rounded w-fit focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">No</label>
                  </span>
                </div>
              </div>
              {/* Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards) */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="another-info" className="text-sm font-semibold text-gray-500 required">Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards)</label>
                <input
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
                <input
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
                <input type="text" id="suggestion" required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
              </div>
            </form>
          </div>
          <span className='m-auto mb-4 text-black'>
            <div className='flex justify-center'>
              <Link to="p/edit" type="submit" className="flex px-6 py-2 text-lg font-semibold text-center text-white transition-colors duration-300 bg-blue-500 rounded-md shadow btns w-max hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  Done
                </Link>
            </div>
          </span>
        </div>

      </div>
    </>
  )
}

export default Form;