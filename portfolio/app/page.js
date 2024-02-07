'use client'
import Image from "next/image";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <div className="flex" >
        <div className="justify-center">
          <Sidebar/>
        </div>
        <div className="w-full" >
          <Contact/>
        </div>
      </div>
    </main>
  );
}
