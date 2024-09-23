import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import '../index.css';
import Hero from './Hero.jsx';
import Fixture from './Fixture.jsx';
import PointTable from './PointTable.jsx';
import TopPerformers from './TopPerformers.jsx';
import Highlights from './Highlights.jsx'

function Home() {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageNumber((prevNumber) => (prevNumber === 7 ? 1 : prevNumber + 1));
    }, 5000); // Changes every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`home-page home-page${pageNumber} px-20 py-3`}>
        <Header></Header>
        <Hero />
      </div>
      <div className='px-19 py-5 bg-gray-100'>
        <Fixture/>
      </div>
      <div className="px-20 py-5 bg-white">
        <PointTable/>
      </div>
      <div className="px-20 py-5 bg-gray-900">
        <Highlights/>
      </div>
      <div className="px-20 py-5 bg-indigo-700">
        <TopPerformers/>
      </div>
      
    </>
  );
}

export default Home;
