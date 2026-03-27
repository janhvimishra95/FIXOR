const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/fixor')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const Service = mongoose.model('Service', {
  title: String,
  desc: String,
  price: Number,
  image: String,
  category: String
});

// Routes
app.get('/api/him', async (req,res)=>{
  res.json(await Service.find({category:'him'}));
});

app.get('/api/her', async (req,res)=>{
  res.json(await Service.find({category:'her'}));
});

app.get('/api/home', async (req,res)=>{
  res.json(await Service.find({category:'home'}));
});

app.listen(5000, ()=>console.log("Server running on port 5000"));