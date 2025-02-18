import { NextResponse } from "next/server";
import usermodel from "@/Model/User";
import dbconnect from "@/lib/dbconnect";

export async function GET(req: Request, { params }: { params: { username: string } }) { 
    console.log("Request made to get all users");
    await dbconnect();
    try {
        console.log("request for all user");
        const users = await usermodel.find({}, "username firstname lastname"); // Fetch only username and name
        return NextResponse.json({success:true,users});
      } catch (error) {
        return NextResponse.json({success:false,message:"Could not fetch all users"});
      }
}