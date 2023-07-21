const fs = require('fs'); //access to file system model because we want to read the JSON file
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./../../models/taskModel');

dotenv.config({path:'./config.env'});

const DB =  process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection error:', err));

//Read JSON file

const tasks = JSON.parse(fs.readFileSync(`${__dirname}/tasks_data.json`, 'utf-8')); // Convert the file into a JS object

//Import data into DB
const importData = async () => {
    try{
        await Task.create(tasks)
        console.log('Data successfully loaded!');
    } catch (err){
        console.log(err);
    }
    process.exit(); //Stop the application
}

//Delete all data from collection database

const deleteData = async () => {
    try{
        await Task.deleteMany();
        console.log('Data successfully deleted!')
        
    }catch(err){
        console.log(err);
    }
    process.exit(); //Stop the application
};

if(process.argv[2] === '--import'){
    importData();
}else if (process.argv[2] === '--delete'){
    deleteData();
}

//console.log(process.argv);