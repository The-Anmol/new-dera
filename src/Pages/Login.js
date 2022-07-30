import React ,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate() ;

    const login = () =>{
        localStorage.setItem("login",true); 
        navigate("/form")
    }

    useEffect( ()=>{
        const login = localStorage.getItem("login");
        if(login){
            navigate("/form")
        }
    })





    return (
        <>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-4 py-6 text-white bg-white border-r border-gray-400 border-1 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <img src="/login.svg" alt="" />
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                        <form action="#" className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <input type="email" id="email" autofocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                                    <div className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</div>
                                </div>
                                <input type="password" id="password" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="remember" className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                            </div>
                            <div>
                                <button onClick={login} type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                                    Log in
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">or login with</span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none">
                                        <span className="text-sm font-medium text-blue-500 group-hover:text-white">Google</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login