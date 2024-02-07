import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import photo from './Icons/myPhoto.png';

const Hero = () => {
    

  return (
    <div className="w-full flex flex-col-reverse  lg:flex-row lg:justify-between  text-white bg-gradient-to-b from-slate-950 to-indigo-950 min-h-screen">
      <div className='py-[20] md:p-[50px] md:py-[90px] p-8'>
        <p className='font-bold text-2xl md:text-4xl text-white my-3 tracking-wider'>Hi There,</p>
        <p className='font-bold text-2xl md:text-4xl text-white tracking-wider my-3'>I'm <span className='text-indigo-600 '>Pritee </span>Arote</p>
        <p className=' text-white tracking-wider mt-3 md:mt-5'>
          <span className='font-semibold text:lg md:text-2xl'>I Am Into </span> 
          <span className='font-semibold text-lg md:text-2xl text-indigo-600 tracking-wider'>
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
        <p className='text-slate-400 font-medium sm:text-xl mt-4 m-2  sm:w-[35rem]'>Aspiring developer with a fervent appetite for learning and a genuine love for coding. Excited to dive into the world of technology, I approach every challenge with enthusiasm and a commitment to continuous improvement. Ready to embark on a journey of turning ideas into reality and contributing my part to the ever-evolving tech landscape. Let's collaborate and create something extraordinary together!</p>
       <div className='mx-15 mt-10'>
       <a className='bg-indigo-500 rounded-2xl border-indigo-400 border-2 hover:bg-gradient-to-r from-indigo-500 to-blue-500 text-indigo-100  font-semibold p-3 px-8 cursor-pointer text-lg ' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1pR1tRdB1B3RSYAwU9cQfHQJ52vyvm8nL/view?usp=sharing"'> Check Resume <i className="fa-solid fa-circle-chevron-right text-indigo-100 pl-1"></i> </a>
       </div>
      </div>
      <div className='flex justify-center md:mr-3 mr-1 p-5 m-1'>
        <img src={photo} alt="" className='rounded-full h-auto w-[600px]'/>
      </div>
    </div>
  );
};

export default Hero;
