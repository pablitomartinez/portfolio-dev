import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-100 px-6 shadow items-center">
      <div className="flex h-16 justify-between  max-w-6xl mx-auto items-center ">
        <button className="text-slate-500 hover:text-slate-900 focus:ring-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>

        <div className="flex items-center">
          <a href="#" className="text-sky-500 hover:rotate-12 duration-500 ">
            <svg
              class="h-8 w-8"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              ></path>
            </svg>
          </a>
          <div className="space-x-8 ml-8 hidden md:flex">
            <a className="py-3 px-2 text-sky-500" href="">
              Home
            </a>
            <a
              className="text-slate-500 py-3 px-2 hover:text-sky-500 transition-colors"
              href=""
            >
              Work
            </a>
            <a
              className="text-slate-500 py-3 px-2 hover:text-sky-500 transition-colors"
              href=""
            >
              Skill
            </a>
            <a
              className="text-slate-500 py-3 px-2 hover:text-sky-500 transition-colors"
              href=""
            >
              Contact
            </a>
          </div>
        </div>

        <div className="">
          <button>
            <svg
              class="w-6 h-6 "
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-1 py-3 pt-2 border-t md:hidden">
        <a
          href="#"
          className="block rounded-md px-3 py-2 bg-sky-500 text-white transition-colors "
        >
          HOME
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 hover:bg-sky-500 hover:text-white transition-colors "
        >
          WORK
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 hover:bg-sky-500 hover:text-white transition-colors "
        >
          SKILL
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 hover:bg-sky-500 hover:text-white transition-colors "
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
