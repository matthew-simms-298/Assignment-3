import { useState } from 'react'

export default function Overlay({state, title, body}) {
    const [isOpen, setIsOpen] = useState(state);
    return (
        <div className='relative'>
            {isOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-50
                flex items-center justify-center">
                    <div className="p-4 bg-slate-400 dark:bg-slate-700 rounded-md">
                        <h1 className='text-xl underline font-bold'>{title}</h1>
                        <p className='text-md'>{body}</p>
                        <input type="text" placeholder='Enter movie title (i.e: Undertale: The Musical (The Movie)' 
                               className='text-black placeholder-text-gray-500 border-2 bg-white dark:bg-gray-300 mb-5'></input>
                        <input type="text" placeholder='Enter new movie title (i.e: Undertale: The Musical (The Movie)' 
                               className='text-black placeholder-text-gray-500 border-2 bg-white dark:bg-gray-300'></input>
                        <input type="text" placeholder='Enter new movie author (i.e: John Doe)' 
                               className='text-black placeholder-text-gray-500 border-2 bg-white dark:bg-gray-300'></input>
                        <input type="text" placeholder='Enter new movie release date (i.e: 2028-12-12)' 
                               className='text-black placeholder-text-gray-500 border-2 bg-white dark:bg-gray-300'></input>
                        <button className='rounded-md bg-blue-500 text-white hover:bg-blue-300'>Enter</button>
                        <button className='rounded-md bg-blue-500 text-white hover:bg-blue-300'>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}