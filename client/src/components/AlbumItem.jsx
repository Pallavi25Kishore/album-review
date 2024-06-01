import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const AlbumItem = ({album, reviews, handleDeleteButton, handleEditButton, sendEditFormData, showEditForm}) => {

  return (
    <div>
      <hr></hr>
    <h4>ALBUM: {album.name}</h4>
    <ReviewsList album={album} reviews={reviews} handleDeleteButton={handleDeleteButton} handleEditButton={handleEditButton} sendEditFormData={sendEditFormData} showEditForm={showEditForm}/>
    </div>
  )
};

export default AlbumItem;