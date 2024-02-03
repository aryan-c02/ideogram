"use client"

import { useState } from "react"
import Image from "next/image"
import SubscriptionHeader from "@/app/Component/SubscriptionHeader/SubscriptionHeader"
import Appbar from "@/app/Component/Appbar/Appbar"
import SearchBar from "@/app/Component/SearchBar/SearchBar"

interface UserType {
    id: string,
    username: string,
    following: number,
    followers: number,
    propmtsLeft: number,
    profilePic: string,
    likes: number,
}


export default function ProfilePage() {

    const [userDetails, setUserDetails] = useState<UserType>({
        id: "random gebrish",
        username: "aryanchouhan02",
        following: 10,
        followers: 10,
        propmtsLeft: 22,
        profilePic: "random gebrish",
        likes: 2,
    })
    const [toggle, setToggle] = useState("All")

    return (
        <div>
            <SubscriptionHeader />
            <Appbar />
            <SearchBar />

            <div >
                <div className="mt-4 flex flex-col items-center ">
                    <div className="mt-8  ">
                        <Image className="rounded-full " src="/sample-profile-pic.png" alt="profilePic" height={80} width={80} />
                    </div>
                    <div className="font-bold text-lg ">
                        {userDetails.username}
                    </div>
                    <div className="flex space-between gap-2">
                        <div className="font-medium  text-base ">
                            {userDetails.following} following
                        </div>
                        <div className="font-medium text-normal ">
                            {userDetails.followers} followers
                        </div>

                    </div>
                    <div className="text-sm  text-gray-600">
                        Received {userDetails.likes} likes since Jan 2024
                    </div>
                    <div className="text-sm font-normal text-gray-800">
                        {userDetails.propmtsLeft}/25 prompts left
                    </div>
                </div>

            </div>

            <div className="mt-8 flex flex-row items-center justify-center gap-4">
                <div onClick={(e) => setToggle("Pinned")} className={"text-sm text-gray-500 font-semibold" +
                    (toggle == "Pinned" ? "" : "")}>
                    Pinned
                </div>
                <div onClick={(e) => setToggle("All")} className={"text-sm text-gray-500 font-semibold" +
                    (toggle == "All" ? "" : "")} >
                    All
                </div>
                <div onClick={(e) => setToggle("Liked")} className={"text-sm text-gray-500 font-semibold" +
                    (toggle == "Liked" ? null : "")}>
                    Liked
                </div>
            </div>


        </div >
    )

}