import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Explore.css'

const EventCard = ({ event }) => (
  <div className="p-4 rounded-lg flex flex-row min-h-30 sm:flex-row items-stretch space-y-4 sm:space-y-0 sm:space-x-5">
    <div className="w-16 pt-4 h-auto rounded-lg flex-shrink-0">
      <img src="/public/images/event.png" alt="" />
    </div>
    <div className="flex flex-col text-center sm:text-start sm:flex-grow">
      <h3 className="text-white text-md sm:font-semibold sm:text-lg">{event.title}</h3>
      <p className="text-gray-400 text-sm mt-2 hidden jb:block">{event.description}</p>
      <div className="flex flex-row jb:hidden">
        
          <p className="text-gray-400 block mt-4 flex-row text-xs eventdate">{event.date}</p>
       
        <a
          href=""
          className="register-btn mt-2 flex bg-black text-white font-small  sm:px-2 rounded-lg
         hover:bg-gray-200 transition duration-300"
          style={{ borderColor: '#4C4B4B' }}>
          Register
          <ArrowUpRight className='h-4' />
        </a>
      </div>
    </div>
    <div className="hidden sm:flex-col jb:block  register-container">
      <p className="text-gray-400 block flex-row text-xs eventdate">{event.date}</p>
      <a
        href=""
        className="register-btn mt-2 flex bg-black text-white font-small  sm:px-2 rounded-lg
         hover:bg-gray-200 transition duration-300"
        style={{ borderColor: '#4C4B4B' }}>
        Register
        <ArrowUpRight className='h-4' />
      </a>
    </div>
  </div>
);




export default function ExploreLatest() {
  const events = [
    {
      id: 1,
      title: 'Scaling Ethereum - Mastering Layer 2 Technologies',
      description: 'In this workshop, we will explore the challenges and solutions related to scaling Ethereum, one of the most critical aspects of blockchain development today.',
      date: "OCTOBER 17TH 2024",
      image: '',
      alt: 'the event image name',
    },
    {
      id: 2,
      title: 'Scaling Ethereum - Mastering Layer 2 Technologies',
      description: 'In this workshop, we will explore the challenges and solutions related to scaling Ethereum, one of the most critical aspects of blockchain development today.',
      date: 'OCTOBER 17TH 2024',
      image: '',
      alt: 'the event image name',
    },
  ];

  return (
    <div className="bg-black max-h-screen h-70 p-4 sm:p-6">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="text-white text-2xl font-bold sm:mb-4 sm:w-1/3">
            EXPLORE THE <br className="hidden sm:inline" /> LATEST
          </h2>
          <p className="text-gray-400 text-sm sm:w-2/3 sm:mt-0 mt-2">
            MARMA FINTECH develops a dynamic workspace with events like workshops, team-building activities,
            and celebration gatherings that inspire collaboration, growth, and connection.
          </p>
        </div>


        <div className="space-y-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}



