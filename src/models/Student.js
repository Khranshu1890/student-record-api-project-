const mongoose=require('mongoose')


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        min:4,
        max:30,
        required:true
    },
    course:{
        type:String,
        min:2,
        max:20,
        required:true

    },
    age:{
        type: Number,
        min: 18,
        max:75,
        required:true

    },
    city:{
        type:String,
        required:true

    }
})

module.exports=mongoose.model("Student",studentSchema);
