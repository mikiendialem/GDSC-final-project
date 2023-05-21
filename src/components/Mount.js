import React from 'react'
import { useState,useEffect } from 'react'
import './Mount.css'

function Mount() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.unsplash.com/photos/random?query=mountain&count=20&client_id=uMX7d_QXVCLew_v44rsf8l1-Ergkl5Vs-HT9uEWmvv8')
    .then(response=>response.json())
    .then(json=>setData(json))
    .catch(error=>console.log(error))
  },[]);
  return (
    <>
    <h1>Mountain</h1>
    <div className='img'>
      {data.map(item=>(
        <div className='img-div' key={item.id}>
          <img src={item.urls.regular} alt='mountain' />
        </div>
      ))}
    </div>
    </>
  )
}

export default Mount
