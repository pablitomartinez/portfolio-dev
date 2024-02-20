// import React from 'react'

// export default function Sidebar() {
//   return (
//     <h1>Sidebar</h1>
//   )
// }
'use client'
import { useEffect, useState } from "react";
import Footer from "./Footer";

//link sidebar
const links = [
    { 
        name: 'Home', 
        href: '/dashboard', 
        // icon: HomeIcon
    },
    {
        name: 'ABOUT',
        href: '/dashboard/invoices',
        // icon: DocumentDuplicateIcon,
    },
    { 
        name: 'WORK',
        href: '/dashboard/customers', 
        // icon: UserGroupIcon 
    },
    { 
        name: 'WORK',
        href: '/dashboard/customers', 
        // icon: UserGroupIcon 
    },
    { 
        name: 'SKILL',
        href: '/dashboard/customers', 
        // icon: UserGroupIcon 
    },
    { 
        name: 'CONTACT',
        href: '/dashboard/customers', 
        // icon: UserGroupIcon 
    },
    
  ];


// NavLink component
const NavLink = ({ ...props }) => {
    // console.log(props);
    const {
        children,
        href = "",
        className = "",
        active = "",
    } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname == href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <a href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </a>
    );
};

// Sections List
// const SectionsList = ({ items }) => (
//     <div className='text-gray-600 px-4 md:px-8'>
//         <ul>
//             {items?.map((item, idx) => (
//                 <li key={idx}>
//                     <NavLink
//                         href={item?.href}
//                         active='text-gray-900 border-indigo-600'
//                         className='block w-full py-10 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
//                         {item?.name}
//                     </NavLink>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
const SectionsList = ({ items }) => (
    <div className='text-gray-600 px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        active='text-gray-900 border-indigo-600'
                        className='block w-full py-10 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);




const Sidebar = () => {
    const lessons = {
        options: [
            { name: "ABOUT", href: "/" }, 
            { name: "WORK", href: "/work" }, 
            { name: "SKILL", href: "/skill" }, 
            { name: "CONTACT", href: "/contact" }, 
        ]};

    return (
        <>  <div className="relative h-screen flex top-0 left-0 border-r bg-white space-y-8 overflow-auto sm:w-80 justify-center">

            <div className="" >
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <a href='#' className='flex-none'>
                            <img src="https://floatui.com/logo.svg" width={140} className="mx-auto" />
                        </a>
                    </div>
                  
                </div>
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div className= 'mt-20 '>
                         
                            <SectionsList items={lessons.options} />
                        </div>
                    </>
                </div>
            </div>
            
                <div className="absolute w-full bottom-0" >
                    <Footer/>
                </div>
        </div>
        </>
    );
};

export default Sidebar;