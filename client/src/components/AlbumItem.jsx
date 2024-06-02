import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const AlbumItem = ({album, reviews, handleDeleteButton, sendEditFormData}) => {

  return (
    <div>
      <hr></hr>
    <h4>ALBUM: {album.name}</h4>
    <ReviewsList album={album} reviews={reviews} handleDeleteButton={handleDeleteButton} sendEditFormData={sendEditFormData} />
    </div>
  )
};

export default AlbumItem;