"use client"
import DemoCircles from "@/components/ui/democircles";
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import CtaCardDemo from "@/components/ui/Getstartedcard";
import React from 'react'
import HolographicCard from "@/components/ui/holographic-card";

const page = () => {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
        <Navbar/>
        <DemoCircles/>
        <div className="mt-16 mb-16 grid w-full max-w-6xl items-stretch gap-6 px-4 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <CtaCardDemo/>
            <HolographicCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default page