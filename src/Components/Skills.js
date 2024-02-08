import React from 'react';
import reactLogo from './Icons/react-logo.png'
import reduxLogo from './Icons/redux.png';
import htmlLogo from './Icons/html.png';
import cssLogo from './Icons/css3.png';
import tailwindLogo from './Icons/tailwind-css-icon.webp';
import javaLogo from './Icons/java.png';
import gitLogo from './Icons/git.png';
import githubLogo from './Icons/github.png'
import expressLogo from './Icons/ExpressLogo.png';
import awsLogo from './Icons/aws.png';
import bootstrapLogo from './Icons/bootstrap.png';
import javascriptLogo from './Icons/javascript.png';
import mongodbLogo from './Icons/mongodb.png';
import mysqlLogo from './Icons/mysql.png';
import netlifyLogo from './Icons/netlify.png';
import nodejsLogo from './Icons/nodejsLogo.png';
import vscodeLogo from './Icons/visual-studio-code.png';
import postmanLogo from './Icons/postman.png';

const Skills = () => {
    return (
        <div className='w-full  bg-gradient-to-b from-indigo-950 to-slate-950 p-8 min-h-screen pt-[58px] font-montserrat'>
            <h1 className='w-full text-center text-5xl font-bold text-slate-200 tracking-wide hover:tracking-normal  font-playfair-display'> Skills </h1>
            <p className='text-slate-400 text-center w-full text-xl mt-5 font-medium font-source-serif"'>Mastering a skill is like adding a new color to the palette of your life.</p>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-7'>
                <div className='bg-gray-900 border-2 border-indigo-700 md:w-[500px] md:h-[400px] rounded-xl m-3 p-5 text-center transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg'>
                    <div className='h-full'>
                        <h2 className='text-2xl text-slate-200 font-medium font-playfair-display'>Frontend</h2>
                        <div className='flex flex-wrap justify-center py-3 items-center'>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={reactLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Reactjs</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={reduxLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Redux</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={htmlLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>HTML</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={cssLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>CSS</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={javascriptLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Javascript</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={bootstrapLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Bootstrap</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={tailwindLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Tailwind CSS </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-900 border-2 border-indigo-700 md:w-[500px] md:h-[400px] rounded-xl m-3 p-5  text-center transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg'>
                    <div className='h-full'>
                        <h2 className='text-2xl text-slate-200 font-medium font-playfair-display'>Backend</h2>
                        <div className='flex flex-wrap justify-center py-3 items-center'>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1 mix-blend-normal text-slate-300" src={nodejsLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Nodejs</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={expressLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Expressjs</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={mysqlLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>MySQL</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={mongodbLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>MongoDB</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={javaLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Java</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='bg-gray-900 border-2 border-indigo-700 md:w-[500px] md:h-[400px] rounded-xl m-3 p-5 h-auto text-center transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg'>
                    <div className='h-full'>
                        <h2 className='text-2xl text-slate-200 font-medium font-playfair-display'>Others</h2>
                        <div className='flex flex-wrap justify-center py-3 items-center'>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={githubLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>GitHub</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={awsLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>AWS</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={gitLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Git</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={postmanLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Postman</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={netlifyLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>Netlify</span>
                            </div>
                            <div className='bg-gray-900 border-slate-500 rounded-lg border-2 m-2 p-2 px-3 flex justify-between'>
                            <img className="h-7 m-1" src={vscodeLogo} alt='' />
                                <span className='text-slate-400 m-1 font-medium'>VsCode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
