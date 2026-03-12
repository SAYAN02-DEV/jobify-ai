"use client"
import DemoCircles from "@/components/ui/democircles";
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import CtaCardDemo from "@/components/ui/Getstartedcard";
import React from 'react'
import HolographicCard from "@/components/ui/holographic-card";
import HeroSection from "@/components/ui/hero-section";
const page = () => {
  return (
    <div className="flex flex-col items-center w-full">
        <HeroSection/>        
        <Footer/>
    </div>
  )
}

export default page