import React, { useState, useEffect } from 'react';
import './Beach.css';

function Beach() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?query=beaches&count=20&client_id=uMX7d_QXVCLew_v44rsf8l1-Ergkl5Vs-HT9uEWmvv8')
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
        <h1>Beaches</h1>
        <div className='beach'>
            {photos.map(photo => (
                <div className='beach_item' key={photo.id}>
                    <img src={photo.urls.full} alt='beach' />
                </div>
            ))}
        </div>
        </>
    );
}

export default Beach;