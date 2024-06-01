require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const model = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/album', (req, res) => {
  model.getAllAlbums()
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

app.post('/album', (req, res) => {
  model.postAlbum(req.body)
  .then((response) => {
    res.status(201).send('album saved');
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

app.get('/review', (req, res) => {
  model.getAllReviews()
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

app.post('/review', (req, res) => {
  model.postReview(req.body)
  .then((response) => {
    res.status(201).send('review saved');
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

app.put('/review/:id', (req, res) => {
  model.updateReview(req.params.id, req.body.name, req.body.rating, req.body.comment)
  .then((response) => {
    res.status(201).send('data updated');
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

app.delete('/review/:id', (req, res) => {
  model.deleteReview(req.params.id)
  .then((response) => {
    res.status(200).send('data deleted');
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})