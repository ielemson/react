import React from 'react';

const Content = () => {
    return (
        <div className="py-16 bg-white">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">React JS user login boiler plate</h2>
                <p className="mt-6 text-gray-600">This application was build to overcome the hurdles of setting up a new react app for user login. This version was build using react context to pass the data to components</p>
                <p className="mt-4 text-gray-600">Another version with redux toolkit will be released soon. check the github link above for the repository. Each version will be pushed into a separate branch</p>
              </div>
            </div>
        </div>
      </div>
    );
};

export default Content;