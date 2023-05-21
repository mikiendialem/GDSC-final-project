import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
        <h1>SnapShot</h1>
        <div className='btn'>
            <input type="text" />
            <button><span class="material-symbols-outlined">search</span></button>
        </div>
        <div className='ul'>
        <ul>
            <li><Link to ="/mountain"><span>Mountains</span></Link></li>
            <li><Link to="/beaches"><span>Beaches</span></Link></li>
            <li><Link to="/birds"><span>Birds</span></Link></li>
            <li><Link to="/food"><span>Food</span></Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Home
