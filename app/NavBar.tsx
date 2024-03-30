'use client';
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";
import{usePathname} from "next/navigation"
import classnames from 'classnames';
import { Box, Button, Flex } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';

const NavBar = () => {
    const currentPath = usePathname();
   const {status,data:session}= useSession();

    const links = [{
        label: "Dashboard", href:"/"
    },{label: "Issues", href:"/issues"}]
  return (
    <div>
        <nav className=' border-b mb-5 px-5 h-14 py-4'>
            <Flex justify="between">
                <Flex align="center" gap="4"><Link href="/"><FaBug /></Link>
             <ul className='flex space-x-6'>
                {links.map(link => <Link key={link.href} href={link.href} className={classnames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 font-semibold":true
                })}>{link.label}</Link> )}
             </ul></Flex>
                <Box>
                     <Box>{status === "authenticated" && <Button color='red'><Link href="/api/auth/signout">Logout</Link></Button>}
             {status==="unauthenticated" && <Button color='blue'><Link href="/api/auth/signin">SignIn</Link></Button>}
             </Box>
                </Box>
            </Flex>
            
            
            
        </nav>
    </div>
  )
}

export default NavBar