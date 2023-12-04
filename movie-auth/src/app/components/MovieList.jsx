'use client'
import React from 'react';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
/*
Use this to create subhashmaps to use in a foreach loop. 
Note that when there is a connection between the database and the code, 
then remove the placeholder entry in the hashmap
*/
let movieInfo = {};
const dummyMovies = [
                     ['Undertale: The Musical (The Movie)','Chris Pratt','2033-11-09'],
                     ['FNAF 2: He Always Comes Back', 'Donald J. Trump', '2025-5-31'],
                     ['Finding Nemo 3: Moving On','Illumination','2025-8-15'],
                     ['Squidward\'s Movie: The Clarinet Incident','Steven Hillberg','2026-12-6'],
                     ['Twins: The Skyhigh Bond','George W. Bush', '2028-11-9'],
                     ['The Bridge','Felix Arvid Ulf Kjelberg', '2027-12-6'],
                     ['The Beast Within: The Million Dollar Blindsight','Mr.Twitter','2026-12-6'],
                     ['The Cupcake Operation','Bryant Moreland','2026-12-15'],
                     ['Snow Green and The Miniladds','Brian Terror','2025-11-9'],
                     ['FE Human','Steven Spillberg','2045-08-25'],
                     ['J.A.W.N Academy: The Horrific Insights','Mohammed Alhaifi','2023-12-15'],
                     ['Super Mario Movie 2: The Rise of Waluigi','Illumination','2025-5-16'],
                     ['Minions 8: We\'re still funny right?','Whocares Sr.','2035-11-20'],
                     ['Emoji Movie 2: Sticky Keys Rise Up','Uncool Boomer the Third','2028-5-19'],
                     ['How to Not be a Leader: Two Eyes Weeping','Canadian Association for the Politically Tired','3000-1-1'],
                     ['How Waluigi was Robbed From His Spot in Smash Bros','Theodore Wells','2023-12-15'],
                     ['Sugarcrash','Paul Walker','2024-12-5'],
                     ['Sincinaty: Going Gorilla', 'John Harambe', '2028-5-18'],
                     ['NeedForDrift','RCMS Productions','2023-12-15'],
                     ['Pushing To The Limit','RCMS Productions','2021-1-1'],
                     ['Power to Weight Ratio: Dodges most neglected','RCMS Productions','2022-1-1'],
                     ['German Engineering: A Travesty','RCMS Productions','2023-1-1'],
                     ['Mercedes vs. BMW', 'RCMS Productions', '2024-1-15'],
                     ['Tigers and Lions and Engines Oh My!','RCMS Productions','2024-1-1'],
                     ['Check Engine Light: BMWs most neglected', 'RCMS Productions','2024-1-1'],
                     ['Wheres my Transmission?: A Dodge Story', 'RCMS Productions','2024-5-10'],
                     ['The Dodge Viper: A Death Machine', 'RCMS Productions','2024-8-10'],
                     ['Tail of a lone soul', 'RCMS Productions','2024-8-10'],
                     ['Python: The Lonely Bracket', 'RCMS Productions','2024-8-10'],
                     ['The Grind: A tale of a programmer', 'RCMS Productions','2024-8-10'],
                     ['Hennessy Performance: What were they thinking?', 'RCMS Productions','2024-8-10'],
                     ['Mercedes 1910: A Time before Competition','RCMS Productions','2024-8-10'],
                     ['The ICE: History of Awesomeness','RCMS Productions','2024-8-10']
                    ];
  
  const asortMovies = (title,author,release) => {
    let keys = Object.keys(movieInfo).map(Number);
    let maxKey = Math.max(...keys);
    let newEntry = {'Title: ': title, 'Author: ': author, 'Date Released: ': release}
    movieInfo[maxKey+1] = newEntry;
    return movieInfo;
  };

 let hoverString = '';
  //Pull data from database using Async Function
const moviesList = async () => {
    const movie = await fetch();
    return movie;
  };

  const setHoverTime = (time) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                  'September', 'October', 'November', 'December'];

    let convertedDateString = time.replace(/-/g, '/');
    let formedDate = new Date(convertedDateString);
    let year = formedDate.getFullYear();
    let month = months[formedDate.getMonth()];
    let day = days[formedDate.getDate()];

    let formattedDate = `${day}, ${month} ${formedDate.getDate()}, ${year}`
    hoverString = formattedDate;
  }

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .catch((err) => console.log(err))
      .finally(() => {
        setShowModalDelete(false);
        router.refresh();
      });
  };

export default function MovieList() {
    return (
        <div className='p-10 border rounded-md bg-slate-300 dark:bg-slate-700 dark:text-white w-2/5'>
                <div className=''>
                    {dummyMovies.map((movie, index) => (
                        <div className='p-5 my-5 rounded-md bg-slate-400 dark:bg-slate-500' key={index}>
                            <h2 className='font-bold underline text-lg'>Title:</h2>
                            <p className='no-underline font-normal pb-2 italic pl-2'>"{movie[0]}"</p>
                            <p className='font-bold pt-2 underline text-lg'>Author:</p>
                            <p className='font-normal no-underline pb-2 pl-2'>{movie[1]}</p>
                            <p className='font-bold pt-2 underline text-lg'>Release Date: </p>
                            <p className='font-normal no-underline pb-2 pl-2'>{movie[2]}</p>
                            <button className='border text-white hover:bg-white hover:text-black rounded-md p-2 mr-2 pr-4 pl-4 mt-2'
                                >Edit</button>
                            <button className='border text-white hover:bg-red-500 hover:text-black rounded-md p-2 mx-2 mt-2'
                                >Delete</button>
                        </div>
                    ))}
                </div>
        </div>
    );
};

