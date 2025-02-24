"use client"
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import {  useSearchParams } from 'next/navigation'
import React, { cloneElement, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
// import { NextRouter } from 'next/router'
import shimmer from "../../../components/Backgroundhome"
import { buttons } from '@/app/components/ui/Buttons'
const Sendmessage = () => {
  const token =localStorage.getItem("token");
    const toastformessagesentsuccessfully = () => toast("Msg Sent!");
          const toastformessagesentunsuccessfully = () => toast("Msg not Sent!");
    const data=useSearchParams();
    const sender=data.get("sender");
    const receiver=data.get("reciever");
    
    const [text,settext]=useState("");
    const sendmessagebyidentity=async()=>{
        // handle message sending here
        console.log("message to send", text);
        console.log("receiver si ", receiver);
        console.log("sender si ", sender);
        const useme=sender;
        try{
          console.log("trying to make request at backend for sending message")
          const response = await fetch("http://localhost:3000/api/sendmessage", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({username:receiver,msg:text,sender:(sender),realsender:(useme)}),
          });
      
          const data = await response.json();
          console.log(sender)
          console.log("Server Response:", data.success);
          if(data.success){
            toastformessagesentsuccessfully(); 
          }
          else{
            toastformessagesentunsuccessfully();
            
          }
        }
        catch(err){
          console.log("could not make a request to send message to backend")
  
        }
      }
      const sendmessageanonymous=async()=>{
        // handle message sending here
        const useme=sender;
        console.log(text);
        console.log(receiver);
        try{
          console.log("trying to make request at backend for sending message")
          const response = await fetch("http://localhost:3000/api/sendmessage", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({username:receiver,msg:text,sender:("Anonymous"),realsender:(useme)}),
          });
      
          const data = await response.json();
          console.log(sender)
          console.log("Server Response:", data.success);
          if(data.success){
            toastformessagesentsuccessfully(); 
          }
          else{
            toastformessagesentunsuccessfully();
            
          }
        }
        catch(err){
          console.log("could not make a request to send message to backend")
  
        }
      }
      
          const shimmer = buttons.find((btn) => btn.name === "Shimmer");
            const button = buttons.find((btn) => btn.name === "Shimmer");
      if (!shimmer) {
        return <p>Button not found</p>;
      }
  return (
    <div>
<div className="z-50 flex justify-center items-center h-full w-full" >
                  <div className=" mt-[200px] w-[900px] h-full bg-transparent" >
                    
                  <Link href={`/user`} className=" flex justify-end mb-[20px]" >{cloneElement(button.component, {}, "Show Msg")}</Link>
             
                    
                    <Textarea onChange={(e) => settext(e.target.value)}  className="h-[300px]"></Textarea>
                    <div className=" flex justify-around mt-[30px] " >
                      <div onClick={sendmessagebyidentity}>{cloneElement(shimmer.component, {}, "Send")}</div>
                      <div onClick={sendmessageanonymous}>{cloneElement(shimmer.component, {}, "Send Anonymous")}</div>
                      
          <ToastContainer></ToastContainer> 
                    </div>
                  </div>
                </div>
      
    </div>
  )
}

export default Sendmessage
