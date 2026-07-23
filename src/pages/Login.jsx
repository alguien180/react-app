import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const Login = () => {

    const { register, handleSubmit, reset } = useForm()

    /* const [name, setName] = useState('')
    const [lastname, setLastame] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getData = (e, setData) => {
        setData(e.target.value)
    }

    const sendData = () => {
        const payload = {
            name,
            lastname,
            email,
            password
        }

        console.log('Payload:', payload)
    }

    useEffect(() => {
        console.log('formulario', name, lastname, email, password)
    }, [name, lastname, email, password]) */

    const onSubmit = (data) => {
        console.log('data', data)

        reset()
    }

    return (
        <>
            <h1>Login</h1>

            <div className="login-container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre</label>
                    <input type="text" { ...register('name') } />

                    <br />
                    <br />

                    <label>Apellidos</label>
                    <input type="text" { ...register('lastname') } />

                    <br />
                    <br />

                    <label>Correo</label>
                    <input type="text" { ...register('email') } />

                    <br />
                    <br />

                    <label>Contraseña</label>
                    <input type="password" { ...register('password') } />

                    <br />
                    <br />

                    <button>Enviar</button>
                </form>







                {/* <div>
                    <label>Nombre</label>
                    <input type="text" onChange={(e) => getData(e, setName)} />

                    <br />
                    <br />

                    <label>Apellidos</label>
                    <input type="text" onChange={(e) => getData(e, setLastame)} />

                    <br />
                    <br />

                    <label>Correo</label>
                    <input type="text" onChange={(e) => getData(e, setEmail)} />

                    <br />
                    <br />

                    <label>Contraseña</label>
                    <input type="password" onChange={(e) => getData(e, setPassword)} />

                    <br />
                    <br />

                    <button onClick={sendData}>Enviar</button>
                </div> */}
            </div>
        </>
    )
}

export default Login;