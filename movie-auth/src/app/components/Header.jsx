'use client'

import React from "react"
import link from 'next/link'
import { SessionProvider, useSession } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()
    return (
        <header>
            <nav>
                <div className="flex flex-row bg-white dark:bg-gray-800 dark:text-white text-slate-900 py-5 px-3 border-y">
                    <div>
                        <img src="\images\logo.png" 
                        alt="Company logo of a movie clip sign with the company name on it"
                        className='h-22 w-22 pb-1 mr-2'/>
                    </div>
                    <div className='pt-10'>
                        <a href="/" className="px-3 mr-2 p-3
                        rounded hover:bg-blue-400 dark:hover:bg-blue-700 text-2xl">Home</a>
                    </div>
                    {/*
                    {status === 'loading' && (
                    <div className='pt-10'>
                        <p className='rounded px-3 mr-2 p-3 text-2xl'>Loading...</p>
                    </div>
                    )}
                    */}
                    {status === 'authenticated' && (
                        <>
                            <div className='pt-10'>
                                <a href="/signout" className="px-3 mr-2 p-3
                                rounded hover:bg-blue-400 dark:hover:bg-blue-700 text-2xl">Sign Out</a>
                                <p className="px-3 mr-2" >{session.user.name}</p>
                            </div>
                        </>
                    )}
                    {status === 'unauthenticated' && (
                        <div className='pt-10'>
                            <a href="/signin" className="px-3 mr-2 p-3
                            rounded hover:bg-blue-400 dark:hover:bg-blue-700 text-2xl">Sign In</a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}