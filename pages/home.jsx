import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useUser } from '../firebase/useUser';
import Topic from '../components/Topic';
import { doc, setDoc, Timestamp } from "firebase/firestore";


const home = () => {

  const date = new Date().getHours();
  const greeting = date < 12 ? 'Morning' : date < 18 ? 'Afternoon' : 'Evening';
  const { user, logout } = useUser();
  const [news, setNews] = useState();
  const [events, setEvents] = useState([]);
  const [Frequency, setFrequency] = useState("");
  const topics = [];

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=53f7eb5c4a0b4b5f9ba183efb9aa1fd6')
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString('base64')}`,
      },
    })
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error(error));
  }, []);

  const Topics = [
    'Sports',
    'Politics',
    'Entertainment',
    'Technology',
    'Science',
    'Health',
    'Business',
  ];

  const saveData = async () => {
    const docData = {
      topics: [],
      frequency: frequency,
    };
    
    await setDoc(doc(db, "data", "one"), docData);
  }


  if (user) {
    return (
      <div className='mx-auto'>
        <Head>
          <title>Digest</title>
          <meta name='digest' content='Generated by create next app' />
          <link rel='icon' href='./public/favicon.ico' />
        </Head>
        <Navbar />
        <div className='mx-32'>
          <div className='sticky top-0 bg-white py-5'>
            <h1 className='left-0 text-6xl font-bold'>{greeting} {user.name}</h1>
          </div>
          <div className='flex flex-row mt-2'>
            <h3 className='mr-2'>How frequent would you like your digest?</h3>
            <select onChange={e => setFrequency(e.target.value)}>
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
            </select>
          </div>
          <div className='flex flex-row mt-2 mt-5'>
            <h3 className='mr-2 mt-1'>Enter a topic you're interested in</h3>
            <form>
              <input type="text" name="topic" className='border border-black rounded-sm bg-inherit btn ml-1 p-1' placeholder='Search' />
              <button className='btn-primary ml-2 btn border border-black rounded-sm p-1' onClick={saveData}>ADD</button>
            </form>
            {/* <input className='border-2 border-solid'></input>
             */}
          </div>
          <div className='flex justify-center mb-10'>
          </div>
          <div className='sticky top-20 mb-10 bg-white'>
            <h1 className='text-2xl font-bold'>Trending</h1>
          </div>
          <div className='grid content-evenly ml-10 mb-32'>
            <h1 className='text-5xl mb-5 text-right font-bold'>{news && news[0].source.name}</h1>
            <div className="flex flex-row space-x-4">
              <div>
                {news && news[0].title}
              </div>
            </div>
            <h1 className='text-5xl mb-5 text-right mt-10 font-bold'>{news && news[1].source.name}</h1>
            <div className="flex flex-row space-x-4">
              <div>
                {news && news[1].title}
              </div>
            </div>
            <h1 className='text-5xl mb-5 text-right mt-10 font-bold'>{news && news[2].source.name}</h1>
            <div className="flex flex-row space-x-4">
              <div>
                {news && news[2].title}
              </div>
            </div>
            <h1 className='text-5xl mb-5 text-right mt-10 font-bold'>{news && news[3].source.name}</h1>
            <div className="flex flex-row space-x-4">
              <div>
                {news && news[3].title}
              </div>
            </div>
            <h1 className='text-5xl mb-5 text-right mt-10 font-bold'>{news && news[4].source.name}</h1>
            <div className="flex flex-row space-x-4">
              <div>
                {news && news[4].title}
              </div>
            </div>
          </div>
          <div className='sticky top-24 bg-white mb-10'>
            <h1 className='text-2xl font-bold'>Your Topics</h1>
            <div className='flex flex-row space-x-4 justify-center mb-5 mt-5'>
              {Topics.map((topic) => <Topic label={topic} />)}
            </div>
          </div>
          {Topics.map((topic) =>
            <div className='mb-10'>
              <h1 className='text-2xl font-bold text-right'>from {topic}</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default home;
