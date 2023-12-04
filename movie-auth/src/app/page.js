import Image from 'next/image'
import MovieList from './components/MovieList';

export default function Home() {
  return (
    <main className='bg-slate-400 dark:bg-slate-700'>
      <div className='pt-5'>
        <h1 className=' text-3xl text-center'>IMR Movies</h1>
      </div>
      <div className='p-5 rounded-md flex justify-center flex-row'>
        {/* Print List of Movies from data base (Name, Author, Date Released) */}
        {/*<MovieList/>*/}
      </div>
    </main>
  )
}
