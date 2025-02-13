// lets create the signin pages 
import { NextResponse } from "next/server";
import usermodel from "@/Model/User";
import dbconnect from "@/lib/dbconnect";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { serialize } from "cookie";
export async function POST(req:Request) {
    console.log("yha to aaya");
    await dbconnect();
    try{
        const body = await req.json();
        const data={
            username:body.username,
            password:body.password
        }
        console.log(data);
        // find user with given username in email or username
        let user=await usermodel.findOne({email: body.username});
        if(!user){
            user=await usermodel.findOne({username: body.username});
            if(!user){
                return NextResponse.json({
                    success:true,
                    message:"No user found with above credentials"
                })
            }
        }
        console.log("USER FORUNd searchf for password")
        // now i have the user now check if provided password is correct or not
        const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 400 });
    }

    // user is valid now do some jwt work
    // const token=jwt.sign
    if (!process.env.SECURITY_KEY) {
        throw new Error("Missing SECURITY_KEY in environment variables");
      }
      
    const token = jwt.sign({ userId: user._id }, process.env.SECURITY_KEY!, { expiresIn: "7d" });
// Set cookie
const cookie = serialize("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });
  console.log(token)
  return new Response(JSON.stringify({ success: true, message: "Login successful" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });

} catch (error) {
  console.error("Login Error:", error);
  return Response.json({ success: true, message: "Error logging in" }, { status: 500 });
}
    
}