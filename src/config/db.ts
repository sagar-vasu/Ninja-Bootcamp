import mongoose from "mongoose";
const uri: string = 'mongodb+srv://sagarvasu:loveyoubaba@cluster0-new9o.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true });

export default mongoose