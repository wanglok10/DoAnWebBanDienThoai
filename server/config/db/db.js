import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    
    const url = 'mongodb+srv://quangloc:10022002@cluster0.zui3y.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
