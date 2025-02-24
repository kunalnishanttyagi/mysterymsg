"use client";
// import React from "react";
import  Button  from "./ui/moving-border";
import React, { cloneElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HoverEffect } from "./ui/card-hover-effect";
import { SignedIn,SignInButton,UserButton, SignedOut } from "@clerk/nextjs";
import { ToastContainer, toast } from 'react-toastify';
  
import { Textarea } from "@/components/ui/textarea"
// import {Shimmer} from "../components/ui/Buttons"
import shimmer from "./Backgroundhome"
// import React from "react";
import { BackgroundBeamsWithCollision } from ".././components/ui/background-beams-with-collision";
import { babelIncludeRegexes } from "next/dist/build/webpack-config";
import { userdatainterface } from "../user/page";
// import React from "react";
      import { BackgroundLines } from "../components/ui/background-lines";
      import ToggleSwitch from "./ui/toggler";
import Link from "next/link";
import { buttons } from "./ui/Buttons";
import router from "next/router";
// import { toast } from "sonner";
      // interface ToggleSwitchProps {
      //   isOn: boolean;
      //   onToggle: () => void;
      // }
interface UserProps {
    data: userdatainterface;
  }
  interface user{
    _id:string;
    username:string;
    firstname:string;
    lastname:string;
    // allusers: User[];
  }
  interface allusers{
    // allusers
    type: user[];
  }
