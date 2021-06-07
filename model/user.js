const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    gender:{
        type:String
    },
    date:{
        type: Date
    },
    address:{
        type: String
    },
    dia:{
        type: Boolean
    }
})

const data = mongoose.model('User',userSchema);

module.exports = data;