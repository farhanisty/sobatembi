import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-blob b1"></div>
        <div className="hero-blob b2"></div>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">KKN.84.022</span>
            <h1>Membangun <span className="accent">Tembi</span> lewat kerja nyata mahasiswa.</h1>
            <p className="lead">Dokumentasi program kerja kelompok KKN kami di [Nama Desa, Kecamatan, Kabupaten] — mulai dari
              proker utama hingga proker pendukung yang kami jalankan selama masa pengabdian.</p>
            <div className="hero-actions">
              <a href="proker.html" className="btn btn-primary">Lihat Program Kerja</a>
              <a href="tentang.html" className="btn btn-outline">Tentang Kelompok Kami</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">3</div>
                <div className="stat-label">Proker Utama</div>
              </div>
              <div>
                <div className="stat-num">10</div>
                <div className="stat-label">Proker Individu</div>
              </div>
              <div>
                <div className="stat-num">5</div>
                <div className="stat-label">Proker Pendukung</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
