// now lets start by creating a user in database

// import { Schema } from "inspector/promises";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface message extends Document{
    content: string;
    createdat: Date;
}

export interface user extends Document{
    firstname:string,
    lastname:string,
    username: string;
    password: string;
    email: string;
    messages?: message[];
    isacceptingmsg: boolean;
    isverified: boolean;
}

// now i have my interfaces ready now lets create them in database

// now make schemas

const messageschema : Schema<message> =new mongoose.Schema ({
    content:{
        type: String,
        required: true,
    },
    createdat:{
        type: Date,
        required: true,
        default: Date.now
    }
})

const userschema : Schema<user> =new mongoose.Schema ({
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

const usermodel = (mongoose.models.user as mongoose.Model<user>) || (mongoose.model<user>("user",userschema));
export default usermodel;