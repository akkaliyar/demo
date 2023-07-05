import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    class:{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
})
export default mongoose.model('Student',StudentSchema);