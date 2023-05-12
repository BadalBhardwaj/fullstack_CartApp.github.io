import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-100">
            <div className="md:w-2/3 w-full px-4 text-orange-600 flex flex-col">
                <div className="w-full text-7xl font-bold">
                    <h1 className="w-full md:w-2/3">How can we help you. get
                        in touch</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-orange-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                    <div className="w-44 pt-6 md:pt-0">
                        <a className="bg-orange-300 justify-center text-orange-700 text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex mt-24 mb-12 flex-row justify-between">
                    <p classNameName="text-green-400 hover:text-orange-300 duration-100 transition-all ease-in-out cursor-pointer text-xl font-bold"> FastPic</p>
                        <a className="hidden md:block cursor-pointer text-orange-600 hover:text-green-600 uppercase">About</a>
                        <a className="hidden md:block cursor-pointer text-orange-600 hover:text-green-600 uppercase">Services</a>
                        <a className="hidden md:block cursor-pointer text-orange-600 hover:text-green-600 uppercase">Why us</a>
                        <a className="hidden md:block cursor-pointer text-orange-600 hover:text-green-600 uppercase">Contact</a>
                        <div className="flex flex-row space-x-8 items-center justify-between">
                                                  
                        </div>
                    </div>
                    <hr className="border-green-600"/>
                    <p className="w-full text-center my-12 text-orange-600">Copyright © ---   2023 Badal Bhardwaj --- Creater</p>
                </div>
            </div>
        </div>


  );
};

export default Footer;

