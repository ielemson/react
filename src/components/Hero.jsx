import React from 'react'
import { FaGithub,FaTwitter,FaLinkedinIn } from "react-icons/fa";
const Hero = () =>{
  return (
    
    <div className="pt-32 pb-20 md:pt-40">
    <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="lg:flex lg:items-center lg:gap-x-16">
            <div className="space-y-8 lg:w-7/12">
                <h1 className=" font-bold text-gray-900 text-4xl md:text-5xl">This app is powered by React!</h1>
                <p className="text-gray-600 lg:w-11/12">
                 This React App. was built to test user authentication access. Data auth system was implemented using a Laravel backend sanctum authentication system and react context to pass the data to every component that needs it.
                </p>

                <span className="block font-semibold">User login app, check my social handles. <br/>To access the code kindly using the github link below.</span>

                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <FaGithub className="w-10"  loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Github</span>
                        </div>
                    </a>
                    <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 rounded-md hover:border-green-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <FaTwitter className="w-10"  loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Twitter</span>
                        </div>
                    </a>
                    <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <FaLinkedinIn className="w-10" alt="chat logo" loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Linkdin</span>
                        </div>
                    </a>
                </div>

                <div>

                    {/* <span>Other integrations :</span> */}
                    <a href="#" className="font-semibold text-gray-700">Kindly click here to rate this application if you find it useful</a>
                   <br />
                    <a href="#" className="font-semibold text-gray-700">Theme Credit: Tailus Components</a>
                </div>
            </div>

            <div hidden className="lg:block lg:w-5/12">
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/watch.svg" className="w-full" alt="wath illustration" loading="lazy" width="320" height="280"/>
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero