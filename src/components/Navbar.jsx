import LogoKKN from "../assets/logo-kkn.png"
import LogoUniv from "../assets/logo-univ.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="index.html" class="nav-brand">
          <div class="nav-logos">
            <img src={LogoKKN} alt="Logo Universitas" />
            <img src={LogoUniv} alt="Logo Kelompok KKN" />
          </div>
          Sobatembi
        </a>

        <button class="nav-toggle" aria-label="Buka menu">☰</button>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Beranda</a></li>
          <li><a href="tentang.html">Tentang</a></li>
          <li class="has-dropdown">
            <a href="proker.html">Program Kerja</a>
            <div class="dropdown">
              <div class="dd-label">Proker Utama</div>
              <a href="proker-1.html">[Nama Proker Utama 1]</a>
              <a href="proker-2.html">[Nama Proker Utama 2]</a>
              <div class="dd-label">Proker Pendukung</div>
              <a href="proker-3.html">[Nama Proker Pendukung 1]</a>
            </div>
          </li>
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </div>
    </nav>
  )
}
