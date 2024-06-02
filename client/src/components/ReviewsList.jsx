import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewsList = ({album, reviews, handleDeleteButton, sendEditFormData}) => {


    const reviewsForAlbum = reviews.filter ((review) => { // selecting reviews only for this album
      if (album.name === review.name) {
        return true;
      }
  });

  return (
    <>
      {reviewsForAlbum.length ?
    (<div>
    {reviewsForAlbum.map((review) => { return (<ReviewItem review={review} handleDeleteButton={handleDeleteButton} sendEditFormData={sendEditFormData} key={review['_id']}/>)})}
    </div>) : null }
  </>
  )
};

export default ReviewsList;