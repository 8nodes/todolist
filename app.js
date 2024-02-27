const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo');
const port = 3030;
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/todos',todoRoutes);
app.listen(port , () => {
    console.log(`server running on port ${port}`)
})

mongoose.connect('mongodb+srv://Encryder:shingekinokyojin@cluster0.qfevinr.mongodb.net/todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})