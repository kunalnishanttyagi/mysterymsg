"use client";

import { message } from "@/Model/User";
import { useParams } from "next/navigation";
import BackgroundLinesDemo from "../../components/welcomeuser"
import { useEffect, useState } from "react";
import BackgroundBeamsWithCollisionDemo from "../../components/welcomeuser"
import ColourfulTextDemo from "../../components/mainloading"
export interface userdatainterface{
  firstname:string,
  lastname:string,
  email:string,
  username:string,
  messages:message[],
  isacceptingmsg:boolean,
  isverified:boolean,
}
export default function UserProfile() {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

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
  const { username } = useParams();
  const [user, setUser] = useState<userdatainterface | null> (null);

  useEffect(() => {
    if (!username) return; // Ensure username exists

    async function fetchUser() {
      try {
        const res = await fetch(`http://localhost:3000/api/user/${username}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        // console.log("data from page", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, [username]); // 👈 Now, useEffect only runs when `username` changes

  if (!user || visible) return <ColourfulTextDemo></ColourfulTextDemo>
  // {if(visible2) return <BackgroundBeamsWithCollisionDemo data={user} ></BackgroundBeamsWithCollisionDemo>}
  return (
      
      
    <div> 
      <BackgroundLinesDemo data={user} ></BackgroundLinesDemo>
    </div>
  );
}
