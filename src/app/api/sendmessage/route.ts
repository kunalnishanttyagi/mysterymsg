import dbconnect from "@/lib/dbconnect";
import usermodel from "@/Model/User";
import { NextResponse } from "next/server";
import {User} from "../../../Model/User"
import { Message } from "@/Model/User";
export async function POST(req: Request) { 

    await dbconnect();
    // const data=await req.json();
    try{
        const data=await req.json();
        console.log(data);
        // console.log(data.username,data.msg);
        const username=data.username;
        const usertoaddmessage = await usermodel.findOne({username:data.username}) ;
                                    
        if (!usertoaddmessage) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        console.log(usertoaddmessage.firstname)
        console.log(data.sender);
        console.log(usertoaddmessage.firstname)
        if (!usertoaddmessage.messages) usertoaddmessage.messages = [];
       ((usertoaddmessage.messages)).push({
        content: data.msg,
        sender: data.sender,
            createdate: new Date(),
            realsender:data.realsender,
        });
        // usertoaddmessage.messages.push(data.msg);

        // Save the updated user document
        await usertoaddmessage.save();
        // usertoaddmessage.messages
        return NextResponse.json({success:true});
    }
    catch(err){
        return NextResponse.json({success:false,msg:err});
    }

}