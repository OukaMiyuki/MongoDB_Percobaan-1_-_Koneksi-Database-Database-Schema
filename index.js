const mongoose = require('mongoose');

//database connection
const mongoDB = 'mongodb://localhost/playground';
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB Server : ', err));

//Create database schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
}); 

const Course = mongoose.model('Course', courseSchema);

//this is how to insert data into the database
async function createCourse(){
    try{
        const course = new Course({
            name: 'Angular Course',
            author: 'Ouka',
            tags: ['Angular', 'frontend'],
            isPublished: true
        });
    
        const result = await course.save();
        console.log(result);
    } catch(err){
        console.log('There\'s an error : ', err.message);
    }
}

createCourse();