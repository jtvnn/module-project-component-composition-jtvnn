import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Details from '../components/Details';

function App() {
  const [apod, setApod] = useState();
  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setApod(res.data);
        console.log(res.data);
      }).catch(err => console.log(err));
  }, [])
  
  if (!apod) return <p>Fetching data...</p>
  return (
    <section>
      <Details 
        title={apod.title} 
        explanation={apod.explanation}  
        date={apod.date} 
        copyright={apod.copyright} 
        image={apod.hdurl} />
    </section>
  )
}

export default App
