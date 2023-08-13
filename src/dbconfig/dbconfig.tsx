import mongoose from 'mongoose';

export async function conect(){
    try {
       mongoose.connect(process.env.MONGO_URL!) 
       const connection = mongoose.connection;
       connection.on('connected',()=>{
        console.log("connected successfully");
       
            connection.on('error',(err)=>{
            console.log("something went wrong"+ err)
            process.exit();
        })
    
    })
    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}