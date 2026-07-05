import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import Home from './pages/Home'
import Users from './pages/Users'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import User from './pages/User'
import NotFound from './pages/Not-found'
import Login from './pages/Login'
import PrivateRoutes from './router/Private-routes'
import PublicRoutes from './router/Public-routes'

function App() {
  const [count, setCount] = useState(0)

  let product = 'refresco'

  const users = [
    {
        name: 'Jean',
        lastname: 'Zuñiga'
    },
    {
        name: 'Carlos',
        lastname: 'Zuñiga'
    },
    {
        name: 'Juanito',
        lastname: 'Zuñiga'
    }
  ]

  const isAuthenticated = false

  return (
    <>
      {/* <h1 className='title title2'>React app</h1>
      <Card product={product}/>


      <div className='container'>
        {
          users.map((user) => (
            <div className="card">
              <h1>{user.name}</h1>
              <h2>{user.lastname}</h2>
            </div>
          ))
        }
      </div> */}
      <BrowserRouter>

        <nav>
          <Link to="/" >Home</Link>
          <Link to="/users" >Users</Link>
          <Link to="/user">User</Link>
          <Link to="/login">Login</Link>
        </nav>

        <br/>

        <Routes>

          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/:id' element={<User />} />
          </Route>

          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />} >
            <Route path='login' element={<Login />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
