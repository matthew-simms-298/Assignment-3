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
const dummyMovies = [['Undertale: The Musical (The Movie)','Chris Pratt','2033-11-09'],
                     ['FE Human','Steven Spillberg','2045-08-25'],
                     ['dummyTitle3','dummyAuthor3','dummyDate3'],
                     ['dummyTitle4','dummyAuthor4','dummyDate4'],
                     ['dummyTitle5','dummyAuthor5','dummyDate5'],
                     ['dummyTitle6','dummyAuthor6','dummyDate6'],
                     ['dummyTitle7','dummyAuthor7','dummyDate7'],
                     ['dummyTitle8','dummyAuthor8','dummyDate8']];

//This is to load dummy examples to present the list of movies and their respective details.
const loadMoviesIfEmpty = () => {
    for(let i = 0; i< dummyMovies.length; i++){
        asortMovies(dummyMovies[i][0],dummyMovies[i][1],dummyMovies[i][2]);
    }
}
  
  const asortMovies = (title,author,release) => {
    let keys = Object.keys(movieInfo).map(Number);
    let maxKey = Math.max(...keys);
    let newEntry = {'Title: ': title, 'Author: ': author, 'Date Released: ': release}
    movieInfo[maxKey+1] = newEntry;
    return movieInfo;
  };

  const [postEdit, setPostEdit] = useState(post);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isMovieListEmpty, setMovieListEmpty] = useState(true);

  //Pull data from database using Async Function
const moviesList = async () => {
    const movie = await fetch();
    return movie;
  };

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
        <div className='p-10 border rounded-md bg-slate-700 text-white w-2/5'>
            {data === null && (
                <div className='bg-slate-300 dark:bg-slate-800 p-5 pb-56'>
                    <h1 className='text-2xl font-bold'>Ohhhh, That wasn't Supposed to Happen</h1>
                    <p className='text-lg'>Looks like there was an error. Please try again later.</p>
                </div>
            )}
            {data !== null && (
                <div>
                    {Object.values(movieInfo).map((movie, index) => (
                        <div className={index === Object.keys(movieInfo).length-1 ? 
                                        'bg-slate-800 rounded-md p-4': 
                                        'bg-slate-800 rounded-md p-4 mb-2'} key={index}>
                            {Object.entries(movie).map(([key, value], i) => (
                                <p key={i}>{key}{value}</p>
                            ))}
                            <button className='bg-slate-400 text-white hover:bg-white hover:text-black rounded-md p-2 mr-2'
                                onClick={() => setShowModalEdit(true)}>
                                Edit
                            </button>

                            <button className='bg-slate-400 text-white hover:bg-white hover:text-black rounded-md p-2 mx-2'
                                onClick={() => setShowModalDelete(true)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

