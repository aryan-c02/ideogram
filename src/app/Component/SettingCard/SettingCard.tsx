
import Image from "next/image"
import { SettingCardButton } from "../SettingCardButton/SettingCardButton"

const SettingCard = () => {

    const buttonContentsArray = ["Help", "Discord Community",
        "Follow us on X ", "Terms of Service", "Privacy Policy", "Delete Acoount"]

    return (
        <div className="z-10 pt-4 pb-4 pr-2 pl-2 fixed top-24 right-6 w-72 text-neutral-500 h-max text-base list-none bg-[#ffffff] shadow-2xl rounded-2xl flex flex-col">
            <div className="flex pl-4 items-center">
                <div>
                    <Image src="/x-logo.png" alt="profile-pic" width={20} height={20} />
                </div>
                <div className="flex flex-col ">
                    <div className="text-base text-lg font-medium tracking-wide font-sans">
                        aryanchouhan02
                    </div>
                    <div className="text-base text-sm text-gray-400 font-normal tracking-wide font-sans">
                        0521aryan@gmail.com
                    </div>

                </div>

            </div>

            <div className="mt-4 text-sm font-normal text-center">
                25/25 prompt left
            </div>
            <div className="mt-2">

                <SettingCardButton content={"Subscription Plans"} />
                <SettingCardButton content={"Sign Out"} />
            </div>

            <div className="mt-2 text-xs pl-2 pb-2">
                more options
            </div>
            {
                buttonContentsArray && buttonContentsArray.map((data, index) => (<div key={index}>
                    <SettingCardButton content={data} />
                </div>))
            }
        </div>
    )
}

export default SettingCard