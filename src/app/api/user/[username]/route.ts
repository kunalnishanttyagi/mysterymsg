import dbconnect from "@/lib/dbconnect";
import usermodel from "@/Model/User";
import { NextRequest,NextResponse } from "next/server";
interface username{
    type:string;
}
export async function GET(req: Request, { params }: { params: { username: string } }) {
  
    const { username } = params;
    console.log("API Route Hit");
console.log("Params:", params);
console.log("Username:", username);
    await dbconnect();
    try{
        // 
        console.log("I got a request")
        // const body=await req.json();
        console.log(username);
    // const username=body.username;
    // search for username in the database and give all the data of the user
    const data=await usermodel.findOne({username:username});
    if(data){ 
        console.log("data mill gya",data.username); return NextResponse.json(data);}
    else return NextResponse.json({success:false,message:"unable to fetch content"});}
    catch{
        return NextResponse.json({success:false,message:"unable to fetch content"});
    }
}