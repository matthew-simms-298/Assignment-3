'use client'

import React from "react"
import link from 'next/link'
import { SessionProvider, useSession } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()
    return (
        <header>
            <nav>
            <div className="flex flex-row bg-white text-slate-900 py-5 px-3">
                <div>
                    <p className="">Assignment 3</p>
                </div>
                {status === 'loading' && (
                <div>
                    <p>Loading...</p>
                </div>
                )}
                {status === 'authenticated' && (
                    <>
                        <div>
                            <a href="/signout">Sign Out</a>
                            <p>{session.user.name}</p>
                        </div>
                    </>
                )}
                {status === 'unauthenticated' && (
                    <div>
                        <a href="/signin">Sign In</a>
                    </div>
                )}
                
            </div>
            </nav>
        </header>
    )
}