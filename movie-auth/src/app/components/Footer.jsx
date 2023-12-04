'use client'

import React from "react"

export default function Footer() {
    return (
        <footer className="h-10 p-20 scroll pb-72 flex justify-center bg-slate-400 dark:bg-slate-700">
        <div className="flex flex-row flex-wrap text-md">
            <div className="p-5">
                <p className="font-bold text-2xl">Internet Movie Rentals Co.</p>
                <p className="text-s">© 1980-2024</p>
            </div>
            <div className="p-5">
                <div>
                    <p className="font-bold">Contact Us:</p>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Email:</td>
                            <td>internetmovies.rental.support@imr.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>+1 (800) 888 - 8888</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="p-5">
                <div>
                    <p className="font-bold">Base of Operation:</p>
                </div>
                <div>
                <p className="">Canada Locations:</p>
                    <div>
                        <p>East View PKWY NE. Halifax NS, Canada</p>
                        <p>Marine DR SE. Vancouver BC, Canada</p>
                    </div>
                    <p className="mt-2">US Locations:</p>
                    <div>
                        <p>Business Park ST BLVD NW. Los Angeles CA, United States</p>
                    </div>
                </div>
            </div>
        </div>
        </footer> 
    )
}
