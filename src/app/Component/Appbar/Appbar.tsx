"use client"
import Image from "next/image"
import { useState } from "react"
import SettingCard from "../SettingCard/SettingCard";
import NotificationCard from "../NotificationCard/NotificationCard";

const Appbar = () => {
    const [isSettingsActive, setIsSettingActive] = useState(false);
    const [isNotificationActive, setIsNotificationActive] = useState(false);
    return (
        <div className="flex justify-end pr-12 pt-8 pb-2 gap-6 invisible sm:visible">

            <div>
                <Image alt="home-icon" height={22} width={22} className="" src="/Home-icon.png" />
            </div>
            <div>
                <Image onClick={(e) => setIsNotificationActive(!isNotificationActive)} alt="notification-icon" height={22} width={22} src="/notification-icon.png" />
            </div>
            {
                isNotificationActive &&
                <NotificationCard />
            }
            <div>
                <Image onClick={(e) => setIsSettingActive(!isSettingsActive)} alt="setting-icon" height={22} width={22} src="/setting-icon.png" />
            </div>
            {
                isSettingsActive &&
                <SettingCard />
            }
            <div>
                <Image alt="profile-icon" height={22} width={22} src="/Home-icon.png" />
            </div>
        </div>
    )
}

export default Appbar