'use client';
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";
import{usePathname} from "next/navigation"
import classnames from 'classnames';
import { Avatar, Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';

const NavBar = () => {
    const currentPath = usePathname();
   const {status,data:session}= useSession();

    const links = [{label: "Issues", href:"/issues"}]
  return (
    <div>
        <nav className=' border-b mb-5 px-5 h-14 py-4'>
            <Flex justify="between">
                <Flex align="center" gap="4"><Link href="/issues"><FaBug /></Link>
             <ul className='flex space-x-6'>
                {links.map(link => <Link key={link.href} href={link.href} className={classnames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 font-semibold":true
                })}>{link.label}</Link> )}
             </ul></Flex>
                <Box>
                     {status === "authenticated" &&
                     (<DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Avatar src={session.user!.image!} fallback="?" size="2" radius="full"/>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Content>
                            <DropdownMenu.Label>
                                <Text size="2">
                                {session.user!.email}</Text>
                            </DropdownMenu.Label>
                            <DropdownMenu.Item><Link href="/api/auth/signout">Logout</Link> </DropdownMenu.Item>
                        </DropdownMenu.Content>
                     </DropdownMenu.Root>

                     
                        //
                        )}

             {status==="unauthenticated" && <Button color='blue'><Link href="/api/auth/signin">SignIn</Link></Button>}
             
                </Box>
            </Flex>
            
            
            
        </nav>
    </div>
  )
}

export default NavBar