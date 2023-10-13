import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-violet-600">
        <div className="flex items-center justify-center flex-col gap-5 w-full">
        <Link
          to={"/sign-up"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Sigin Up
        </Link>
        <Link
          to={"/sign-in"}
          className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
        >
          Sigin In
        </Link>
        </div>
        
    </div>
  )
}

export default Register
