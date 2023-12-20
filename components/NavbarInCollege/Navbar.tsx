import React from 'react'
import Link from 'next/link'
import {FaUserAlt} from 'react-icons/fa';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';


interface data {
  id: string;
  img: string;
  subtitle: string;
  title: string;
  _id: string;
}
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />



type Props = {
    info: data[],
    sectionName: string;
    userName: string;

}

const Navbar = (props: Props) => {
  return (

    <div className='bg-gray-800' >
        <div>
        <div className="w-full  mx-auto">
    
    <nav className="border-gray-200 p-2">
    <div className="container mx-auto flex flex-wrap items-center justify-between py-5 px-2">
        
        <Link href='/'>
        <Image alt='logo' src={'/assets/images/logo2.png'} height={250} width={250} />
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
            <a href="/" className="bg-blue-700 md:bg-transparent text-black block pl-3 pr-4 py-2 md:text-blue-400 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className=" text-white capitalize  md:text-black  border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-400 md:p-0 font-medium flex items-center justify-between w-full md:w-auto md:text-white ">{props.sectionName} <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul className="py-1 " aria-labelledby="dropdownLargeButton">
                    {Array.isArray(props.info) && props.info.map((x)=>(
    <li>
        <a href={`${props.sectionName}/${x._id}`} className="text-sm hover:bg-gray-100 capitalize text-black block px-4 py-2 ">{x.title}</a>
    </li>
))}
                    
                    </ul>
                    <div className="py-1">
                    <a href="/login" className="text-sm hover:bg-gray-100 text-black block px-4 py-2 ">Sign out</a>
                    </div>
                </div>
            </li>
           
            <li>
            <a href="/about" className="text-white md:text-black hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-400 md:p-0 md:text-white">AboutUs</a>
            </li>
            <li>
            <a href="/contact" className="text-white md:text-black hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-400 md:p-0 md:text-white">ContactUs</a>
            </li>
            <li>
            <a href="/login" className="text-white capitalize md:text-black hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-400 md:p-0 md:text-white flex justify-between"><FaUserAlt className="mr-2 mt-0.5"/>{props.userName}</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    

</div>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

    </div>

  )
}


export default Navbar