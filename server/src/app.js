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

const SERVER_PORT = 8081;

/* 
TODO:
- Implement more robust error handling and input checking (e.g. escaping for XSS; input validation - type, length, format, range; URL/HTML encoding, use sanitaize-html)
- Server-side rendering
- Containerize microservices via Docker
*/

/* Fetch all posts */
app.get('/posts', (req, res) => {
  Post.find({}, function (err, postsArr) {
    if (err) { 
      console.error(err);
    }
    res.send({
      posts: postsArr
    })
  }).sort({_id: 'asc'}); 
});

/* Fetch single post */
app.get('/post/:id', (req, res) => {
  /* const db = req.db; */
  Post.findById(req.params.id, 'title description', function (err, post){
    if (err) {
      console.error(err);
    }
    res.send(post);
  });
});

/* Add new post */
app.post('/posts', (req, res) => {
  /* const db = req.db;  */
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

/* Update single post */
app.put('/posts/:id', (req, res) => {
  /* const db = req.db; */
  Post.findById(req.params.id, 'title description', function (err, post) {
    if (err) {
      console.error(err);
    }
    post.title = req.body.title;
    post.description = req.body.description;
    post.save(function(err){
      if (err) {
        console.error(err);
      }
      res.send({
        success: true
      });
    });
  });
});


app.listen(process.env.PORT || SERVER_PORT);