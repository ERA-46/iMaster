require('dotenv').config();

const express = require('express');
const itemsRoutes = require('./routes/items');
const jobRoutes = require('./routes/jobs');
const mongoose = require('mongoose');
const path = require('path');

//express app 
const app = express();

//middleware
app.use(express.json());

//static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/items', itemsRoutes);
app.use('/api/jobs', jobRoutes);

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
       console.log('Connected to MongoDB');
       
       app.listen(process.env.PORT, () =>{
           console.log('Server started on port', process.env.PORT);
       });

   }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
   });
