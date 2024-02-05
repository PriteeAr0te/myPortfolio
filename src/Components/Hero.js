import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import photo from './myPhoto.png';

const Hero = () => {
    

  return (
    <div className='bg-slate-900 md:flex md:justify-between text-white min-h-[100vh]'>
      <div className='p-[50px] md:p-[70px] md:py-[90px]'>
        <p className='font-bold text-3xl md:text-6xl text-white my-3 tracking-wider'>Hi There,</p>
        <p className='font-bold text-3xl md:text-6xl text-white tracking-wider my-3'>I'm <span className='text-sky-500'>Pritee </span>Arote</p>
        <p className=' text-white tracking-wider my-3'>
          <span className='font-semibold text:xl md:text-2xl'>I Am Into </span> 
          <span className='font-semibold text-xl md:text-3xl text-sky-500 tracking-wider'>
          <TypeAnimation
      sequence={[
        ' MERN Development',
        1000, 
        ' Frontend Development',
        1000,
        ' Backend Development',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block' }}
      repeat={Infinity}
    />
          </span>
        </p>
        <p className='text-slate-400 font-semibold md:text-xl m-2 w-[35rem]'>Aspiring developer with a fervent appetite for learning and a genuine love for coding. Excited to dive into the world of technology, I approach every challenge with enthusiasm and a commitment to continuous improvement. Ready to embark on a journey of turning ideas into reality and contributing my part to the ever-evolving tech landscape. Let's collaborate and create something extraordinary together!</p>
       <div className='mx-15 mt-10'>
       <a className='bg-slate-950 rounded-2xl border-indigo-900 border-2 hover:bg-indigo-500 hover:text-indigo-100 text-indigo-600 font-semibold p-3 px-7 cursor-pointer text-lg'> About Me <i className="fa-solid fa-circle-down text-white ml-2"></i></a>
       </div>
      </div>
      <div className='md:mr-3 mr-1 p-5 m-1'>
        <img src={photo} alt="" className='rounded-full h-auto w-[600px]'/>
      </div>
    </div>
  );
};

export default Hero;
