const Registration = () => {
    return (
        <div className="min-h-[85%]">
            <div className="m-[5%] shadow-lg select-none ">
                <div className=" h-[160px] text-2xl">
                    <div className="bg-[#192e2f] h-[50%] text-white  flex items-center justify-center rounded-t-md opacity-80">
                        Registration
                    </div>
                    <div className=" h-[50%] flex items-center justify-center">
                        Create new account
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-gray-400  border-opacity-40 ">
                    <div className="relative col-span-1 md:col-span-2 h-16 m-5">
                        <input id="email" type="email" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="email"
                            className="absolute text-gray-500 text-sm left-5 cursor-text transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Full Name" type="text" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Full Name"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Phone Number" type="number" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Phone Number"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Phone Number
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Password" type="password" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Password"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Password
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Confirm Password" type="password" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Confirm Password"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Confirm Password
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Street address" type="text" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Street address"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Street address
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="City" type="text" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="City"
                            className="absolute text-gray-500 text-sm left-5 top-2 cursor-text transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            City
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="State" type="text" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="State"
                            className="absolute text-gray-500 text-sm left-5 top-2 cursor-text transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            State
                        </label>
                    </div>
                    <div className="relative col-span-1 md:col-span-1 h-16 m-5">
                        <input id="Postal Code" type="text" placeholder="" required className="peer  h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                        <label
                            htmlFor="Postal Code"
                            className="absolute text-gray-500 text-sm left-5 top-2 transition-all cursor-text peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                        >
                            Postal Code
                        </label>
                    </div>
                    <button className="h-10 m-5 rounded-md col-span-1 md:col-span-2 hover:opacity-95  text-white opacity-80 bg-[#192e2f]">Rigester</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;