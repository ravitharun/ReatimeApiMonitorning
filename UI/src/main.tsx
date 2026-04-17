import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Sign from './pages/Sign.tsx'
import LoginForm from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/SignUp' element={<Sign />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Login' element={<LoginForm />} />




      </Routes>
    </BrowserRouter>

)
