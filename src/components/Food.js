import React from 'react';
import { useState, useEffect } from 'react';
import './Food.css';

function Food() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=food&count=20&client_id=uMX7d_QXVCLew_v44rsf8l1-Ergkl5Vs-HT9uEWmvv8`)
      .then(response => response.json())
      .then(json => setFood(json))
      .catch(error => console.log('error'));
  }, []);
  console.log(food)
  return (
    <>
    <h1>Food</h1>
    <div className='food'>
      {/* {Array.isArray(food) && */}
        {food.map((eat) => (
          <div className='food_item' key={eat.id}>
            <img src={eat.urls.full} alt='food' />
          </div>
        ))}
    </div>
    </>
  );
}

export default Food;