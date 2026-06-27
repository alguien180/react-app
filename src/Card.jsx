import { useEffect, useState } from "react"



const Card = ({product}) => {

    const [title,  setTitle] = useState('componente card')
    const [count, setCount] = useState(0)

    // se dispara  cada que un estado sufre  un cambio
    useEffect(() => {

    })

    // se dispara solo cuando el componente nace
    useEffect(() => {

    }, [])

    // se dispara solo si su dependencia sufre cambios
    useEffect(()  =>  {
        
    }, [title]) // la dependencia va entre corchetes

    function addCount() {
        setCount(count + 1)
    }

    function addTitle() {
        setTitle('titulo 2')
    }

    return(
        <>
            <div>
                <h2  className="title">{product}</h2>
                <p>{title}</p>
                <h3 className="title3">{count}</h3>
                <button className="button" onClick={addCount}>Click</button>
                <button className="button" onClick={addTitle}>Click 2</button>

            </div>
        </>
    )
}

export default Card