import './styles/App.css'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Quiz from './components/pages/Quiz'
import Result from './components/pages/Result'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='signup' element={<PublicRoute><Signup /></PublicRoute>}></Route>
          <Route path='login' element={<PublicRoute><Login /></PublicRoute>}></Route>
          <Route path='quiz/:id' element={<PrivateRoute><Quiz /></PrivateRoute>}></Route>
          <Route path='result/:id' element={<PrivateRoute><Result /></PrivateRoute>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
