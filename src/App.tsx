import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'
import GuardedRoute from './guard/GuardedRoute'
import Login from './pages/Login'
import { useAuth } from './providers/AuthProvider'
import Profile from './pages/Profile'
import Create from './pages/CreateVideo'
import Edit from './pages/Edit'
import '@lottiefiles/lottie-player'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
