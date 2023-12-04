import Image from 'next/image'
import MovieList from './components/MovieList';

export default function Home() {
  return (
    <main className='bg-slate-400 dark:bg-slate-700'>
      <div className='pt-5'>
        <h1 className=' text-6xl text-center pb-3'>IMR Movies</h1>
      </div>
      <div className='p-5 pb-20 rounded-md flex justify-center flex-row bg-slate-500 dark:bg-slate-700'>
        {/* Print List of Movies from data base (Name, Author, Date Released) */}
        <MovieList/>       
      </div>
    </main>
  )
}
