
import { useState, useEffect } from "react"

interface PinnedPost {
    id: string,
    imageUrl: string,

}

const UserPinnedImages = () => {

    const [userPinnedPost, SetUserPinnedPost] = useState<PinnedPost[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        function userPinnedPostFetch() {

        }
    }, [userPinnedPost]);



    return (
        <div>
            {userPinnedPost.length == 0 && <div>
                No Pins Yet
            </div>}
        </div>
    )
}


export default UserPinnedImages