import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")})
        let mongodbURI = process.env.MONGODB_URI;
         const projectName = 'resume-builder';

          if(!mongodbURI){
            throw new Error("MONGODB_URI environment variable is not set")
          }
          if(mongodbURI.endsWith("/")){
            mongodbURI = mongodbURI.slice(0,-1)
          }

          await mongoose.connect(`${mongodbURI}/${projectName}`)
    } catch (error) {
        console.error("Error connecting to the database:",error)
    }
}

export default connectDB