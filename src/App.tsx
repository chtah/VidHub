import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  )
}

export default App
