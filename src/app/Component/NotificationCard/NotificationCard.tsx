
import IndividualNotificationCard from "../IndividualNotificationCard/IndividualNotificationCard"

const NotificationCard = () => {

    let NotificationArray = [{
        title: "Join our weekly community chat on Google Meet in a few minutes to share your feedback and hear updates! Our community chats happen on Thursdays at 3PM ET.Meeting link here.",
        days: 9,
        id: "q1212"
    }]

    return (
        <div className="fixed top-24 p-4  right-4 rounded-2xl w-[480px] bg-[#ffffff] shadow-2xl h-5/6 min-h-4 overflow-y-auto">
            <div className="text-lg font-semibold font-sans">
                Notifications
            </div>
            {
                NotificationArray &&
                NotificationArray.map((notification) => {
                    return (
                        <IndividualNotificationCard {...notification} key={notification.id} />
                    )
                })
            }


        </div>
    )

}

export default NotificationCard