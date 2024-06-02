import React from 'react';
import AlbumItem from './AlbumItem.jsx';

const AlbumList = ({albums, reviews, handleDeleteButton, sendEditFormData}) => {
  return (
    <div>
      {albums.map((album) => {return <AlbumItem album={album} reviews={reviews} handleDeleteButton={handleDeleteButton} sendEditFormData={sendEditFormData} key={album['_id']}  />})}
    </div>
  )
};

export default AlbumList;