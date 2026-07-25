import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/individu/gemas/1.jpeg"
import Foto2 from "../../../assets/proker/individu/gemas/2.jpeg"
import Foto3 from "../../../assets/proker/individu/gemas/3.jpeg"

import Banner from "../../../assets/proker/individu/gemas/banner.jpeg"

export default function Gemas() {
  const proker = {
    type: "individu",
    name: "GEMAS: Sosialisasi Gemar Menabung Sejak Dini",
    time: "Kamis, 16 Juli 2026",
    target: "TK Negeri Pembina Bantul",
    responsibles: ["Yesa Revina Sungkusara"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "09 Juli 2026",
      title: "Perizinan dan koordinasi dengan pihak TK.",
    },
    {
      date: "11 - 13 Juli 2026",
      title: "Penyusunan materi serta persiapan celengan, alat mewarnai, dan perlengkapan kegiatan.",
    },
    {
      date: "14 - 15 Juli 2026",
      title: "Pengecekan dan finalisasi materi serta seluruh perlengkapan kegiatan.",
    },
    {
      date: "16 Juli 2026",
      title: "Pelaksanaan Proker Gemas.",
      description: "Pelaksanaan Sosialisasi Gemar Menabung Sejak Dini, penyampaian materi, tanya jawab interaktif, dan kegiatan mewarnai celengan bersama anak - anak TK."
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
            <h2>Apa Itu?</h2>
            <p>
              Sosialisasi Gemar Menabung Sejak Dini merupakan kegiatan edukasi yang bertujuan mengenalkan pentingnya menabung kepada anak-anak Taman Kanak-Kanak (TK) melalui penyampaian materi yang sederhana, interaktif, dan menyenangkan. Anak-anak diajak mengenal kebiasaan menyisihkan uang serta memahami manfaat menabung sejak usia dini.
            </p>

            <h2>Manfaat</h2>
            <ul>
              <li>Mengenalkan kebiasaan menabung sejak usia dini.</li>
              <li>Mengajarkan pentingnya menyisihkan uang.</li>
              <li>Menumbuhkan sikap disiplin dan bertanggung jawab.</li>
              <li>Mengembangkan kreativitas anak melalui kegiatan mewarnai.</li>
              <li>Memberikan pengalaman belajar tentang menabung dengan cara yang menyenangkan.</li>
            </ul>

            <h2>Pelaksanaan</h2>
            <p>
              Kegiatan diawali dengan penyampaian materi mengenai pengenalan uang dan pentingnya menabung menggunakan bahasa yang mudah dipahami oleh anak-anak. Penyampaian materi dilakukan secara interaktif melalui tanya jawab sederhana agar anak-anak dapat berpartisipasi aktif.
            </p>

            <p>
              Setelah penyampaian materi, kegiatan dilanjutkan dengan mewarnai celengan bersama. Anak-anak diberikan kesempatan untuk menghias celengan sesuai dengan kreativitas masing-masing. Kegiatan ini menjadi sarana untuk mengenalkan kebiasaan menabung sekaligus mengembangkan kreativitas anak melalui aktivitas yang menyenangkan.
            </p>



            <h2>Timeline</h2>
            <Timeline timelines={timelines} />

          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              <img src={Foto1} />
              <img src={Foto2} />
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
