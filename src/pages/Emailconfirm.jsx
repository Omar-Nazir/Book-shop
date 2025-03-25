const Emailconfirm = () => {
    return (
        <div className="font-serif m-8">
            <div >
                <h1 className="text-3xl">
                Resent email confirmation
                </h1>
                <h4>Enter your email.</h4>
            </div>
            <div className="grid w-[50%]">
                <div className="relative  mt-2 ">
                    <input id="email" type="email" placeholder="" required className="peer h-full w-full focus:ring text-gray-800 focus:border-teal-600 border-gray-400 border-2 p-5 border-opacity-50 rounded-md focus:outline-none" />
                    <label
                        htmlFor="email"
                        className="absolute cursor-text text-gray-500 text-sm left-5  transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                    >
                        Email
                    </label>
                </div>
                <button className="h-10 m-5 rounded-md  hover:opacity-95  text-white opacity-80 bg-[#192e2f]">Resent</button>
            </div>

        </div>
    )
}
export default Emailconfirm;