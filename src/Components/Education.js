import React from 'react'

const Education = () => {
  return (
    <div className='w-full bg-gradient-to-b from-slate-950 to-indigo-950 p-8 min-h-screen font-montserrat'>
    <h1 className='w-full text-center text-5xl font-bold text-slate-200 tracking-wide hover:tracking-wider font-playfair-display'> Education </h1>
    <div className='w-full text-center'>
        <p className='text-slate-400 text-xl mt-5 font-medium px-7 md:px-[15rem]'>Education has been my compass for self-discovery and growth. Here are my academic credentials.</p>
    </div>
      
    <div className='flex justify-center flex-wrap my-3 p-[50px] md:p-[70px]'>

    <div className='bg-slate-950 w-[60%] h-auto md:h-[280px] rounded-xl m-3 p-3 md:p-4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-teal-400 border-2'>
            <div className='text-slate-300  text-lg md:text-2xl md:font-bold pt-3 font-playfair-display'>Modern College of Arts, Science and Commerce College of Ganeshkhind, Pune</div>
            <div className='text-zinc-400/60 mt-3 font-medium text-md'>Master's of Science - Computer Science </div>
            <div className='text-slate-500 pb-4'>july 2023 - july 2025</div>
        </div>

      <div className='bg-slate-950 w-[60%] h-auto md:h-[280px] rounded-xl m-3 p-3 md:p-4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-teal-400 border-2'>
            <div className='text-slate-300  text-lg md:text-2xl text-semibold md:font-bold pt-3 font-playfair-display'>Agasti Arts, Commerce and Dadasaheb Rupavte Science College Akole</div>
            <div className='text-zinc-400/60 mt-3 text-md'>Bachelor of Science - Computer Science </div>
            <div className='text-slate-500'>Aug 2020 - july 2023</div>
            <div className='text-slate-500 my-3'><b>Grade: </b> 9.05 cgpa</div>
        </div>

        <div className='bg-slate-950 w-[60%] h-[280px] rounded-xl m-3 p-3 md:p-4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-teal-400 border-2'>
            <div className='text-slate-300 text-lg md:text-2xl font-semibold md:font-bold pt-3 font-playfair-display'>Agasti Arts, Commerce and Dadasaheb Rupavte Science College, Akole</div>
            <div className='text-zinc-400/60 mt-3 text-md'>HSC(XII), Science </div>
            <div className='text-slate-500'>july 2018 - july 2020</div>
            <div className='text-slate-500 my-3'><b>Grade: </b> 61% </div>
        </div>

        {/* <div className='bg-slate-950 w-[60%] h-[280px] rounded-xl m-3 p-3 md:p-4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-teal-400 border-2'>
            <div className='text-slate-300 text-lg md:text-2xl font-semibold md:font-bold pt-3 font-playfair-display'>Kanya Vidya Mandir, Akole</div>
            <div className='text-zinc-400/60 mt-4 font-medium text-md'>SSC(X) , Semi-English</div>
            <div className='text-slate-500'>jun 2017 - May 2018</div>
            <div className='text-slate-500 my-3'><b>Grade: </b> 87%</div>
        </div> */}
      </div>

    </div>
  )
}

export default Education
