const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/toDoRoutes');

require('dotenv').config();

const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Database connected!');
    
}).catch((err)=>{
    console.log(`Error connecting to database ${err}`);
    
})

app.use(routes);

app.listen(port, ()=>{
    console.log(`app running on port ${port}...`);
    
});