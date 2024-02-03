import SubscriptionHeader from "@/app/Component/SubscriptionHeader/SubscriptionHeader"
import Appbar from "@/app/Component/Appbar/Appbar"
import SearchBar from "@/app/Component/SearchBar/SearchBar"

const HomePage = () => {
    return (
        <div className="bg-[#fafafc]">
            <SubscriptionHeader />
            <Appbar />
            <SearchBar />
        </div>
    )
}

export default HomePage