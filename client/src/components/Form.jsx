import React from 'react';

const Form = ({showForm, sendFormData}) => {

 const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  sendFormData(formJson.name, formJson.rating, formJson.comment);
 }

 return (
  <div>
    {showForm ?
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Enter Album Name" required></input>
        <br></br>
        <input type="radio" id="rating1" name="rating" value="1"/>
        <label htmlFor="rating1">1</label>
        <input type="radio" id="rating2" name="rating" value="2"/>
        <label htmlFor="rating2">2</label>
        <input type="radio" id="rating3" name="rating" value="3"/>
        <label htmlFor="rating3">3</label>
        <input type="radio" id="rating4" name="rating" value="4"/>
        <label htmlFor="rating4">4</label>
        <input type="radio" id="rating5" name="rating" value="5"/>
        <label htmlFor="rating5">5</label>
        <br></br>
        <input type="text" name="comment" placeholder="Enter Comment" maxLength="250" size="50" required></input>
        <button type="submit">SUBMIT</button>
      </form> : null}
  </div>
 )
};

export default Form;

