const express = require('express');
const bodyParser = require('bodyParser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081);