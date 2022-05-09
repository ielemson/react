import React from 'react'

const Hero = () =>{
  return (
    
    <div className="pt-32 pb-20 md:pt-40">
    <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="lg:flex lg:items-center lg:gap-x-16">
            <div className="space-y-8 lg:w-7/12">
                <h1 className=" font-bold text-gray-900 text-4xl md:text-5xl">Run successful remote and hybrid teams</h1>
                <p className="text-gray-600 lg:w-11/12">
                    DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                </p>

                <span className="block font-semibold">The best companion bot for your chat app.</span>

                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Add to Slack</span>
                        </div>
                    </a>
                    <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 rounded-md hover:border-green-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Add to Google Chat</span>
                        </div>
                    </a>
                    <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                            <span className="hidden font-medium md:block">Add to Zoom</span>
                        </div>
                    </a>
                </div>

                <div>

                    <span>Other integrations :</span>
                    <a href="#" className="font-semibold text-gray-700">Discord,</a>
                    <a href="#" className="font-semibold text-gray-700">Telegram</a>
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