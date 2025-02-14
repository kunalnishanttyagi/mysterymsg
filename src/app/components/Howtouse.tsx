"use client";
import { cloneElement, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {buttons} from "../components/ui/Buttons"
import Link from "next/link";
const options = [
  { id: 1, label: "Join us", image: "/kaa.jpg" },
  { id: 2, label: "Explore", image: "/hello.jpg" },
  { id: 3, label: "Call out", image: "/hii.jpg" },
  { id: 4, label: "Anonymous", image: "/kaa.jpg" },
  // { id: 5, label: "", image: "/hello.jpg" },
];

export default function HalfScreenComponent() {
  const [selectedImage, setSelectedImage] = useState(options[0].image);
  const button = buttons.find((btn) => btn.name === "Shimmer");
  
    if (!button) {
      return <p>Button not found</p>;
    }
  return (
    <div className=" w-full flex items-center justify-center" >
      <div className="flex h-screen w-[1300px] items-center">
      {/* Left Side: Options */}
      <div className="w-1/2 text-white flex flex-col justify-center items-center space-y-4 p-8">
        <h2 className="text-2xl font-bold mb-4">Select an Option</h2>
        {options.map((option) => (
          // <button
          //   key={option.id}
          //   className="px-6 items-center text-center py-2 rounded-md transition w-full text-left transform hover:scale-105"
          //   onClick={() => setSelectedImage(option.image)}
          // >
          //   {option.label}
          // </button>
          <button key={option.id} onClick={()=> setSelectedImage(option.image)} className="flex justify-center items-center">
          {cloneElement(button.component, {}, option.label)}
      </button>
        ))}
      </div>

      {/* Right Side: Animated Image */}
      <div className="w-1/2 overflow-hidden h-[700px] overflow-y-hidden flex items-center justify-center bg-gray-800">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={selectedImage}
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            alt="Selected Option"
          />
        </motion.div>
      </div>
    </div>
    </div>
  );
}
