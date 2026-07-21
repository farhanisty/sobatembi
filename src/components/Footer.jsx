import LogoKKN from "../assets/logo-kkn.png"
import LogoUniv from "../assets/logo-univ.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div>
            <h4>KKN [Nama Desa]</h4>
            <p
              style={{
                color: "rgba(249, 227, 182, 0.75)",
                maxWidth: "280px",
                marginTop: 8,
                fontSize: "0.92rem"
              }}
            >
              Kelompok KKN
              UPNVY 84.022 — Tembi, Timbulharjo, Bantul.</p>
            <div className="foot-logos">
              <img src={LogoKKN} alt="Logo Universitas" />
              <img src={LogoUniv} alt="Logo Kelompok KKN" />
            </div>
          </div>
          <div className="foot-links">
            <div>
              <div className="foot-col-title">Navigasi</div>
              <a href="tentang.html">Tentang</a>
              <a href="proker.html">Program Kerja</a>
              <a href="timeline.html">Timeline</a>
              <a href="kontak.html">Kontak</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">Copyright © 2026 KKN 84.022 Tembi
        </div>
      </div>
    </footer >
  )
}
