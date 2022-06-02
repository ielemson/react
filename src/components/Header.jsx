import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {AuthContext} from "../context/auth"
// import api from "../API"
// const endpoint = "/logout"
const logo = "../logo.png"

// import {HiMenuAlt4} from 'react-icons/hi';


const Header = () => {
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const {isLoggedIn,logout} = React.useContext(AuthContext)
    


    return (
        <div>
            <header>
                <nav className="fixed w-full bg-white">
                    <div className="container m-auto px-6 md:px-12 lg:px-6">
                        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
                            <div className="w-full flex justify-between lg:w-auto">
                                <Link to="/" aria-label="logo">
                                    <img src={logo} className="w-36" alt="tailus logo" width="144" height="48"/>
                                </Link>

                                <div aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
                                {!toggleMenu && (
                                        <AiOutlineMenu fontSize={28} className="text-gray-600 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                                        )}
                                        {toggleMenu && (
                                        <AiOutlineClose fontSize={28} className="text-gray-600 md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                                        )}
                                        {toggleMenu && (
                                        <ul
                                            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-gray-100 animate-slide-in"
                                        >
                                            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                                            <li className='mx-4 my-2 text-lg text-bold cursor-pointer'>
                                            <Link to="/" className="block md:px-3">
                                                <span>Home</span>
                                            </Link>
                                        </li>

                                        {isLoggedIn  && <li className='mx-2 cursor-pointer'>
                                        <Link to="/dashboard" className="block md:px-3">
                                                <span>Dashboard</span>
                                            </Link>
                                        </li> }
                                        


                                        {
                                        isLoggedIn ? (

                                            <li className='mx-4 my-2 text-lg text-bold cursor-pointer'>
                                                <button onClick={logout}
                                                    type="button"
                                                    className=" w-full py-1 px-3 rounded-md text-center transition bg-red-500 hover:bg-red-600 active:bg-red-700 focus:bg-red-600 sm:w-max">
                                                    <span className="block text-white font-semibold">
                                                        Logout
                                                    </span>
                                                </button>
                                            </li>
                                        ) : (

                                            <>
                                                <li className='mx-4 my-2 text-lg text-bolder cursor-pointer text-green-900'>
                                                    <Link to="/login">
                                                       
                                                    <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign In</button>
                                                            
                                                    </Link>
                                                </li>


                                                <li className='mx-4 my-2 text-lg text-bold cursor-pointer  text-blue-900'>
                                                    <Link to="/register">
                                                       
                                                    <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                                           
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    }

                                        </ul>
                                        )}
                                </div>

                            </div>

                            <div hidden className="w-full bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex">
                                <div className="block w-full lg:items-center lg:flex">
                                    <ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-600 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">

                                        <li className='mx-2 cursor-pointer'>
                                            <Link to="/" className="block md:px-3">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                            {isLoggedIn  && <li className='mx-2 cursor-pointer'>
                                        <Link to="/dashboard" className="block md:px-3">
                                                <span>Dashboard</span>
                                            </Link>
                                        </li> }
                                        
                                        <li className='mx-2 cursor-pointer'>
                                            <Link to={'blog'}  className="block md:px-3">
                                                <span>Blog</span>
                                            </Link>
                                        </li></ul>

                                       
                                    <ul className="border-t space-y-2 pt-2 lg:space-y-0 lg:space-x-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l lg:items-center lg:flex">

                                        {
                                        isLoggedIn ? (

                                            <li>
                                                <button onClick={()=>logout()}
                                                    type="button"
                                                    className=" w-full py-3 px-6 rounded-md text-center transition bg-red-500 hover:bg-red-600 active:bg-red-700 focus:bg-red-600 sm:w-max">
                                                    <span className="block text-white font-semibold">
                                                        Logout
                                                    </span>
                                                </button>
                                            </li>
                                        ) : (

                                            <>
                                                <li>
                                                    <Link to="/login">
                                                        <button type="button" className="w-full py-3 px-6 rounded-md text-center transition active:bg-sky-200 focus:bg-sky-100 sm:w-max">
                                                            <span className="block text-cyan-600 font-semibold">
                                                                Sign in
                                                            </span>
                                                        </button>
                                                    </Link>
                                                </li>


                                                <li>
                                                    <Link to="/register">
                                                        <button type="button" className="w-full py-3 px-6 rounded-md text-center transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-600 sm:w-max">
                                                            <span className="block text-white font-semibold">
                                                                Register
                                                            </span>
                                                        </button>
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    } </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
};
export default Header;
