'use client';
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";
import{usePathname} from "next/navigation"
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    const links = [{
        label: "Dashboard", href:"/"
    },{label: "Issues", href:"/issues"}]
  return (
    <div>
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaBug /></Link>
             <ul className='flex space-x-6'>
                {links.map(link => <Link href={link.href} className={classnames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800":true
                })}>{link.label}</Link> )}
             </ul>
        </nav>
    </div>
  )
}

export default NavBar