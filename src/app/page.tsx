"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Backgroundhome from "./components/Backgroundhome";
import AnimatedTestimonialsDemo from "./components/Testimonial";
import Howtouse from "./components/Howtouse";
import HeroScrollDemo from "./components/scrollingimage";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/user");
    } else {
      setIsAuthenticated(true); // Only show home page if not authenticated
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Prevent flickering before redirection
  }

  return (
    <div>
      <Navbar />
      <Backgroundhome />
      <HeroScrollDemo />
      <AnimatedTestimonialsDemo />
      <Howtouse />
      <Footer />
    </div>
  );
}
