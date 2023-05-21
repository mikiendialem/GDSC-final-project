import React from 'react'
import { useState,useEffect } from 'react'
import './Birds.css'

function Birds() {
  const [birds,setBirds] = useState([])
  useEffect(()=>{
    fetch('https://api.unsplash.com/search/photos?query=birds&per_page=20&client_id=uMX7d_QXVCLew_v44rsf8l1-Ergkl5Vs-HT9uEWmvv8')
    .then(response=>response.json())
    .then(json=>setBirds(json.results))
    .catch(error=>console.log('error'))
  },[])
  return (
    <>
    <h1>Birds</h1>
    <div className='bird'>
      {birds.map(bird=>(
        <div className='bird-item' key={bird.id}>
          <img src={bird.urls.small} alt='birds'/>
        </div>
  ))}
  </div>
  </>
)}

export default Birds
