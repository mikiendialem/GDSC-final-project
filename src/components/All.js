import React, { useState, useEffect } from 'react';
import './All.css'

function All(props) {
const [images, setImages] = useState([]);

useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?client_id=uMX7d_QXVCLew_v44rsf8l1-Ergkl5Vs-HT9uEWmvv8&count=20&query=mountains,beach,bird,food')
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(error => console.error(error));
}, []);

return (
    <div className='all'>
      {images.map(image => (
        <div className='all__item'>
            <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
        </div>
        ))}
    </div>
    );
}
export default All;