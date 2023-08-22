import mongoose from "mongoose";

async function connectDB() {
    try {
        if(mongoose.connection[0]?.readyState) return
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('success');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB