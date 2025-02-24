import mongoose from "mongoose";
// import { env } from "process";
import dotenv from "dotenv"

type connectobject={
    isconnected?:number
}


const connection:connectobject={}

async function dbconnect():Promise<void>{
    if(connection.isconnected){
        // connection already
        return;
    }
    else{
        // create connection
        try {
            const mongourl=process.env.MONGO_URI;
            if(!mongourl){
                console.log("Mongo db url not valid ");
                // process.exit(1);
            }
            const db = await mongoose.connect(mongourl || '', {});
        
            connection.isconnected = db.connections[0].readyState;
        
            console.log('Database connected successfully');
          } catch (error) {
            console.error('Database connection failed:', error);
        
            // process.exit(1);
          }
        }
    }
export default dbconnect;