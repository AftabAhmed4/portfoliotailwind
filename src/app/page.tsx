'use client'
import { useState } from "react";

import Image from "next/image";
import about from '../../public/hims-img.webp'
import Tag from '../../public/Screenshot_2024-11-09_230553-removebg-preview.png'
import Asd from '../../public/Screenshot 2024-11-11 001337.png'
import portfolio from '../../public/Screenshot 2024-11-10 235702.png'
import Ai from '../../public/edtech-inner- (1).webp'
import Skill from "@/component/Skill";
import web2 from '../../public/Screenshot 2024-11-11 001133.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };


  return (
    <div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:ml-2 sm:mr-2 md:ml-8 md:mr-14">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse sm:ml-2 sm:mr-2 md:ml-8 md:mr-8">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-500 dark:text-white">
        AftabAhmed
      </span>
    </a>

    <button
      onClick={toggleMenu}
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded={isOpen ? "true" : "false"}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    
    <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#portfolio" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
        <li>
          <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>




      {/* Hero section */}

      <div className="pt-6 items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">Aftab Ahmed</span> Professional Web Developer</h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Developing responsive and dynamic websites for modern users.
          </p>
          <div className="mt-4">
            <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488" />
        </div>
      </div>

      {/* About Section */}
    

      <section className="text-gray-600 body-font mb-0" id="about">
  <div className="About section flex justify-center items-center font-semibold text-3xl pb-4">
    <span className="border-b-2 border-blue-500 inline-block">
      About Section
    </span>
  </div>

  <div className="container px-5 py-24 mx-auto flex flex-wrap mb-0 pb-0 pt-4" >
    <div className="lg:w-1/2 w-full mb-0 lg:mb-0 rounded-lg overflow-hidden pt-5">
      <Image alt="Tag" src={Ai} />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className=" pt-5 flex flex-col mb-10 lg:items-start items-center">
        <div className=" w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Aftab Ahmed</h2>
          <p className="leading-relaxed text-base">I am Aftab Ahmed, a dedicated student at GIAIC, focused on mastering Next.js along with a solid foundation in HTML, CSS, JavaScript, and TypeScript. I’m passionate about building web applications and continuously improving my skills. With a strong commitment to learning, I actively seek opportunities to challenge myself and stay up-to-date with the latest trends and technologies in web development.</p>
        </div>
      </div>

      {/* Skill Section */}
      <div className="flex flex-col mb-10 lg:items-start items-center">

      </div>
    </div>
  </div>
</section>

      {/* about secttion end */}

      {/* portfoilo  */}
      <section className="text-gray-600 body-font" id="portfolio">
        <div className="container px-5 py-24 mx-auto pt-6">
          <div className="flex flex-col text-center w-full mb-20">
          <div className="About section flex justify-center items-center font-semibold text-3xl sm:text-2xl md:text-3xl pb-4">
  <span className="border-b-2 border-blue-500 inline-block">
    Portfolio Section
  </span>
</div>


          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <div className="img">
                  <Image alt="tab" src={Asd} />
                  <h1 className="sm:text-xl text-lg font-semibold tracking-wide leading-tight text-gray-900 mb-6 mt-5">
                    Build Your Professional Resume
                  </h1>
                  <p className="text-sm text-gray-600 max-w-md">
                    Create a standout resume effortlessly with our user-friendly builder. Showcase your skills, experience, and achievements with a polished, professional touch.
                  </p>

                  <div className="mt-4">
                    <a href="https://dynamic-resume-builder-two-iota.vercel.app/" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="img">
                  <Image alt="tab" src={portfolio} />
                  <h1 className="sm:text-xl text-lg font-semibold tracking-wide leading-tight text-gray-900 mb-6 mt-5">
                    Static Website For Skilly
                  </h1>
                  <p className="text-sm text-gray-600 max-w-md">
                    This is a static website I designed and developed This project showcases my foundation in front-end development, particularly in HTML, CSS, and JavaScript.
                  </p>
                  <div className="mt-4">
                    <a href="https://rococo-lollipop-545939.netlify.app/" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
                  </div>
                </div>
 
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="img">
                  <Image alt="tab" src={web2} />
                  <h1 className="sm:text-xl text-lg font-semibold tracking-wide leading-tight text-gray-900 mb-6 mt-5">
                    Static Website For BurgerLab
                  </h1>
                  <p className="text-sm text-gray-600 max-w-md">
                    This is a static website I designed and developed This project showcases my foundation in front-end development, particularly in HTML, CSS, and JavaScript.
                  </p>
                  <div className="mt-4">
                    <a href="https://self-projects.netlify.app/" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfoli end */}


      {/* contant us */}
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  <a href="#">Button</a>
</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">


              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer className="text-white body-font bg-gray-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">AftabAhmed</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">© 2024 AftabAhmed
            <a href="https://www.linkedin.com/in/aftab-ahmed-755292304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-indigo-500 ml-1" rel="noopener noreferrer" target="_blank">web developer</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mr-14 ml-14" >

            <a href="https://github.com/AftabAhmed4" className="ml-3 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-10">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.18c-3.338.726-4.04-1.44-4.04-1.44-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.73.083-.73 1.204.084 1.836 1.236 1.836 1.236 1.07 1.835 2.809 1.305 3.493.998.108-.775.42-1.305.762-1.605-2.665-.306-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.526.118-3.18 0 0 1.008-.322 3.3 1.23a11.515 11.515 0 0 1 3.003-.404c1.02.004 2.046.137 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.653.244 2.877.12 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.222v3.293c0 .319.192.692.8.575C20.565 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/aftab-ahmed-755292304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="ml-3 text-gray-400 hover:text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>

    </div>
  )
}

export default Navbar;
