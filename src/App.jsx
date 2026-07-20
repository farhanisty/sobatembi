import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar"
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

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

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Program Kerja</span>
            <h2>Yang sedang kami kerjakan di desa</h2>
            <p>Ringkasan proker unggulan kami. Selengkapnya ada di halaman Program Kerja.</p>
          </div>
          <div className="grid-cards" data-stagger>
            <article className="card-proker reveal">
              <div className="thumb">01</div>
              <div className="body">
                <span className="badge utama">Proker Utama</span>
                <h3>Pembuatan Biopori</h3>
                <p>[Deskripsi singkat 1–2 kalimat tentang proker ini dan manfaatnya bagi warga desa.]</p>
                <a href="proker-1.html" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
            <article className="card-proker reveal">
              <div className="thumb">02</div>
              <div className="body">
                <span className="badge utama">Proker Utama</span>
                <h3>Pendataan Golongan Darah</h3>
                <p>[Deskripsi singkat 1–2 kalimat tentang proker ini dan manfaatnya bagi warga desa.]</p>
                <a href="proker-2.html" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge pendukung">Proker Pendukung</span>
                <h3>Rangkaian Kegiatan Hari Anak Nasional</h3>
                <p>[Deskripsi singkat 1–2 kalimat tentang proker ini dan manfaatnya bagi warga desa.]</p>
                <a href="proker-3.html" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Perjalanan</span>
            <h2>Lini masa kegiatan</h2>
            <p>Sekilas rangkaian kegiatan kami dari awal hingga akhir masa KKN.</p>
          </div>
          <div className="reveal" style={{
            textAlign: "left"
          }}>
            <a href="timeline.html" className="btn btn-primary">Lihat Timeline Lengkap</a>
          </div>
        </div >
      </section >

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
                [Nama Universitas] — [Nama Desa, Kecamatan, Kabupaten].</p>
              <div className="foot-logos">
                <img src="img/logo-univ.png" alt="Logo Universitas" />
                <img src="img/logo-kkn.png" alt="Logo Kelompok KKN" />
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
          <div className="foot-bottom">© [Tahun] KKN [Nama Desa]. Dibuat untuk keperluan dokumentasi pengabdian masyarakat.
          </div>
        </div>
      </footer >
    </>
  )
}

export default App
