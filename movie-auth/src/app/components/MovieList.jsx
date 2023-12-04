'use client'
import React from 'react';
import Modal from "./Modal";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
/*
Use this to create subhashmaps to use in a foreach loop. 
Note that when there is a connection between the database and the code, 
then remove the placeholder entry in the hashmap
*/
let movieInfo = {
    0: {'Title: ': null, 'Author: ': null, 'Date Released: ': null}
};
  
  const asortMovies = (title,author,release) => {
    let keys = Object.keys(movieInfo).map(Number);
    let maxKey = Math.max(...keys);
    let newEntry = {'Title: ': title, 'Author: ': author, 'Date Released: ': release}
    movieInfo[maxKey+1] = newEntry;
    return movieInfo;
  };

  const [postEdit, setPostEdit] = useState(post);
  const [showModalDelete, setShowModalDelete] = useState(false);

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
        </div>
    );
};

