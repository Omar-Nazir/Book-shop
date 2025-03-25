import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className=" min-h-[85%]">
            <div className="mt-[5%] grid grid-cols-1 mx-7 md:mx-[20%] shadow-lg select-none ">
                <div className=" h-[160px] text-2xl">
                    <div className="bg-[#192e2f] h-[70%] text-white flex items-center justify-center rounded-t-md opacity-80">
                        Login
                    </div>
                    <div className=" h-[30%] flex items-center justify-center">
                        Use a local account to login
                    </div>
                </div>
                <div className="grid grid-cols-1 border-t-2 border-gray-400  border-opacity-40 ">
                <div className="relative m-5">
                        <input id="email" type="email" placeholder="" required className="peer h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="email"
                            className="absolute cursor-text text-gray-500 text-sm left-5  transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Email
                        </label>
                    </div>
                <div className="relative m-5">
                        <input id="password" type="email" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="password"
                            className="absolute cursor-text text-gray-500 text-sm left-5  transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Password
                        </label>
                    </div>

                    <div className="pl-5">
                        <input className="col-span-[.5]" type="radio" /> Remember me?
                    </div>

                    <button className="h-10 m-5 rounded-md  hover:opacity-95  text-white opacity-80 bg-[#192e2f]">Login</button>
                </div>

                <div className="text-green-500 text-[14px]  underline w-[100%] ">
                    <span className="pl-2 md:pl-[5%]"  ><Link className="underline-offset-1  hover:text-green-800  " to="/passwordforgot"> Forgot your password?</Link></span>
                    <span className="px-9  md:px-[7%] lg:px-[25%]"><Link className="hover:text-green-800" to="/registration">Register a as new user</Link>  </span>
                    <Link className=" hover:text-green-800" to="/Emailconfirm">Resend email confirmation</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;