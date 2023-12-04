'use client'

import React from "react"
import link from 'next/link'
import { SessionProvider, useSession } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()
    return (
        <header>
            <nav>
                <div className="flex flex-row bg-white dark:bg-gray-800 dark:text-white text-slate-900 py-5 px-3">
                    <div>
                        <a href="/" className="px-3 mr-2 p-3
                        rounded hover:bg-blue-400 dark:hover:bg-blue-700">Internet Movies Rental Home</a>
                    </div>
                    {status === 'loading' && (
                    <div>
                        <p>Loading...</p>
                    </div>
                    )}
                    {status === 'authenticated' && (
                        <>
                            <div>
                                <a href="/signout" className="px-3 mr-2 p-3
                                rounded hover:bg-blue-400 dark:hover:bg-blue-700" >Sign Out</a>
                                <p className="px-3 mr-2" >{session.user.name}</p>
                            </div>
                        </>
                    )}
                    {status === 'unauthenticated' && (
                        <div>
                            <a href="/signin" className="px-3 mr-2 p-3
                            rounded hover:bg-blue-400 dark:hover:bg-blue-700">Sign In</a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}