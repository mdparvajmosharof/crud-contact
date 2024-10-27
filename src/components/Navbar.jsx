"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const router = useRouter()
    const session = useSession()

    const handler = () => {
        router.push("/api/auth/signin")
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'>Conto</a>
            </div>
            <div className="flex-none gap-5">

                    <Link href={"/contacts"}>
                <button className='btn btn-primary'>
                    Contacts
                </button>
                    </Link>
                    <Link href={"/addcontact"}>
                <button className='btn btn-primary'>
                    Add Contact
                </button>
                    </Link>
                {session?.status === 'unauthenticated' &&<Link href={"/signup"}><button className='btn btn-accent'>
                    Register</button></Link>}

                {session?.status === 'unauthenticated' && <button className='btn btn-accent' onClick={handler}>Log In</button>
                }
                {session?.status === 'authenticated' &&
                    <button className='btn btn-accent' onClick={() => signOut()}>Log Out</button>
                }
            </div>
        </div>
    )
}

export default Navbar
