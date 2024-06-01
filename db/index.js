// Include your database here
const mongoose = require('mongoose');
require('dotenv').config();
const data = require('./exampleAlbums.js').data;
mongoose.connect(`mongodb://${process.env.DB_Port}/${process.env.DB_Name}`);

const albumSchema = mongoose.Schema({
  name: String
});

const reviewSchema = mongoose.Schema({
  name: String,
  rating: Number,
  comment: String
});

const Name = mongoose.model('Name', albumSchema);
const Review = mongoose.model('Review', reviewSchema);

Name.find({})
.then((response)=> {
  if (response.length === 0) {
    Name.create(data)
    .then(() => {
    console.log("album list is ready!");
    })
    .catch((err) => {
    console.log('error in creating album list', err);
    });
  }
})
.catch((err) => {
  console.log('error', err);
});


exports.getAllAlbums = () => {
  return Name.find({});
};

exports.getAllReviews = () => {
  return Review.find({}).sort('-rating').exec();
};

exports.postReview = (review) => {
  return new Review(review).save();
};

exports.updateReview = (index, name, rating, comment) => {
  return Review.findByIdAndUpdate(index, {$set: {name: name, rating: rating, comment: comment}});
};

exports.deleteReview = (index) => {
  return Review.findByIdAndDelete(index);
};






