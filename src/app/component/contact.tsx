import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';


function Contact() {
  return (
    <div className='roboto flex justify-center h-screen' id='contact'>

      <section className="text-gray-600 body-font relative">
        <form action="https://formspree.io/f/mdknjyzp" method='POST'></form>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className=" text-[40px] font-medium title-font mb-4 text-white">
              Contact <span className='text-[#d4af37]'>Us</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Feel free to talk us
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">


                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />

                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white  border-0  py-2 px-8 focus:outline-none bg-[#d4af37] hover:bg-[#d4af04] rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <Link href="https://myaccount.google.com/personal-info?utm_source=OGB&utm_medium=app" className="text-indigo-500">sobber.id@gmail.com</Link>
                <p className="leading-normal my-5">
                  MUHAMMAD BILAL
                </p>
                <span className="inline-flex gap-2">

                  <button className=' '><Link
                    href="https://www.linkedin.com/in/muhammad-bilal-6769462ba/" target='_blank'><FaLinkedin
                      className='h-8 w-8 hover:text-[#0077B5] cursor-pointer' /></Link></button>

                  <Link href={""} target='_blank'>
                    <FaInstagram className='h-8 w-8 hover:text-red-800' />
                  </Link>


                  <Link href={"https://github.com/mrbilal457897"} target='_blank' className='hover:text-[#24292e]'><FaGithub className='h-8 w-8' />
                  </Link>

                  <Link href={"https://www.facebook.com/id.sheik/"} target='_blank'><FaFacebookF className='h-8 w-8 hover:text-[#1877F2]' />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div >
  )
}

export default Contact