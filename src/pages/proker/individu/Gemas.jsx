import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/individu/sigd/1.png"
import Foto2 from "../../../assets/proker/individu/sigd/2.png"
import Foto3 from "../../../assets/proker/individu/sigd/3.png"
import Foto4 from "../../../assets/proker/individu/sigd/4.png"
import Foto5 from "../../../assets/proker/individu/sigd/5.png"
import Banner from "../../../assets/proker/individu/ceria/banner.jpeg"

export default function Gemas() {
  const proker = {
    type: "individu",
    name: "CERIA (Cermat, Riang, Interaktif, dan Aktif): Edukasi Gunung Berapi Melalui Simulasi Letusan untuk Anak TK",
    time: "15 - 24 Juli 2026",
    target: "TK Negeri Pembina Bantul",
    responsibles: ["Nauval Akbar Putra P"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "09 Juli 2026",
      title: "Perizinan dan koordinasi dengan pihak TK.",
    },
    {
      date: "10 - 12 Juli 2026",
      title: "Penyusunan materi, pembuatan video edukasi, dan pembuatan miniatur gunung berapi.",
    },
    {
      date: "14 Juli 2026",
      title: "Persiapan hadiah untuk tiga peserta terbaik.",
    },
    {
      date: "15 Juli 2026",
      title: "Finalisasi alat, bahan, dan media pembelajaran.",
    },
    {
      date: "16 Juli 2026",
      title: "Pelaksanaan Proker CERIA.",
      description: "Penyampaian materi, simulasi letusan gunung berapi, sesi tanya jawab, kuis interaktif, dan pemberian hadiah kepada tiga penjawab tercepat."
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker}>
        <img src={Banner} alt="" />
      </ProkerHero >

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h3>Link: <a style={{ color: "#6C8B08" }} href="https://youtube.com" target="_blank">sigd-tembi.vercel.app</a></h3>
            <h2>Latar Belakang</h2>
            <p>
              Kegiatan ini bertujuan mengenalkan konsep dasar gunung berapi kepada anak-anak Taman Kanak-Kanak (TK) melalui simulasi letusan gunung berapi yang sederhana dan aman. Dalam kegiatan ini, tim KKN membuat miniatur gunung berapi dan melakukan percobaan menggunakan bahan-bahan yang aman sehingga anak-anak dapat melihat proses “letusan” secara langsung.
            </p>

            <h2>Tujuan</h2>

            <p>
              Melalui kegiatan ini, anak-anak diajak untuk mengenal penyebab terjadinya gunung meletus, menumbuhkan rasa ingin tahu terhadap fenomena alam, serta meningkatkan kepercayaan diri dengan berani bertanya dan menjawab pertanyaan selama kegiatan berlangsung. Penyampaian materi didukung dengan video edukasi yang menarik agar anak-anak lebih mudah memahami materi.
            </p>

            <h2>Pelaksanaan</h2>
            <p>
              Setelah penyampaian materi dan simulasi selesai, diadakan sesi kuis interaktif. Tiga anak yang paling cepat mengangkat tangan dan menjawab dengan benar mendapatkan apresiasi sebagai bentuk motivasi agar lebih semangat dalam belajar.
            </p>

            <h2>Hasil & Dampak</h2>
            <p>
              Melalui kegiatan ini diharapkan anak-anak memperoleh pengetahuan dasar mengenai gunung berapi, memahami langkah-langkah sederhana untuk menjaga keselamatan saat terjadi bencana, serta semakin berani untuk berpartisipasi aktif dalam proses pembelajaran.
            </p>


            <h2>Timeline</h2>
            <Timeline timelines={timelines} />

          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              <img src={Foto5} />
              <img src={Foto2} />
            </div>

            <div className="gallery-grid">
              <img src={Foto4} />
              <img src={Foto3} />
            </div>

          </div>

          <div className="detail-nav reveal">
            <a href="proker.html" className="btn btn-outline">← Semua Proker</a>
            <a href="/proker/individu/uji-kualitas-air-sumur" className="btn btn-primary">Proker Selanjutnya →</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
