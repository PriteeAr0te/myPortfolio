import React from 'react'

const Experience = () => {
    return (
        <div className='w-full bg-gradient-to-b from-blue-950 to-cyan-950 p-8 min-h-screen'>
            <h1 className='w-full text-center text-5xl font-bold text-slate-200 tracking-wide hover:tracking-wider'> Experience </h1>
            <div className='w-full text-center'>
                <p className='text-slate-400 text-xl mt-5 font-medium px-[15rem]'>Crafting code and conquering challenges, my internship as a software developer has been a platform for growth and learning.</p>
            </div>
            <div className='flex justify-center my-10'>
                <div className='bg-gray-900 border-2 border-indigo-700 w-[60%] h-auto rounded-xl m-5 p-5 px-10  transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:-translate-y-2'>
                    <div className='text-slate-100 text-xl'>Software Development Intern</div>
                    <div className='text-slate-400'>Agasti Technologies Pvt.Ltd</div>
                    <div className='text-slate-500'>July 2023 - oct 2023</div>
                    <p className='text-slate-200 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam omnis, dignissimos ab hic deleniti. Voluptatibus quam, labore dolores possimus adipisci suscipit ipsa minima iusto blanditiis facilis nulla provident culpa delectus amet dolorem ut veritatis illo? Molestiae, natus ratione. Corrupti pariatur amet quisquam magnam alias mollitia, quo neque qui labore?</p>
                    {/* <div className='flex flex-wrap my-4'> */}
                    <div className=' flex my-4'>
                        <b className='text-slate-100'>Skills</b>
                        <ul className='flex pl-6'>
                            <li className='text-slate-200 pl-3 flex items-center'>
                                <span className="mr-2">•</span> HTML
                            </li>
                            <li className='text-slate-200 pl-3 flex items-center'>
                                <span className="mr-2">•</span> CSS
                            </li>
                            <li className='text-slate-200 pl-3 flex items-center'>
                                <span className="mr-2">•</span> JavaScript
                            </li>
                            <li className='text-slate-200 pl-3 flex items-center'>
                                <span className="mr-2">•</span> Bootstrap
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
