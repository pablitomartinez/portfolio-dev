"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Contact from "./contact/page";
import Skill from "./skill/page";
import Work from "./work/page";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="justify-center">{/* <Sidebar /> */}</div>
        <div className="w-full">
          {/* <About />
          <Work />
          <Skill />
          <Contact /> */}
          <div>

            <section className="bg-black absolute max-w-screen-xl mx-auto py-4 px-4 md:px-8">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
              <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    build your websites with{" "}
                    <span className="text-indigo-600">Experiencie</span>
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3">
                    Nam erat risus, sodales sit amet lobortis ut, finibus eget
                    metus. Cras aliquam ante ut tortor posuere feugiat. Duis
                    sodales nisi id porta lacinia.
                  </p>
                  <a
                    className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                    href=""
                  >
                    Try it out
                  </a>
                </div>
                <div className="flex-1 max-w-lg py-5 bg-slate-900 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-indigo-600 font-semibold md:text-4xl">
                    Experience
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3">
                    Nam erat risus, sodales sit amet lobortis ut, finibus eget
                    metus. Cras aliquam ante ut tortor posuere feugiat. Duis
                    sodales nisi id porta lacinia.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-3">
                    Nam erat risus, sodales sit amet lobortis ut, finibus eget
                    metus. Cras aliquam ante ut tortor posuere feugiat. Duis
                    sodales nisi id porta lacinia.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-3">
                    Nam erat risus, sodales sit amet lobortis ut, finibus eget
                    metus. Cras aliquam ante ut tortor posuere feugiat. Duis
                    sodales nisi id porta lacinia.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
