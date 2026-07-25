import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { prokers } from "../repository/prokers";
import FotoSIGDIndividu from "../assets/proker/individu/sigd/1.png"
import FotoSumur from "../assets/proker/individu/sumur/banner.jpg"
import BannerVertikultur from "../assets/proker/individu/vertikultur/banner.jpeg"
import BannerCeria from "../assets/proker/individu/ceria/banner.jpeg"
import BannerBencana from "../assets/proker/individu/bencana/banner.jpeg"
import BannerVisualBooster from "../assets/proker/individu/visual-booster/banner.jpeg"
import BannerSumur from "../assets/proker/individu/sumur/banner.jpeg"
import BannerSabun from "../assets/proker/individu/sabun/banner.jpeg"
import BannerGemas from "../assets/proker/individu/gemas/banner.jpeg"

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
                  <div className="thumb"><img src={proker.image} /></div>
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
              <div className="thumb"><img src={BannerVertikultur} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Vertikultur</h3>
                <p>Budidaya tanaman secara vertikal/bertingkat yang memanfaatkan lahan sempit.</p>
                <a href="/proker/individu/vertikultur" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerVisualBooster} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Visual Booster UMKM</h3>
                <p>Meningkatkan branding UMKM Desa Tembi melalui pembuatan logo, banner, dan pricelist yang profesional dan menarik.</p>
                <a href="/proker/individu/visual-booster-umkm" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb"><img src={FotoSIGDIndividu} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Sistem Informasi Golongan Darah Tembi</h3>
                <p style={{ textAling: "justify" }}>Melakukan digitalisasi dan pemetaan data golongan darah warga desa secara terintegrasi.</p>
                <a href="/proker/individu/sistem-informasi-golongan-darah" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>

          <div style={{ marginTop: "1.5rem" }} className="grid-cards" data-stagger>
            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerSumur} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Pengujian Kualitas Air Sumur</h3>
                <p>Melakukan pengujian kualitas air sumur sebagai penilaian awal kelayakan air minum bagi masyarakat.</p>
                <a href="/proker/individu/uji-kualitas-air-sumur" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerSabun} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Pembuatan Sabun Natural</h3>
                <p>[Deskripsi singkat proker.]</p>
                <a href="/proker/individu/visual-booster-umkm" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerBencana} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>Pembuatan Peta Rawan Bencana Berbasis Sistem Informasi Geografis</h3>
                <p style={{ textAling: "justify" }}>Menyajikan peta rawan bencana sebagai media edukasi dan mitigasi masyarakat Tembi.</p>
                <a href="/proker/individu/ceria" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>

          <div style={{ marginTop: "1.5rem" }} className="grid-cards" data-stagger>
            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerCeria} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>
                  CERIA: Edukasi Gunung Berapi Melalui Simulasi Letusan untuk Anak TK
                </h3>
                <p>Program CERIA mengenalkan gunung berapi kepada anak TK melalui materi, simulasi letusan, dan kuis interaktif.</p>
                <a href="/proker/individu/ceria" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="card-proker reveal">
              <div className="thumb"><img src={BannerGemas} /></div>
              <div className="body">
                <span className="badge individu">Proker Individu</span>
                <h3>GEMAS: Sosialisasi Gemar Menabung Sejak Dini</h3>
                <p>
                  Edukasi menabung bagi anak TK melalui penyampaian materi interaktif dan kegiatan mewarnai celengan.
                </p>
                <a href="/proker/individu/gemas" className="card-link">Lihat detail <span className="arrow">→</span></a>
              </div>
            </article>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}
