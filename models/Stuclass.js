import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const StuclassSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
export default mongoose.model('StuClass',StuclassSchema);