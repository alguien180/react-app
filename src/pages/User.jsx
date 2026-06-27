import { useEffect } from "react";
import { useParams } from "react-router-dom";



const User = () => {

    const { id } = useParams()

    useEffect(() => {
        console.log(id)
    }, [id])

    return(
        <>
            <div className="container page-user">
                <h1>User</h1>
            </div>
        </>
    )
}

export default User;