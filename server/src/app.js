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
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Mongoose connection succeeded');
});
db.once('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

const SERVER_PORT = 8081;

/* Fetch all posts */
app.get('/posts', (req, res) => {
  Post.find({}, (err, postsArr) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        message: 'Error: Problem occurred while retrieving posts.',
      });
      throw err;
    }
    res.send({
      posts: postsArr,
    });
  }).sort({ _id: 'asc' });
});

/* Fetch single post */
app.get('/post/:id', (req, res) => {
  /* const db = req.db; */
  Post.findById(req.params.id, 'title description', (err, post) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        message: 'Error: Problem occurred while searching for post.',
      });
      throw err;
    }
    res.send(post);
  });
});

/* Add new post */
app.post('/posts', (req, res) => {
  /* const db = req.db;  */
  const {
    body: {
      title,
      description,
    },
  } = req;
  const newPost = Post({
    title,
    description,
  });
  newPost.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        message: 'Error: Post was not created!',
      });
      throw err;
    }
    res.send({
      status: true,
      message: 'Post saved successfully!',
    });
  });
});

/* Update single post */
app.put('/posts/:id', (req, res) => {
  /* const db = req.db; */
  Post.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    (error) => {
      if (error) {
        console.error(error);
        res.status(500).send({
          success: false,
          message: 'Error: Post was not found and not saved!',
        });
        throw error;
      }
      res.send({
        success: true,
        message: 'Post updated!',
      });
    });
});

app.delete('/posts/:id', (req, res) => {
  /* const db = req.db */
  Post.remove({
    _id: req.params.id,
  }, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        message: 'Error: Post was not deleted!',
      });
      throw err;
    }
    res.send({
      success: true,
      message: 'Post deleted!',
    });
  });
});


app.listen(process.env.PORT || SERVER_PORT);
