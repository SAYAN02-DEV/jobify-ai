"use client"
import DemoCircles from "@/components/ui/democircles";
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import React from 'react'

const page = () => {
  return (
    <div className="pt-20">
        <Navbar/>
        <DemoCircles/>
        <Footer/>
    </div>
  )
}

export default page