import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Foto1 from "../../../assets/proker/utama/hari-anak/1.jpeg"
import Foto2 from "../../../assets/proker/utama/hari-anak/2.jpeg"
import Foto3 from "../../../assets/proker/utama/hari-anak/3.jpeg"
import Foto4 from "../../../assets/proker/utama/hari-anak/4.jpeg"
import Foto5 from "../../../assets/proker/utama/hari-anak/5.jpeg"
import Foto6 from "../../../assets/proker/utama/hari-anak/6.jpeg"
import Foto7 from "../../../assets/proker/utama/hari-anak/7.jpeg"
import Foto8 from "../../../assets/proker/utama/hari-anak/8.jpeg"

import Banner from "../../../assets/proker/utama/hari-anak/banner.jpeg"
import Timeline from "../../../components/Timeline";

export default function HariAnakNasional() {
  const proker = {
    type: "utama",
    name: "Hari Anak Nasional",
    time: "10 & 18 Juli 2026",
    target: "Anak-anak di Tembi",
    responsibles: ["Seluruh Anggota"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "10 Juli 2026",
      title: "Memulai Rangkaian Proker Utama Hari Anak Nasional",
      description: "Rangkaian berisi games islami dengan total 3 games, disertakan pula hadiah yang menarik",
    },
    {
      date: "11 Juli 2026",
      title: "Kegiatan Sanggar Tari dan Rapat Terkait Acara Hari Anak Nasional",
      description: "Rapat dilaksanakan pada Kuliner Tembi",
    },
    {
      date: "15 Juli 2026",
      title: "Menyiapkan Proker Hari Anak Nasional",
      description: "Membeli hadiah dan perlengkapan lomba",
    },
    {
      date: "16 Juli 2026",
      title: "Melaksanakan TPA dan Gladi Kotor Pentas Seni Rangkaian Hari Anak Nasional",
      description: "Menawarkan lomba pada anak-anak TPA",
    },
    {
      date: "17 Juli 2026",
      title: "Melaksanakan Gladi Bersih dan Menyiapkan Hadiah untuk Pemenang Lomba Hari Anak Nasional",
      description: "",
    },
    {
      date: "18 Juli 2026",
      title: "Persiapan Bersih Hari Anak Nasional",
      description: "Menyiapkan sound system, tempat, layout, dll di Tembi Kuliner",
    },
    {
      date: "18 Juli 2026",
      title: "Pelaksanaan Hari Anak Nasional",
      description: "",
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker}>
        <img src={Banner} alt="" />
      </ProkerHero>

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h2>Latar Belakang</h2>
            <p>
              Anak merupakan generasi penerus bangsa yang memiliki peran penting dalam pembangunan di masa depan. Oleh karena itu, tumbuh kembang anak perlu didukung melalui lingkungan yang aman, sehat, serta memberikan kesempatan bagi mereka untuk belajar, berkreasi, dan bersosialisasi. Peringatan Hari Anak Nasional menjadi salah satu momentum untuk meningkatkan perhatian terhadap hak-hak anak sekaligus mendorong perkembangan karakter, kreativitas, dan rasa percaya diri melalui berbagai kegiatan yang edukatif dan menyenangkan.
            </p>

            <p>
              Di Desa Tembi, anak-anak memiliki potensi yang besar untuk berkembang apabila diberikan ruang untuk berekspresi dan berpartisipasi dalam kegiatan positif. Namun, kesempatan untuk mengikuti kegiatan yang menggabungkan unsur edukasi, kreativitas, dan kebersamaan masih perlu terus ditingkatkan. Kegiatan yang melibatkan anak-anak secara aktif tidak hanya memberikan hiburan, tetapi juga mampu menumbuhkan nilai-nilai kerja sama, sportivitas, keberanian, serta semangat belajar sejak usia dini.
            </p>

            <p>
              Melalui program kerja Peringatan Hari Anak Nasional, mahasiswa KKN menyelenggarakan berbagai kegiatan yang bersifat edukatif, kreatif, dan interaktif sebagai sarana untuk merayakan Hari Anak Nasional bersama anak-anak di Desa Tembi. Kegiatan ini diharapkan dapat menciptakan pengalaman belajar yang menyenangkan, meningkatkan kreativitas dan rasa percaya diri anak, serta mempererat hubungan antara anak-anak, masyarakat, dan mahasiswa KKN. Dengan adanya kegiatan ini, diharapkan anak-anak Desa Tembi dapat tumbuh menjadi generasi yang aktif, kreatif, dan berkarakter serta semakin termotivasi untuk mengembangkan potensi yang dimiliki.
            </p>

            <h2>Pelaksanaan</h2>
            <p>
              Program Hari Anak Nasional dilaksanakan dalam dua rangkaian kegiatan yang bertujuan memberikan ruang bagi anak-anak Desa Tembi untuk belajar, berkompetisi, serta menampilkan kreativitas dan bakat yang dimiliki.
            </p>

            <p>
              Rangkaian pertama dilaksanakan pada 10 Juli 2026 di Taman Pendidikan Al-Qur'an (TPA) melalui penyelenggaraan Games Islami yang dikemas dalam bentuk perlombaan. Anak-anak mengikuti berbagai permainan edukatif yang menguji pengetahuan keislaman, kerja sama, dan ketangkasan. Pada akhir kegiatan dilakukan penilaian untuk menentukan para pemenang sebagai bentuk apresiasi atas semangat dan partisipasi anak-anak dalam mengikuti perlombaan.
            </p>

            <p>
              Rangkaian kedua dilaksanakan pada 18 Juli 2026 dan melibatkan seluruh anak-anak di Desa Tembi. Pada pagi hari, diselenggarakan lomba menggambar dan kolase yang bertujuan mengembangkan kreativitas, imajinasi, serta kemampuan berekspresi melalui karya seni. Selanjutnya, pada malam hari, kegiatan dilanjutkan dengan pentas seni sebagai wadah bagi anak-anak untuk menampilkan bakat dan kemampuan mereka di hadapan orang tua, masyarakat, serta mahasiswa KKN dalam suasana yang meriah.
            </p>

            <p>
              Selama pelaksanaan kegiatan, anak-anak menunjukkan antusiasme yang tinggi dalam mengikuti setiap rangkaian acara. Dukungan dari orang tua, pengurus TPA, pemerintah desa, dan masyarakat turut menciptakan suasana yang kondusif sehingga seluruh kegiatan dapat berjalan dengan lancar dan penuh kebersamaan.
            </p>
            <p>
              Melalui kegiatan Hari Anak Nasional, diharapkan anak-anak Desa Tembi memperoleh pengalaman yang menyenangkan sekaligus bermanfaat dalam meningkatkan kreativitas, rasa percaya diri, sportivitas, dan kemampuan bersosialisasi. Selain itu, kegiatan ini juga diharapkan dapat mempererat hubungan antara anak-anak, masyarakat, dan mahasiswa KKN serta mendorong terciptanya lingkungan yang mendukung tumbuh kembang anak secara optimal.
            </p>

            <h2>Timeline</h2>
            <Timeline timelines={timelines} />
          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>

            <div className="gallery-grid">
              <img src={Foto2} />
            </div>

            <div className="gallery-grid">
              <img src={Foto1} />
              <img src={Foto5} />
            </div>

            <div className="gallery-grid">
              <img src={Foto3} />
            </div>

            <div className="gallery-grid">
              <img src={Foto6} />
              <img src={Foto7} />
              <img src={Foto8} />
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
