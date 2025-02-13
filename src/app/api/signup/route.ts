// this is the one that will make users
import bcrypt from 'bcryptjs';
import { signup } from "@/schema/signupschema";
import dbconnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import usermodel from "@/Model/User";
import { boolean } from "zod";
interface data{
  firstname:String,
  lastname:String,
  email:String;
  password:String;
  username:String;
}
export async function POST(req:Request,res:Response) {
    await dbconnect();
    try{
        const body = await req.json();
    console.log("Received data:", body.firstname);
    // const hashedpassword=await bcrypt.hash(body.password,(process.env.SALT || 10))
    const hashedpassword=await bcrypt.hash(body.password,10);
    // here create user in database
    const data: data ={
        username: body.username,
        email: body.email,
        password: hashedpassword,
        firstname: body.firstname,
        lastname: body.lastname,
    }
    const validationResult = signup.safeParse(body);
    if (!validationResult.success) {
      console.log("Data sent was not upto date");
      return NextResponse.json(
        { success: false, errors: validationResult.error.errors },
        { status: 400 }
      );
    }
    console.log(data.firstname);
    const existinguserfound = await usermodel.findOne({email:data.email});
    if(existinguserfound){
      console.log("user with email exist")
      let isexistinguserverified=false;
      if(existinguserfound.isverified) isexistinguserverified= (true);
      if(isexistinguserverified){
        console.log("User already exists");
        return NextResponse.json({ success:false, message: "User signed up successfully!" }, { status: 201 });
      }
      else{
        // create user
        console.log("Exisiting user found but updating content due to not verified")
        const newuser =new usermodel(data)
        
    console.log(data.firstname);
        if(newuser) console.log("User formed just saving left",newuser.firstname);
      //  async function saving(){
        
          const result=await newuser.save();
          if(result){
            console.log("User formed just saving done");
            return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
    
          }
          else{
            console.log("User formed saving not done");
            return NextResponse.json({success:true, message: "User signed up unsuccessfull!" }, { status: 201 });
    
          }
        return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
      }
      // then create by updating content if is verified is false;
    }
    else{
      console.log("NO exisiting user found trying to make new user")
      const newuser=new usermodel(data)
      if(newuser) console.log("User formed just saving left",newuser.email);
      //  async function saving(){
        
          const result=await newuser.save();
          if(result){
            console.log("User formed just saving done");
            return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
    
          }
          else{
            console.log("User formed saving not done");
            return NextResponse.json({success:true, message: "User signed up unsuccessfull!" }, { status: 201 });
    
          }
        
      // }
      // console.log("funciton m nhi gya")
      
      // return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
    
    }
  } catch (error) {
    return NextResponse.json({ success:false, error: "Error processing request" }, { status: 500 });
  }
}