import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="w-full text-gray-700 bg-gray-200 border-t border-gray-100 shadow-sm body-font">
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                    <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                        <Link className="mr-5 font-medium hover:text-gray-900" to="/">
                            Home
                        </Link>
                        <Link className="mr-5 font-medium hover:text-gray-900" to="/create">
                            Add Post
                        </Link>
                    </nav>
                    <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
                        <div className="flex items-center">
                            <svg
                                fill="#000000"
                                height="40px"
                                width="40px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 290 290"
                                xml:space="preserve"
                            >
                                <path
                                    d="M289.154,128.48c0.11-1.746,0.282-9.765-5.219-15.765c-3.721-4.058-8.987-6.115-15.646-6.115l-16.642-0.022
	c-6.894,0-9.791-8.219-13.743-21.755c-0.284-0.974-0.568-1.949-0.857-2.92c-6.552-22.066-17.825-42.377-31.742-57.189
	C190.115,8.545,173.074,0,156.021,0H94.195C42.693,0,0.793,41.937,0.793,93.484v103.209c0,51.45,41.9,93.307,93.402,93.307h101.583
	c51.229,0,93.14-41.845,93.429-93.311L289.154,128.48z M80.818,73.106h61.331c11.046,0,20,8.954,20,20s-8.954,20-20,20H80.818
	c-11.046,0-20-8.954-20-20S69.772,73.106,80.818,73.106z M205.431,214.225H80.818c-11.046,0-20-8.954-20-20s8.954-20,20-20h124.612
	c11.046,0,20,8.954,20,20S216.477,214.225,205.431,214.225z"
                                />
                            </svg>
                            <span className="ml-1 font-bold text-xl">LOG</span>
                        </div>
                    </a>
                    <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                        <a href="#_" className="mr-5 font-medium hover:text-gray-900">
                            Login
                        </a>
                        <a
                            href="#_"
                            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
