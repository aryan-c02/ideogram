import Image from "next/image"
export default function Loader() {

    return (
        <div className="bg-[#fafafc] w-full flex items-center justify-center h-screen">
            <div className="flex ">
                <div className="-ml-1 ">
                    <Image alt="ideogram-logo" height={40} width={40} src="/ideogram-logo.png" />
                </div>
                <div className="font-sans text-2xl font-bold mb-1 mt-0.5">
                    Ideogram
                </div>
            </div>

        </div>
    )
}