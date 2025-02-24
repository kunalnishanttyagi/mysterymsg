
import dbconnect from "@/lib/dbconnect";
import usermodel from "@/Model/User";
import { NextRequest,NextResponse } from "next/server";
// import jwt  from "jsonwebtoken";
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables

interface username{
    type:string;
}
export async function GET(req: Request) {
    const token = req.headers.get("Authorization")?.split(" ")[1]; // Extract token

    if (!token) {
        console.log("token hi nhi h");
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.log("token to  mill gya",token);

    try {
        // console.log("trying to verify token",process.env.JWT_SECURITY_KEY)
        // const SECRET =await process.env.SECRET_KEY;
        // if(!process.env.JWT_SECRET_KEY){console.log("key to hai hi nhi")}
        const decoded =await Jwt.verify(token, process.env.JWT_SECURITY_KEY!) as ({id:string});
        // 
        console.log("token verified")
        await dbconnect();
        console.log(decoded);
        // const body=await req.json();
    // const username=body.username;
    // search for username in the database and give all the data of the user
    const data=await usermodel.findOne({_id:decoded.id});
    console.log(data);
    if(data){ 
        console.log("data mill gya",data.username); return NextResponse.json(data);}
    else return NextResponse.json({success:false,message:"unable to fetch content"});}
    catch(err){
        console.log("error while finding data",err);
        return NextResponse.json({success:false,message:"unable to fetch content",eroor :err});
    }
}