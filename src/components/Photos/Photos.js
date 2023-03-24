import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';


const Photos = () => {
    const [photos, setPhotos]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=> res.json())
        .then(data => setPhotos(data))
    },[])

    return (
        < div className='container'>
            <h2>Welcome To All Photo House {photos.length}</h2>
           
           <div className='row row-cols-1 row-cols-md-3 g-4'>
           {
    photos.map(photo=> <Photo
    id ={photo.id}
    title={photo.title}
    thumbnailUrl={photo.thumbnailUrl}
    ></Photo>)
}
           </div>

        </div>
    );
};

export default Photos;