// export default function BackgroundBeamsWithCollisionDemo ({firstname,lastname}) {
    // const BackgroundBeamsWithCollisionDemo: React.FC<UserProps> = ({ data }) => {

    // here i will make a fetch request to get all users

    
    const  BackgroundLinesDemo: React.FC<UserProps> = ({ data }) => {
      console.log("dekho data aisa h", data);
      const [allusers,setallusers]=useState<Array<user>>( [] ); 
      const toastformessagesentsuccessfully = () => toast("Msg Sent!");
      const toastformessagesentunsuccessfully = () => toast("Msg not Sent!");
    // const [allusers,setallusers]=useState({});
    const [isOn, setIsOn] = useState(false);
    useEffect(()=>{
      console.log(isOn);
      console.log("originally ans is", data.isacceptingmsg)
      if(data.isacceptingmsg) setIsOn(true);
      console.log(isOn);
      
    },[])
      
    const [showmessage,setshowmessage]=useState(true);
    
    const [receiver,setreceiver]=useState("");
    const isEmpty = (obj:object) => Object.keys(obj).length === 0;
     const getallusers=async()=> {
      try {
        const res = await fetch(`http://localhost:3000/api/allusers`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        // const data=await response.json();
        setallusers(data.users);
        console.log(data);
        return;
        
        // console.log("Server Response:",data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
    const [currentuser,setcurrentuser]=useState("");
    const shimmer = buttons.find((btn) => btn.name === "Shimmer");
    
    useEffect(() => {
      if (showmessage && allusers.length === 0) {
        getallusers();
      }
    }, [showmessage]); // Fetch when message visibility is toggled
  
    const handleclick = () => {
      setshowmessage((prev) => !prev);
    };
    
    const [hidebg,sethidebg]=useState(false);
      const button = buttons.find((btn) => btn.name === "Shimmer");
    const hideeverything= (username:string)=>{
      sethidebg(!hidebg);
      setreceiver(username);
      


      
    }
    const handlenewclick=()=>{
      sethidebg(!hidebg);
      setshowmessage((prev) => !prev);


    }
  //   const setreceiverfunc = (username) => {
  //     setreceiver(username);
  // };

  // useEffect(() => {
  //     if (receiver) {
  //         router.push(`/user/${data.username}/sendmessage?receiver=${receiver}&sender=${data.username}`);
  //     }
  // }, [receiver]); // Runs when `receiver` updates
    useEffect(()=>{
      setcurrentuser(data.firstname+" "+data.lastname);
    },[])
     const [messages,setmessages]=useState([]);
      useEffect(()=>{
        setmessages(data.messages || []);
        console.log(messages); 
      },[])
      
     if (!shimmer) {
       return <p>Button not found</p>;
     }
     const datatosendtomessagesender={
      sender:currentuser,
      receiver:receiver,
     }
      return (
        
          <BackgroundLines className="relative flex  -z-50 items-center justify-center w-full flex-col px-4">
            
            <div className="absolute text-[40px] left-[110px] top-[48px]" >{data.firstname+" "+ data.lastname} </div>
                <div className=" z-50 flex justify-center items-center h-full w-full " >

                <div className=" mt-[180px] pl-[100px]  h-auto w-[1200px] flex " > 
                        
                      <div className= "flex flex-col">
                      <ToggleSwitch  isOn={isOn} onToggle={() => setIsOn(!isOn)} />
                        
                          {/* // here i want to use if else conditional rendering  */}
                          {
                            showmessage ? 
                               (<div>
                                <div className=" flex gap-[500px]" >
                                  <div className=" text-[30px] mt-4  pl-[40px] " >What people say you!</div>
                                  {/* <b>Send Msg</b> */}
                                  <div onClick={handleclick}>{cloneElement(shimmer.component, {}, "Send Msg")}</div>
                                  
                                </div>
        
                              <div className="max-w-5xl mx-auto px-8">
                                <HoverEffect items={messages} username={data.username} />
                              </div>
                                </div>) : 
                                ((<div className=" mt-5 pl-4">
                                <div className=" flex flex-col gap-[50px]" >
                                  {/* <div className=" text-[30px] mt-4  pl-[40px] " >What people say you!</div> */}
                                  {/* <b>Send Msg</b> */}
                                  <div onClick={handleclick} className=" flex justify-end mr-[125px] "  >{cloneElement(button.component, {}, "Show Msg")}</div>

                                  {/* now i will show all the users here */}

                                  {
                                    (allusers.length==0) ? (
                                      <div> Loading..</div>
                                    ) : ( 
                                      <div className=" w-[1050px]  flex flex-wrap gap-[80px]">
                                        {/* use extandable cards here */}
                                        {allusers.map((user) => (
                                          <Link href={`/user/sendmessage?reciever=${user.username}&sender=${data.username}`}
     key={user._id} className="w-auto text-lg font-semibold">
                                            <div>{user.firstname} {user.lastname}</div>
                                            <div>(@{user.username})</div>
                                          </Link>
                                        ))}
                                      </div>

                                     )
                                  }
                                  
                                </div>
        
                              
                                </div>))
                            
                          }
                          
                        
                      </div>
                </div>
            </div>
              
            
          </BackgroundLines>
        );
      }
      
      export const projects = [
        {
          title: "Stripe",
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Netflix",
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Google",
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Meta",
          description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
          link: "https://meta.com",
        },
        {
          title: "Amazon",
          description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          link: "https://amazon.com",
        },
        {
          title: "Microsoft",
          description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
          link: "https://microsoft.com",
        },
        // {
        //   title: "Stripe",
        //   description:
        //     "A technology company that builds economic infrastructure for the internet.",
        //   link: "https://stripe.com",
        // },
        // {
        //   title: "Netflix",
        //   description:
        //     "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        //   link: "https://netflix.com",
        // },
        // {
        //   title: "Google",
        //   description:
        //     "A multinational technology company that specializes in Internet-related services and products.",
        //   link: "https://google.com",
        // },
        // {
        //   title: "Meta",
        //   description:
        //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        //   link: "https://meta.com",
        // },
        // {
        //   title: "Amazon",
        //   description:
        //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        //   link: "https://amazon.com",
        // },
        // {
        //   title: "Microsoft",
        //   description:
        //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        //   link: "https://microsoft.com",
        // },
      ];
      export default BackgroundLinesDemo;           