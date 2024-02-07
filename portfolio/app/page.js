'use client'
import Image from "next/image";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Work from "./components/Work";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <div className="flex" >
        <div className="justify-center">
          <Sidebar/>
        </div>
        <div className="w-full" >
          <About/>
          <Work/>
          <Skill/>
          <Contact/>
        </div>
      </div>
    </main>
  );
}
