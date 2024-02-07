import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-slate-950">
                <div className='flex justify-center pb-3'>
                <div className='pt-3 p-7 w-[25%] h-auto bg-slate-950'>
                    <span className='text-2xl text-indigo-500'>Pritee Arote</span>
                    <div className="flex w-full justify-start mt-1.5">
                        <i className="fa-solid fa-phone-flip text-indigo-500 text-md mt-1.5"></i>
                        <p className='text-white text-md ml-2'>+91 9322794841</p>
                    </div>
                    <div className="flex w-full justify-start mt-2">
                    <i className="fa-solid fa-envelope text-indigo-500 text-md mt-1.5"></i>
                    <p className='text-white text-md ml-2'>arotepritee111@gmail.com</p>
                    </div>
                    <div className="flex w-full justify-start mt-2">
                    <i className="fa-solid fa-map-location-dot text-indigo-500 text-md mt-1.5"></i>
                    <p className='text-white text-md ml-2'>Pune, Baner - 411045</p>
                    </div>

                </div>
                <div>
                <ul className='flex justify-center p-7 menu-container'>
                    <li><a className='text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl' href="/about">About</a></li>
                    <li><a className='text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl' href="/skills">Skills</a></li>
                    <li><a className='text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl' href="/projects">Projects</a></li>
                    <li><a className='text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl' href="/experience">Experience</a></li>
                    <li><a className='text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl' href="/education">Education</a></li>
                </ul>
                <div className='flex w-full justify-center'>
                    <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500 hover:cursor-pointer "><i class="fa-brands fa-square-facebook"></i></div>
                    <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500"><i class="fa-brands fa-instagram hover:cursor-pointer "></i></div>
                    <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500"><i class="fa-brands fa-twitter hover:cursor-pointer "></i></div>
                    <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500"><i class="fa-brands fa-github hover:cursor-pointer "></i></div>
                    <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500"><i class="fa-brands fa-linkedin hover:cursor-pointer "></i></div>
                </div>
                </div>    
                </div>
                <p className='text-slate-300 texl-lg font-semibold text-center pb-5'>© 2024 Pritee Arote. All rights reserved.</p>
            </footer>
    </>
  )
}

export default Footer
