const mongoose =  require('mongoose');
const stepSchema = new mongoose.Schema({
    description:{
        type: String,
    },
    completed:{
        type: Boolean,
        default: false,
    }
})
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    startTime:{
        type: Date,
        default: Date.now,
    },
    steps:[stepSchema],
    completed:{
        type: Boolean,
        default: true,
    }

})

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;