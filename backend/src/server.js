const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://sandbox:sandbox@diegolabs-y2jf2.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(routes)

app.get('/', (req, res) => { 
  return res.json({message: 'hello world'});
});

app.listen(3333);

