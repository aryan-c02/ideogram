
import Image from "next/image"

const Appbar = () => {
    return (
        <div className="flex justify-end pr-12 pt-8 pb-2 gap-6">

            <div>
                <Image alt="home-icon" height={22} width={22} className="" src="/Home-icon.png" />
            </div>
            <div>
                <Image alt="notification-icon" height={22} width={22} src="/notification-icon.png" />
            </div>
            <div>
                <Image alt="setting-icon" height={22} width={22} src="/setting-icon.png" />
            </div>
            <div>
                <Image alt="profile-icon" height={22} width={22} src="/Home-icon.png" />
            </div>



        </div>
    )
}

export default Appbar