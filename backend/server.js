const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const app = express(); 
const port = 4000;


app.use(bodyParser.json()); 
app.use(cors());


mongoose.connect('mongodb://localhost:27017/', {
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/users')); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})