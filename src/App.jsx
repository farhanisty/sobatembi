import { useScrollReveal } from './hooks/useScrollReveal'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Proker from './pages/Proker'

function App() {
  useScrollReveal();

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tentang" element={<Tentang />}></Route>
      <Route path="/proker" element={<Proker />}></Route>
    </Routes>
  )
}

export default App
