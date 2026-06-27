import { useNavigate } from "react-router-dom";




const Home = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/users')
    }

    return(
        <>
            <div className="container page-home">
                <h1>Home</h1>

                <button onClick={redirect}>Users</button>
            </div>
        </>
    )
}

export default Home;