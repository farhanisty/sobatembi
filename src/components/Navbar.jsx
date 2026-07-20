import LogoKKN from "../assets/logo-kkn.png"
import LogoUniv from "../assets/logo-univ.png"
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleNavScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="index.html" className="nav-brand">
          <div className="nav-logos">
            <img src={LogoKKN} alt="Logo Universitas" />
            <img src={LogoUniv} alt="Logo Kelompok KKN" />
          </div>
          Sobatembi
        </a>

        <button className="nav-toggle" aria-label="Buka menu">☰</button>
        <ul className="nav-links">
          <li><a href="index.html" className="active">Beranda</a></li>
          <li><a href="tentang.html">Tentang</a></li>
          <li className="has-dropdown">
            <a href="proker.html">Program Kerja</a>
            <div className="dropdown">
              <div className="dd-label">Proker Utama</div>
              <a href="proker-1.html">[Nama Proker Utama 1]</a>
              <a href="proker-2.html">[Nama Proker Utama 2]</a>
              <div className="dd-label">Proker Pendukung</div>
              <a href="proker-3.html">[Nama Proker Pendukung 1]</a>
            </div>
          </li>
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </div>
    </nav >
  )
}
