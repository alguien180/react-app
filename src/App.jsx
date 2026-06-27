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
        </nav>

        <br/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<User />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
