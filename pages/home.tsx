import * as React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

const home: NextPage = () => {
  const [open, setOpen] = React.useState(true);
  const date = new Date().getHours();
  const greeting = date < 12 ? 'morning' : date < 18 ? 'afternoon' : 'evening';

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Digest</title>
        <meta name="digest" content="Generated by create next app" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <Navbar />
      <div className='mx-32 flex flex-col'>
        <div className='sticky top-5 mb-20'>
          <h1 className='absolute left-0 text-3xl font-bold'>Good {greeting} [user]</h1>
          <div className="absolute right-0 border p-1 rounded-lg">
            <SearchIcon sx={{ fontSize: 20 }} />
            <input type="text" className="bg-inherit btn ml-1" placeholder="Search" />
          </div>
        </div>
        <div className='grid content-evenly justify-items-center mb-32'>
          <h1 className='text-5xl'>[Placeholder]</h1>
          {/* <div className='bg-gray-800 w-32 h-48 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-48 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-48 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-48 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-48 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div> */}
        </div>
        <div className='sticky top-5 mb-10'>
          <h1 className='text-2xl font-bold'>Breaking</h1>
        </div>
        <div className='grid content-evenly justify-items-center mb-32'>
          <h1 className='text-5xl'>[Placeholder]</h1>
          {/* <div className='bg-gray-800 w-32 h-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div>
            <div className='bg-gray-800 w-32 h-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'></div> */}
        </div>
      </div>
      <Copyright sx={{ pt: 4 }} />
    </div>
  );
}

export default home;