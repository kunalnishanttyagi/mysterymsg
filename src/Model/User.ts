// now lets start by creating a user in database

// import { Schema } from "inspector/promises";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import Document from "mongoose";

export interface Message{
    content: string;
    createdate: Date;
    sender:string;
    realsender:string;
}

export interface User{
    firstname:string,
    lastname:string,
    username: string;
    password: string;
    email: string;
    messages?: Message[];
    isacceptingmsg: boolean;
    isverified: boolean;
}

// now i have my interfaces ready now lets create them in database

// now make schemas

const messageschema : Schema<Message> =new mongoose.Schema ({
    content:{
        type: String,
        required: true,
    },
    createdate:{
        type: Date,
        required: true,
        default: Date.now
    },
    sender:{
        type:String,
        required:true
    },
    realsender:{
        type:String,
        required:true,
    }
})

const userschema : Schema<User> =new mongoose.Schema ({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
        default:"",
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    messages:{
        type: [messageschema],
        required: true,
        default: []
    },
    isacceptingmsg:{
        type: Boolean,
        required: true,
        default: true
    },
    isverified:{
        type: Boolean,
        required: true,
        default: false
    }
})

const usermodel = (mongoose.models.user as mongoose.Model<User>) || (mongoose.model<User>("user",userschema));
export default usermodel;