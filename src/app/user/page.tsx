"use client";

import { Message } from "@/Model/User";
import { useParams } from "next/navigation";
import BackgroundLinesDemo from "../components/welcomeuser"
import { useEffect, useState } from "react";
import BackgroundBeamsWithCollisionDemo from "../components/welcomeuser"
import ColourfulTextDemo from "../components/mainloading"
import { Router, useRouter } from "next/router";
export interface userdatainterface{
  firstname:string,
  lastname:string,
  email:string,
  username:string,
  messages:Message[],
  isacceptingmsg:boolean,
  isverified:boolean,
}
export default function UserProfile() {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const token = localStorage.getItem("token");
  console.log("my token is", token )

        if (!token) {
            window.location.href = "/signin"; // Redirect if not signed in
            return;
        }
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible2(false);
    }, 4000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  const [user, setUser] = useState<userdatainterface | null> (null);
  // const router=useRouter();
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`http://localhost:3000/api/user`, {
          method: "GET",
          // headers: { "Content-Type": "application/json" },
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        // console.log("data from page", data);
        setUser(data);
        console.log(data);
        // Router.push('/user')
        // router.push("/dashboard");
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  },[]); 
  if (!user || visible) return <ColourfulTextDemo></ColourfulTextDemo>
  // {if(visible2) return <BackgroundBeamsWithCollisionDemo data={user} ></BackgroundBeamsWithCollisionDemo>}
  return (
      
      
    <div> 
      <BackgroundLinesDemo data={user} ></BackgroundLinesDemo>
    </div>
  );
}
