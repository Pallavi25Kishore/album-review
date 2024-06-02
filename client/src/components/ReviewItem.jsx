import React, {useState} from 'react';
import EditForm from './EditForm.jsx';


const ReviewItem = ({review, handleDeleteButton, sendEditFormData}) => {

  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditButton = (event) => {
    event.preventDefault();
    setShowEditForm(!showEditForm);
  };

  return (
    <div>
      <div>REVIEW</div>
      <div>RATING: {review.rating}</div>
      <div>COMMENT: {review.comment}</div>
      <button onClick={handleEditButton}>EDIT</button>
      <button onClick={(e) => { e.preventDefault(); handleDeleteButton(review['_id'])}}>DELETE</button>
      <br></br>
      <EditForm review={review} sendEditFormData={sendEditFormData} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/>
    </div>
  )

};

export default ReviewItem;