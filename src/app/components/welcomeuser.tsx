"use client";
// import React from "react";
import  Button  from "./ui/moving-border";
import React, { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
 
// import React from "react";
import { BackgroundBeamsWithCollision } from ".././components/ui/background-beams-with-collision";
import { babelIncludeRegexes } from "next/dist/build/webpack-config";
import { userdatainterface } from "../user/[username]/page";
// import React from "react";
      import { BackgroundLines } from "../components/ui/background-lines";
      import ToggleSwitch from "./ui/toggler";
      // interface ToggleSwitchProps {
      //   isOn: boolean;
      //   onToggle: () => void;
      // }
interface UserProps {
    data: userdatainterface;
  }
// export default function BackgroundBeamsWithCollisionDemo ({firstname,lastname}) {
    // const BackgroundBeamsWithCollisionDemo: React.FC<UserProps> = ({ data }) => {
      
    const BackgroundLinesDemo: React.FC<UserProps> = ({ data }) => {
      const [isOn, setIsOn] = useState(false);
   
      return (
          <BackgroundLines className=" relative  -z-50 flex items-center justify-center w-full flex-col px-4">
            
            <div className=" z-50 flex justify-center items-center h-full w-full " >
            

                <div className=" mt-[200px] pl-[100px]  h-auto w-[1200px] flex " > 
                        
                      <div className= "flex flex-col">
                      <ToggleSwitch  isOn={isOn} onToggle={() => setIsOn(!isOn)} />
                      <div className=" text-[30px] mt-4  pl-[40px] " >What people say you!</div>
                      <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                      </div>
                        
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
      //   {
      //     title: "Stripe",
      //     description:
      //       "A technology company that builds economic infrastructure for the internet.",
      //     link: "https://stripe.com",
      //   },
      //   {
      //     title: "Netflix",
      //     description:
      //       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      //     link: "https://netflix.com",
      //   },
      //   {
      //     title: "Google",
      //     description:
      //       "A multinational technology company that specializes in Internet-related services and products.",
      //     link: "https://google.com",
      //   },
      //   {
      //     title: "Meta",
      //     description:
      //       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      //     link: "https://meta.com",
      //   },
      //   {
      //     title: "Amazon",
      //     description:
      //       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      //     link: "https://amazon.com",
      //   },
      //   {
      //     title: "Microsoft",
      //     description:
      //       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      //     link: "https://microsoft.com",
      //   },
      ];
      export default BackgroundLinesDemo;