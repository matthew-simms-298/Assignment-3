'use client'

import React from "react"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between h-10 mb-10">
        <div className="flex flex-row flex-wrap text-md">
            <div className="p-5">
                <p className="font-bold text-2xl">Internet Movie Rentals Co.</p>
                <p className="text-s">© 1980-2024</p>
            </div>
            <div className="p-5">
                <div>
                    <p className="font-bold">Email:</p>
                </div>
                <div>
                    <p className="underline">internetmovies.rental@imr.com</p>
                </div>
            </div>
            <div className="p-5">
                <div>
                    <p className="font-bold">Base of Operation:</p>
                </div>
                <div>
                    <p>BUSINESS PARK ST BLVD NW. Los Angeles CA, United States</p>
                </div>
            </div>
        </div>
        </footer> 
    )
}