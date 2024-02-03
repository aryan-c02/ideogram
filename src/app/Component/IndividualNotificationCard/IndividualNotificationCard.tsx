
import Image from "next/image"

interface IndividualNotificationCardProps {
    title: string,
    id: string,
    days: number,
}

const IndividualNotificationCard = (props: IndividualNotificationCardProps) => {
    const { title, id, days } = props;
    return (
        <div className=" py-4 px-2 flex space-around">
            <div className="pt-2">
                <Image height={20} width={20} src="/x-logo.png" alt="notificationIcon" />
            </div>
            <div className="w-[430px]  pt-2 pl-4 pb-4 pr-8 text-gray-800 text-sm font-normal">
                <div className="">{title}</div>
                <div className="text-xs text-end text-gray-800 font-normal">
                    {days} days ago
                </div>
            </div>

        </div>
    )
}


export default IndividualNotificationCard