import React from 'react';


const Photo = (props) => {
     console.log(props.thumbnailUrl)
    return (
        
        
            
            <div className='col'>
    <div className='card'>
      <img src={props.thumbnailUrl} className='card-img-top img-fluid p-2 rounded-4 w-75 mx-auto' alt="/img"/>
      <div className='card-body'>
        <h2>Id: {props.id}</h2>
        <h5 className='card-title'>Title: {props.title}</h5>
        <p className='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

    );
};















export default Photo;