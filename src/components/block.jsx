const Block = () => {
    return (
            <div className="items-center grid grid-cols-1 bg-zinc-600 h-[700px] md:h-[500px] md:w-[70%] m-5 md:m-[10%] shadow-lg ">
                <div className="h-[70%]">
                    image
                </div>
                <span className="h-[20%] ">
                    info
                </span>
                <button className="bg-slate-400 rounded-md m-5">
                    Details
                </button>
            </div>
    )
};
export default Block;