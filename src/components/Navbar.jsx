import { Link } from "react-router-dom";
import LogoKKN from "../assets/logo-kkn.png"
import LogoUniv from "../assets/logo-univ.png"
import { useState, useEffect } from "react";

export default function Navbar({ active = null }) {
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
        <a href="/" className="nav-brand">
          <div className="nav-logos">
            <img src={LogoKKN} alt="Logo Sobatembi" />
          </div>
          Sobatembi
        </a>

        <button className="nav-toggle" aria-label="Buka menu">☰</button>
        <ul className="nav-links">
          <li><a href="/" className={`${active == "home" ? "active" : ""}`}>Beranda</a></li>
          <li><a href="/tentang" className={`${active == "tentang" ? "active" : ""}`}>Tentang</a></li>
          <li><a href="/proker" className={`${active == "proker" ? "active" : ""}`}>Program Kerja</a></li>
        </ul>
      </div>
    </nav >
  )
}
