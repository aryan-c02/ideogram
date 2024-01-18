import Image from "next/image"


const SearchBar = () => {
    return (
        <div className="flex justify-center">
            <div className="w-5/6">
                <div className="flex ">
                    <div className="-ml-1 ">
                        <Image alt="ideogram-logo" height={40} width={40} src="/ideogram-logo.png" />
                    </div>
                    <div className="  font-sans text-2xl font-bold mb-1">
                        Ideogram
                    </div>
                </div>
                <div className="flex mt-6 ">
                    <input className="text-zinc-500 font-normal text-lg  pl-8 rounded-l-3xl h-12 w-11/12 shadow-[0_2px_15px_-6px_rgba(0,0,0)]" placeholder="Describe what you want to see here." />
                    <button className=" rounded-r-3xl bg-gray-950 w-[8rem] text-white text-lg font-medium pr-4 pb-3 pl-4 pt-2">Generate</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar