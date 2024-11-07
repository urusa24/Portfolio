"use client";
import Hero from "../components/Hero";
import About from "@/components/About";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import Navbar from '@/components/Navbar';
import Skills from "@/components/Skills";

export default function Home() {
    useEffect (()=>{
        AOS.init({
            easing:"ease-out-back",
            duration:1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:160,
        });
        AOS.refresh();
    },[]);
    return (
        <main>
            <Navbar />
            <Hero />
            <Skills />
            <Contact />
            <About />
        </main>
    );
}
