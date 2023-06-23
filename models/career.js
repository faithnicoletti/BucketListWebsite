const mongoose = require('mongoose');

const Schema = mongoose.Schema;





const careerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
    comments: String, 
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Career', careerSchema);





// const travelSchema = new Schema ({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     priority: Number,
// }, {timestamps: true});

// module.exports = mongoose.model('Travel', travelSchema);





// const hobbySchema = new Schema ({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     priority: Number,
// }, {timestamps: true});

// module.exports = mongoose.model('Hobby', hobbySchema);





// const tasteSchema = new Schema ({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     priority: Number,
// }, {timestamps: true});

// module.exports = mongoose.model('Taste', tasteSchema);





// const fitnessSchema = new Schema ({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     priority: Number,
// }, {timestamps: true});

// module.exports = mongoose.model('Fitness', fitnessSchema);




//Organized - Bucket LIST!!!//
//the idea is to have a place to organize and prioritize your goals.
//Once you feel like you have 'completed' said goal, you can mark it as 'complete'.
//it will move onto its own page of 'completed'
//I want to make it exciting so when you have completed a goal,
//you can dialog it, like a journal entrey or photo album
//there will be a comments section and an upload photos section to celebrate your completion!
//:schema(s)?// maybe different schema's? as a way to organize your goals? 


//Home page that has different Bucket List option:
//it will link to the following 4 below; 
//1. career goals
//2. travel destination goals
//3. skills&hobbies you would like to try/learn
//4. food/drink/cultural experiences you want to try

//each 4 bucket list option scan open up into a list you have created of goals
//in this list you can chose to delete, or mark as complete - 
//-either will remove the goal form that list. 

//I want to create a page if you mark a goal as complete that
//allows you to dialog your experience completing that goal - 
//- sort of like a journal entry 

//journal entry will allow you to 'comment on experience', upload photos,
//& rate your overall experience - add some type of congrats on goal completed!



