const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/posts');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection succeeded");
});

app.get('/posts', (req, res) => {
  Post.find({}, function (err, postsArr) {
    if (err) { console.error("Error in GET posts!"); }
    res.send({
      posts: postsArr
    })
  }).sort({_id: 'asc'}); 
});

app.post('/posts', (req, res) => {
  const db = req.db; /* purpose? */
  const title = req.body.title;
  const description = req.body.description;
  const newPost = Post({
    title: title,
    description: description
  });

  newPost.save(function (err) {
    if (err) {
      console.error(err);
    }
    res.send({
      status: true,
      message: "Post saved successfully!"
    });
  });

});


app.listen(process.env.PORT || 8081);