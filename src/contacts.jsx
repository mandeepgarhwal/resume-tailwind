import React from 'react'
import { Disclosure, Transition, Popover } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import fblogo from "./Facebook_Logo.webp"
import instalogo from "./instalogo.webp"
import xlogo from "./xlogo.webp"
import plogo from "./potencia.jpeg"
import ilogo from "./iitian.jpeg"
import blogo from "./bansal.jpg"
import rhlogo from "./rpsh.png"
import vdlogo from "./vigyan dhara.jpg"
import rmlogo from "./rps.jpeg"
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Carousel } from 'flowbite-react';

// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Contacts() {


    return (
        <>
            <div className='bg-red-200 pt-36 pl-5 lg:px-36' style={{ minHeight: "100vh" }}>
                <div className='h-fit'>
                    <Disclosure>
                        {({ open }) => (

                            <>
                                <div style={{minWidth: "220px"}} className='flex flex-row'>
                                    <ChevronRightIcon className={open ? 'rotate-90 transform h-8 sm:h-10 md:h-14' : 'h-8 sm:h-10 md:h-14'} />
                                    <Disclosure.Button style={{minWidth: "180px"}} className=" pb-1 sm:py-2 text-lg sm:text-2xl md:text-4xl flex flex-shrink">
                                        Glimpses from past
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className="text-gray-500 h-fit">

                                <div >
                                    <Carousel slideInterval={3000} className='h-52 sm:h-64 md:h-96 w-full'>
                                        <img src={plogo}  className = "h-full w-2/5" alt="..." />
                                        <img src={ilogo}  className = "h-full w-3/6" alt="..." />
                                        <img src={blogo}  className = "h-full w-7/12" alt="..." />
                                        <img src={rhlogo}  className = "h-full " alt="..." />
                                        <img src={vdlogo}  className = "h-full w-2/5" alt="..." />
                                        <img src={rmlogo}  className = "h-full w-7/12" alt="..." />
                                    </Carousel>
                                </div>
                                    
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
                    <Disclosure className="mt-4">
                        {({ open }) => (

                            <>
                                <div style={{minWidth: "220px"}} className='flex flex-row'>
                                    <ChevronRightIcon className={open ? 'rotate-90 transform h-8 sm:h-10 md:h-14' : 'h-8 sm:h-10 md:h-14'} />
                                    <Disclosure.Button style={{minWidth: "180px"}} className="pb-1 sm:py-2 text-lg sm:text-2xl md:text-4xl flex flex-shrink">
                                        Social media Accounts
                                    </Disclosure.Button>
                                </div>
                                <Transition
                                    enter="transition duration-2500 ease-out"
                                    enterFrom="transform scale-15 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-500 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-25 opacity-0"
                                >

                                    <Disclosure.Panel>
                                        <a href="https://www.facebook.com/mandeepgarhwal" className="flex items-center space-x-3 rtl:space-x-reverse ml-12 mt-6">
                                            <img src={fblogo} className="h-7 sm:h-10 rounded-full w-7 sm:w-10" alt="my pic" />
                                            <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">Mandeep Garhwal</span>
                                        </a>
                                        <a href="https://www.instagram.com/garhwalmandeep/" className="flex items-center space-x-3 rtl:space-x-reverse ml-12 mt-6">
                                            <img src={instalogo} className="h-7 sm:h-10 rounded-full w-7 sm:w-10" alt="my pic" />
                                            <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">garhwalmandeep</span>
                                        </a>
                                        <a href="https://twitter.com/mandeep_ga89285" className="flex items-center space-x-3 rtl:space-x-reverse ml-12 mt-6">
                                            <img src={xlogo} className="h-7 sm:h-10 rounded-full w-7 sm:w-10" alt="my pic" />
                                            <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">@mandeep_ga89285</span>
                                        </a>

                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}

                    </Disclosure>
                </div>
                <div>
                    <Disclosure className="mt-4">
                        {({ open }) => (

                            <>
                                <div className='flex flex-row'>
                                    <ChevronRightIcon className={open ? 'rotate-90 transform h-8 sm:h-10 md:h-14' : 'h-8 sm:h-10 md:h-14'} />
                                    <Disclosure.Button className="pb-1 sm:py-2 text-lg sm:text-2xl md:text-4xl flex flex-shrink">
                                        Find me
                                    </Disclosure.Button>
                                </div>
                                <Transition
                                    enter="transition duration-500 ease-out"
                                    enterFrom="transform scale-25 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-500 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-25 opacity-0"
                                >

                                    <Disclosure.Panel>
                                        <pre className="text-left text-base sm:text-xl font-serif text-slate-900 mb-4 pl-10">
                                            MANDEEP GARHWAL <br />
                                            H. NO. 265, SEC 13, HISAR <br />
                                            Haryana, pin code - 125005<br />
                                            Contact No. – +91 89508 90009, 80592 90008	<br />
                                            E-Mail id – mandeepgarhwal@gmail.com
                                        </pre>

                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}

                    </Disclosure>
                </div>


                <div>
                    <Popover>
                        {({ open }) => (
                            /* Use the `open` state to conditionally change the direction of the chevron icon. */
                            <>
                                <div className="" style={{ display: "flex", flexDirection: "row" }}>
                                    <ChevronDownIcon className={open ? ' h-14' : ' -rotate-90 transform h-14'} />
                                    <Popover.Button className='rounded-full btn btn-info ml-4 pb-2'>
                                        Send Enquiry

                                    </Popover.Button>
                                </div>
                                <Popover.Panel >
                                    <div className=" bg-red-200 w-96 pl-4 border-3 border-pink-900 sm:ml-20 mt-6 rounded-xl" style={{ display: "flex", flexDirection: "column" }}>
                                        <input className="bg-red-200 rounded-2xl w-64 mt-6 pl-2" type="text" name="" placeholder='Please Enter Your Name' id="" />
                                        <input className="bg-red-200 rounded-2xl w-64 mt-6 pl-2" type="email" name="" placeholder='Please Enter Your Email' id="" />
                                        <textarea className="bg-red-200 rounded-2xl  mt-6 pl-2" name="query" id="" placeholder='Please Enter Your Query' cols="18" rows="4"></textarea>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <button className='rounded-full btn btn-danger ml-10 pb-2 my-3'>Send</button>
                                            <button className='rounded-full btn btn-primary ml-10 pb-2 my-3 '>Cancel</button>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </>
                        )}
                    </Popover>
                </div>
            </div>

        </>

    )
}




