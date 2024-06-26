import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const [Email, setEmail] = useState<string | undefined>();
    const [Password, setPassword] = useState<string | undefined>();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic for handling login
    }

    return (
        <>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-orange-300 to-orange-700 i justify-around items-center hidden">
                    <img src="res_icon.png" alt="backgroud" className='w-[60%] h-[60%]' />

                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form className="bg-white" onSubmit={handleLogin}>
                        <p className="text-sm font-normal flex justify-center items-center text-gray-600 "><img src="logo_app.png" width={80} height={80} alt=" logo app " /></p>
                        <p className=" font-normal flex justify-center items-center text-gray-600 mb-7 text-xl"><b>Order Up</b></p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none w-72 border-none" type="text" value={Email} name="Email" id="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none w-72 border-none" type="password" value={Password} name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="block w-full bg-orange-500 hover:bg-orange-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                        <p className="flex justify-center items-center mt-4 mb-4">or</p>
                        <button className="flex justify-center items-center hover:bg-green-200 border-2 h-12  rounded-md bg-green-100 border-gray-600 p-2 w-full  "><img src="icon-google.png" alt="Google" width={30} height={30} /> &ensp;Continue with google</button>
                        <button className="flex justify-center items-center mt-2 hover:bg-blue-200 border-2 h-12 rounded-md bg-blue-100 border-gray-600 p-2 w-full mb-4 "><img src="icon_facebook.png" alt="Google" width={30} height={30} /> &ensp;Continue with facebook</button>
                        <span className="text-sm ml-2  hover:text-blue-500 cursor-pointer"><Link to='/register'>You don't have an account<b> Register</b></Link> ?</span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
