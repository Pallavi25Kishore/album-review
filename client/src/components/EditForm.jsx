import React from 'react';

const EditForm = ({review, showEditForm, sendEditFormData}) => {

  const handleFormSubmit = (event) => {
   event.preventDefault();
   const form = event.target;
   const formData = new FormData(form);
   const formJson = Object.fromEntries(formData.entries());
   sendEditFormData(review['_id'], review.name, formJson.rating, formJson.comment);
  }

  return (
   <div>
     {showEditForm ?
       (<form onSubmit={handleFormSubmit}>
         <input type="radio" id="rating1edit" name="rating" value="1"/>
         <label htmlFor="rating1edit">1</label>
         <input type="radio" id="rating2edit" name="rating" value="2"/>
         <label htmlFor="rating2edit">2</label>
         <input type="radio" id="rating3edit" name="rating" value="3"/>
         <label htmlFor="rating3edit">3</label>
         <input type="radio" id="rating4edit" name="rating" value="4"/>
         <label htmlFor="rating4edit">4</label>
         <input type="radio" id="rating5edit" name="rating" value="5"/>
         <label htmlFor="rating5edit">5</label>
         <br></br>
         <input type="text" name="comment" placeholder="Enter Edited Comment" maxLength="250" size="50" required></input>
         <button type="submit">SUBMIT</button>
       </form>) : null}
   </div>
  )
 };

export default EditForm;