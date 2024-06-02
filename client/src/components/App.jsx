import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Heading from './Heading.jsx';
import AddButton from './AddButton.jsx';
import Form from './Form.jsx';
import AlbumList from './AlbumList.jsx';

const App = () => {

  const [albums, setAlbums] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);


  const getReviews = () => {
    axios.get('/review')
    .then ((response) => {
      setReviews(response.data);
    })
    .catch((err) => {
      console.log('err from getting reviews data', err);
    });
  };

  useEffect(() => {
  axios.get('/album')
  .then((response) => {
    setAlbums(response.data);
    getReviews();
  })
  .catch((err) => {
    console.log('error in get request for /album', err);
  });
}, []);



  const handleAddButtonClick = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  };

  const sendReviewFromFormData = (name, rating, comment) => {
    axios.post('/review', {name: name, rating: rating, comment: comment})
  .then(() => {
    return axios.get('/review')
  })
  .then((response)=> {
    setReviews(response.data);
  })
  .catch((err) => {
    console.log('error from posting/getting review data', err);
  });
  };

  const sendFormData = (name, rating, comment) => {
    var match = false;
    for (var i = 0; i < albums.length; i++) {
      if (albums[i].name.toLowerCase() === name.toLowerCase()) {
        match = true;
        break;
      }
    }
    if (!match) {
      axios.post('/album', {name: name})
      .then(() => {
        return  axios.get('/album');
      })
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((err) => {
        console.log('error from sending and receiving new album data', err);
      });
    }
    sendReviewFromFormData(name, rating, comment);
  };

  const handleDeleteButton = (index) => {
    axios.delete(`/review/${index}`)
    .then(() => {
      console.log('item deleted');
      getReviews();
    })
    .catch((err) => {
      console.log('error in deleting item', err);
    })
  };



  const sendEditFormData = (index, name, rating, comment) => {
      axios.put(`/review/${index}`, {name: name, rating: rating, comment: comment})
      .then(() => {
        return axios.get('/review');
      })
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        console.log('error in editing', err);
      })
  };

  return (
    <div>
    <Heading />
    <AddButton handleAddButtonClick={handleAddButtonClick}/>
    <Form showForm={showForm} sendFormData={sendFormData} setShowForm={setShowForm}/>
    <AlbumList albums={albums} reviews={reviews} handleDeleteButton={handleDeleteButton} sendEditFormData={sendEditFormData} />
    </div>
  );

};

export default App;