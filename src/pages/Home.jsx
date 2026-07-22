import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProkerCard from "../components/ProkerCard"
import Timeline from "../components/Timeline"

export default function Home() {
  const timelines = [
    {
      date: "01 Juli 2026",
      title: "Pelepasan KKN",
    },
    {
      date: "10 Juli 2026",
      title: "Rangkaian Kegiatan 'Hari Anak Nasional' #1",
      description: "Lomba keagamaan dengan anak TPA.",
      badge: "utama"
    },
    {
      date: "12 Juli 2026",
      title: "Pelaksanaan Proker Biopori",
      badge: "utama"
    },
    {
      date: "18 Juli 2026",
      title: "Rangkaian Kegiatan 'Hari Anak Nasional' #2",
      description: "Lomba mewarnai dan kolase yang dilaksanakan kolaborasi dengan sanggar tari.",
      badge: "utama"
    },
    {
      date: "31 Juli 2026",
      title: "Penarikan KKN",
      description: "Dilaksanakan di Kelurahan Timbulharjo.",
    },
  ];

  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-blob b1"></div>
        <div className="hero-blob b2"></div>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">KKN UPNYK AB 84.022</span>
            <h1>Membangun <span className="accent">Tembi</span> lewat kerja nyata mahasiswa.</h1>
            <p className="lead">Dokumentasi program kerja kelompok KKN kami di Dusun Tembi, Timbulharjo, Sewon, Bantul.</p>
            <div className="hero-actions">
              <a href="/proker" className="btn btn-primary">Lihat Program Kerja</a>
              <a href="/tentang" className="btn btn-outline">Tentang Kelompok Kami</a>
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
            <ProkerCard
              title="Pembuatan Biopori"
              description="adalah pokoknya"
              href="proker-1.html"
            />

            <ProkerCard
              title="Pendataan Golongan Darah"
              description="adalah pokoknya"
              href="proker-1.html"
            />

            <ProkerCard
              title="Rangkaian Kegiatan Hari Anak Nasional"
              description="adalah pokoknya"
              href="proker-1.html"
            />
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
          <Timeline timelines={timelines} />
        </div >
      </section >

      <Footer />
    </>
  )
}
