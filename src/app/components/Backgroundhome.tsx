"use client";

import { motion } from "framer-motion";
import React, { cloneElement } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import {buttons} from "../components/ui/Buttons"
import Link from "next/link";
export default function AuroraBackgroundDemo() {
    const shimmer = buttons.find((btn) => btn.name === "Shimmer");

  if (!shimmer) {
    return <p>Button not found</p>;
  }
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Welcome to FelixN
        </div>
        <div>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Wouldn't it be amazing if you could say anything to anyone, freely and fearlessly, </p>
        
        <p className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
        without a second thought?</p>
        </div>
        
        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Get started
        </button> */}
        <Link href="/signup" className="flex justify-center items-center">
        {cloneElement(shimmer.component, {}, "Get Started")}
    </Link>
      </motion.div>
    </AuroraBackground>
  );
}
