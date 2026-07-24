import { useScrollReveal } from './hooks/useScrollReveal'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Proker from './pages/Proker'
import PembuatanBiopori from './pages/proker/utama/PembuatanBiopori'
import SIGDTembi from './pages/proker/utama/SIGDTembi'
import HariAnakNasional from './pages/proker/utama/HariAnakNasional'
import Vertikultur from './pages/proker/individu/Vertikltur'

function App() {
  useScrollReveal();

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tentang" element={<Tentang />}></Route>
      <Route path="/proker" element={<Proker />}></Route>

      {/* Proker Utama */}
      <Route path="/proker/utama/pembuatan-biopori" element={<PembuatanBiopori />}></Route>
      <Route path="/proker/utama/sigd-tembi" element={<SIGDTembi />}></Route>
      <Route path="/proker/utama/hari-anak-nasional" element={<HariAnakNasional />}></Route>

      {/* Proker Individu */}
      <Route path="/proker/individu/vertikultur" element={<Vertikultur />}></Route>
    </Routes>
  )
}

export default App
