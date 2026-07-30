import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Foto1 from "../../../assets/proker/individu/visual-booster/1.jpeg"
import Foto2 from "../../../assets/proker/individu/visual-booster/2.jpeg"
import Foto3 from "../../../assets/proker/individu/visual-booster/3.jpeg"
import Foto4 from "../../../assets/proker/individu/visual-booster/4.jpeg"

import Banner from "../../../assets/proker/individu/visual-booster/banner.jpeg"

import Timeline from "../../../components/Timeline";

export default function VisualBooster() {
  const proker = {
    type: "individu",
    name: "Visual Booster UMKM",
    time: "02 - 25 Juli 2026",
    target: "RT 02, 04, dan 06.",
    responsibles: ["Erina Dyah Sukmawati", "Aulia Risky Febriyanti"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "02 - 06 Juli 2026",
      title: "Survei dan Pendataan UMKM",
      description: "Dilakukan survei langsung ke UMKM di Desa Tembi untuk mengidentifikasi pelaku usaha yang belum memiliki logo, banner, maupun pricelist menu. Pada tahap ini juga dilakukan pendataan kebutuhan visual serta pengambilan nomor kontak UMKM untuk memudahkan proses konsultasi desain",
    },
    {
      date: "14 – 21 Juli 2026",
      title: "Pembuatan Desain dan Proses Percetakan",
      description: "Tim menyusun desain logo, banner, dan pricelist menu sesuai identitas masing- masing UMKM.Selama proses berlangsung, dilakukan konsultasi dengan pemilik usaha untuk memperoleh masukan dan persetujuan desain sebelum seluruh media visual dikirim ke percetakan.",
    },
    {
      date: "24 – 25 Juli 2026",
      title: "Penyerahan dan Pemasangan Visual Booster",
      description: "Media promosi yang telah selesai dicetak diserahkan kepada masing-masing pelaku UMKM di Desa Tembi. Selanjutnya dilakukan pemasangan banner di lokasi usaha agar dapat langsung digunakan sebagai media promosi sekaligus memperkuat identitas visual UMKM.",
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker} >
        <img src={Banner} alt="" />
      </ProkerHero>

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h2>Latar Belakang</h2>
            <p>
              Dalam era digital dan persaingan usaha yang semakin ketat, identitas visual yang menarik menjadi salah satu faktor penting dalam meningkatkan daya saing UMKM. Namun, masih banyak pelaku UMKM di Desa Tembi yang belum memiliki media promosi seperti logo, banner, maupun daftar harga (pricelist) yang profesional, sehingga informasi produk kurang menarik dan belum mampu menjangkau lebih banyak konsumen.
            </p>
            <p>
              Melalui program Visual Booster UMKM di Desa Tembi, dilakukan pendampingan dalam pembuatan logo, banner, dan pricelist menu sebagai upaya meningkatkan kualitas branding dan promosi usaha. Dengan adanya media visual yang lebih menarik, informatif, dan profesional, UMKM di Desa Tembi diharapkan mampu memperkuat identitas usahanya, meningkatkan kepercayaan pelanggan, memperluas jangkauan pemasaran, serta menarik lebih banyak calon konsumen.
            </p>

            <h2>Tujuan</h2>
            <ul>
              <li>
                Meningkatkan kualitas branding UMKM di Desa Tembi melalui media visual yang menarik.
              </li>
              <li>
                Membantu UMKM memiliki logo, banner, dan pricelist menu yang profesional.
              </li>
              <li>
                Meningkatkan daya tarik promosi serta memperkuat daya saing UMKM di Desa Tembi.
              </li>
            </ul>

            <h2>Pelaksanaan</h2>
            <p>
              Program Visual Booster UMKM diawali dengan survei langsung ke beberapa UMKM di Desa Tembi untuk mengidentifikasi kebutuhan media promosi, khususnya UMKM yang belum memiliki logo, banner, maupun pricelist menu. Setelah survei, tim meminta nomor kontak pelaku UMKM sebagai sarana konsultasi terkait konsep, desain, dan informasi yang akan dicantumkan pada media promosi.
            </p>

            <p>
              Tahap selanjutnya adalah proses perancangan desain logo, banner, dan pricelist menu yang disesuaikan dengan identitas serta kebutuhan masing-masing UMKM. Setelah desain memperoleh persetujuan dari pemilik usaha, banner dan pricelist dicetak, kemudian dilakukan penyerahan sekaligus pemasangan banner di lokasi usaha agar dapat langsung dimanfaatkan sebagai media promosi.
            </p>

            <p>
              Selama pelaksanaan kegiatan, pelaku UMKM di Desa Tembi berpartisipasi secara aktif dengan memberikan masukan mengenai desain dan isi media promosi. Antusiasme yang tinggi dari para pelaku UMKM turut mendukung kelancaran program sehingga proses konsultasi hingga pemasangan banner dapat berjalan dengan baik.
            </p>

            <p>
              Secara keseluruhan, tidak terdapat kendala yang berarti selama pelaksanaan program. Seluruh tahapan kegiatan dapat terlaksana sesuai dengan rencana berkat kerja sama yang baik antara tim KKN dan pelaku UMKM di Desa Tembi.
            </p>

            <h2>Timeline</h2>
            <Timeline timelines={timelines} />
          </div>



          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <span style={{ color: "var(--goldenrod)", fontWeight: 800 }}>Desain Pricelist Menu.</span>
            <div className="gallery-grid">
              <img src={Foto1} />
            </div>

            <span style={{ color: "var(--goldenrod)", fontWeight: 800 }}>Desain Logo.</span>
            <div className="gallery-grid">
              <img src={Foto2} />
            </div>

            <span style={{ color: "var(--goldenrod)", fontWeight: 800 }}>Desain Banner.</span>
            <div className="gallery-grid">
              <img src={Foto3} />
            </div>

            <span style={{ color: "var(--goldenrod)", fontWeight: 800 }}>Penyerahan Visual Booster kepada UMKM.</span>
            <div className="gallery-grid">
              <img src={Foto4} />
            </div>
          </div>

          <div className="detail-nav reveal">
            <a href="/proker" className="btn btn-outline">← Semua Proker</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
