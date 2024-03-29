
import Image from "next/image"


export default function LandingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen overflow-auto  " >
            <div className="flex flex-col w-4/6 md:w-96  min-w-60">
                <div className="flex flex-row justify-between items-center justify-center ">

                    <div className="flex justify-between items-center justify-center gap-1 ">

                        <div className="ml-0 sm:-ml-1 ">
                            <Image alt="ideogram-logo" height={40} width={40} src="/ideogram-logo.png" />
                        </div>
                        <div className="  font-sans text-base sm:text-2xl font-bold mb-1">
                            Ideogram
                        </div>
                    </div>
                    <div className="flex justify-around items-center justify-center pl-2  gap-3">

                        <div>
                            <Image alt="discord-logo" height={20} width={20} src="/discord-mark-black.png" />
                        </div>
                        <div>
                            <Image alt="twitter-logo" height={17} width={17} src="/x-logo.png" />
                        </div>
                        <button type="button" className="text-gray-1000 bg-white border border-grey-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  rounded text-sm px-4 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
                    </div>
                </div>

                <div className="w-full mt-4 mb-4 h-100  ">
                    <img className="rounded-2xl" alt="landingPage-Image" style={{ objectFit: "cover", height: "100%", width: "100%" }} src="/landingPage2.png" />
                </div>

                <div className="">
                    <button type="button" className="text-white flex  justify-center items-center pt-1 pb-1 bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        <Image alt="google-logo" height={37} width={37} src="/google-icon.png" />
                        <div className="text-sm sm:text-base">
                            Signup with Google
                        </div>
                    </button>
                </div>

            </div>

        </div>
    )
}