import React from 'react'
import thumbnail from "./thumbnail.JPG"
import { Navbar } from 'flowbite-react';
export default function Navbars() {
    return (

        <Navbar fluid rounded className='bg-red-200 align-top'>
            <div  className=" mt-2 self-start">
            <Navbar.Brand href="/" >
                <img src= {thumbnail} className="mr-3  rounded-full  w-6 h-6 sm:h-9 sm:w-9 " alt="Flowbite React Logo" />
                <span className=" self-start whitespace-nowrap text-xl font-semibold dark:text-white">Mandeep Garhwal</span>
            </Navbar.Brand>
            </div >
            <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-end">
            <Navbar.Toggle className='focus:w-1/5 mr-3 focus:ring-red-200 hover:bg-red-200'/>
            </div>
            {/* <div className="flex flex-col justify-start pb-6"> */}
            <Navbar.Collapse className=''>
                
                <Navbar.Link href="/projects" className='text-xl -mt-5'>
                    Projects
                </Navbar.Link>
                <Navbar.Link href="/technologies" className='text-xl -mt-5'>Technologies</Navbar.Link>
                <Navbar.Link href="/contacts" className='text-xl -mt-5'>Personal Information</Navbar.Link>
                
            </Navbar.Collapse>
            {/* </div> */}
            </div>
        </Navbar>
        // <nav className="bg-red-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-b border-gray-200 dark:border-gray-600">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        //         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <img src={thumbnail} className="h-10 rounded-full w-10" alt="my pic" />
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mandeep Garhwal</span>
        //         </a>
        //         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

        //             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        //             <ul className="flex flex-col  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-red-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-red-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        //                 <li>
        //                     <a href="/Projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
        //                 </li>
        //                 <li>
        //                     <a href="/technologies" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Technologies</a>
        //                 </li>
        //                 <li>
        //                     <a href="/contacts" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Personal Information</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}
