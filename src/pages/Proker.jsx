import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { prokers } from "../repository/prokers";

export default function Proker() {
  return (
    <>
      <Navbar active="proker" />
      <header className="hero" style={{ minHeight: "50vh" }}>
        <div className="hero-blob b1"></div>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Program Kerja</span>
            <h1>Semua yang kami kerjakan <span className="accent">di desa</span>.</h1>
            <p className="lead">Terbagi menjadi proker utama dan proker pendukung. Klik tiap kartu untuk melihat detail lengkapnya.</p>
          </div>
        </div>
      </header>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">01</span>
            <h2>Proker Utama</h2>
            <p>Program kerja inti yang menjadi fokus utama kelompok selama masa KKN.</p>
          </div>
          {prokers.utama.map((proker, index) => {
            return (
              <div key={index} className="grid-cards" style={{ marginTop: 20 }} data-stagger>
                <article className="card-proker reveal">
                  <div className="thumb">02</div>
                  <div className="body">
                    <span className="badge utama">Proker Utama</span>
                    <h3>{proker.title}</h3>
                    <p>{proker.description}</p>
                    <a href={proker.href} className="card-link">Lihat detail <span className="arrow">→</span></a>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">02</span>
            <h2>Proker Pendukung</h2>
            <p>Kegiatan tambahan yang mendukung jalannya proker utama dan kehidupan warga desa.</p>
          </div>
          <div className="grid-cards" data-stagger>
            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge pendukung">Proker Pendukung</span>
                <h3>[Nama Proker Pendukung 1]</h3>
                <p>[Deskripsi singkat proker.]</p>
                <a href="proker-3.html" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge pendukung">Proker Pendukung</span>
                <h3>[Nama Proker Pendukung 1]</h3>
                <p>[Deskripsi singkat proker.]</p>
                <a href="proker-3.html" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">03</span>
            <h2>Proker Individu</h2>
            <p>Kegiatan tambahan yang mendukung jalannya proker utama dan kehidupan warga desa.</p>
          </div>
          <div className="grid-cards" data-stagger>
            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Vertikultur</h3>
                <p>[Deskripsi singkat proker.]</p>
                <a href="/proker/individu/vertikultur" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Visual Booster UMKM</h3>
                <p>[Deskripsi singkat proker.]</p>
                <a href="/proker/individu/visual-booster-umkm" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb">03</div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Sistem Informasi Golongan Darah Tembi</h3>
                <p>Adalah Pokoknya</p>
                <a href="/proker/individu/sistem-informasi-golongan-darah" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
