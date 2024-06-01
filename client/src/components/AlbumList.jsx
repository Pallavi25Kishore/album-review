import React from 'react';
import AlbumItem from './AlbumItem.jsx';

const AlbumList = ({albums, reviews, handleDeleteButton, handleEditButton, showEditForm, sendEditFormData}) => {
  return (
    <div>
      {albums.map((album) => {return <AlbumItem album={album} reviews={reviews} handleDeleteButton={handleDeleteButton} handleEditButton={handleEditButton} sendEditFormData={sendEditFormData} showEditForm={showEditForm} key={album['_id']}  />})}
    </div>
  )
};

export default AlbumList;