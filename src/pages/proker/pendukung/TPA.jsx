import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Banner from "../../../assets/proker/pendukung/tpa/banner.jpeg"
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/pendukung/tpa/1.jpeg"
import Foto2 from "../../../assets/proker/pendukung/tpa/2.jpeg"
import Foto3 from "../../../assets/proker/pendukung/tpa/3.jpeg"
import Foto4 from "../../../assets/proker/pendukung/tpa/4.jpeg"

export default function TPA() {
  const proker = {
    type: "pendukung",
    name: "Pendampingan TPA",
    time: "12 - 26 Juli 2026",
    target: "TPA Al-Huda",
    responsibles: ["Seluruh Anggota"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "06 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "07 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "09 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "10 Juli 2026",
      title: "Mengajar TPA dan Memulai Rangkaian Proker Utama Hari Anak Nasional",
      description: "Rangkaian berisi games islami dengan total 3 games, disertakan pula hadiah yang menarik",
    },
    {
      date: "14 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "21 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "23 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
    },
    {
      date: "24 Juli 2026",
      title: "Mengajar TPA di Al-Huda",
      description: "Membantu dalam mengajar mengaji dan kegiatan keagamaan lainnya",
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
            <h2>
              Latar belakang:
            </h2>

            <p>
              Pendidikan agama sejak usia dini memiliki peran penting dalam membentuk karakter, akhlak, dan moral anak. Salah satu wadah yang berperan dalam memberikan pendidikan keagamaan kepada anak-anak adalah Taman Pendidikan Al-Qur'an (TPA). Melalui kegiatan TPA, anak-anak tidak hanya belajar membaca dan memahami Al-Qur'an, tetapi juga dibimbing untuk menerapkan nilai-nilai keislaman dalam kehidupan sehari-hari. Oleh karena itu, keberlangsungan kegiatan TPA perlu didukung melalui pendampingan yang aktif dan berkesinambungan.
            </p>

            <p>
              Di Desa Tembi, kegiatan TPA telah berjalan secara rutin sebagai sarana pembelajaran agama bagi anak-anak. Namun, keterbatasan jumlah pendamping dalam beberapa kegiatan menyebabkan proses pembelajaran memerlukan dukungan tambahan agar dapat berlangsung lebih efektif dan interaktif. Kehadiran mahasiswa KKN diharapkan dapat membantu ustaz dan ustazah dalam mendampingi proses belajar sehingga suasana pembelajaran menjadi lebih menyenangkan dan anak-anak semakin termotivasi untuk mengikuti kegiatan TPA.
            </p>

            <p>
              Melalui program Pendampingan TPA, mahasiswa KKN berpartisipasi dalam mendampingi proses pembelajaran Al-Qur'an, membantu anak-anak dalam membaca dan menghafal surat-surat pendek, serta memberikan motivasi agar lebih semangat dalam belajar. Program ini diharapkan dapat mendukung peningkatan kualitas pembelajaran di TPA sekaligus mempererat hubungan antara mahasiswa KKN dengan masyarakat Desa Tembi. Dengan adanya pendampingan ini, diharapkan anak-anak semakin percaya diri dalam belajar Al-Qur'an, memiliki semangat belajar yang tinggi, serta mampu mengamalkan nilai-nilai keislaman dalam kehidupan sehari-hari.
            </p>


            <h2>
              Tujuan
            </h2>

            <ul>
              <li>Mendukung pembelajaran Al-Qur'an melalui kegiatan pendampingan TPA.</li>

              <li>Meningkatkan semangat dan kemampuan belajar anak-anak di TPA Desa Tembi.</li>

              <li>Membantu menciptakan pembelajaran yang aktif, menyenangkan, dan edukatif.</li>
            </ul>

            <h2>Pelaksanaan</h2>
            <p>
              Program Pendampingan TPA dilaksanakan secara rutin setiap hari Senin hingga Jumat sesuai dengan jadwal kegiatan TPA di Desa Tembi. Mahasiswa KKN hadir sebagai pendamping untuk membantu proses pembelajaran agama bersama ustaz dan ustazah, sehingga kegiatan belajar mengajar dapat berlangsung dengan lebih efektif dan interaktif.
            </p>


            <p>
              Selama pelaksanaan kegiatan, mahasiswa mendampingi anak-anak dalam belajar membaca Al-Qur'an (mengaji) sesuai dengan kemampuan masing-masing. Selain itu, mahasiswa juga membimbing hafalan surat-surat pendek dan doa-doa harian, memberikan motivasi belajar, serta membantu memperbaiki bacaan Al-Qur'an agar lebih baik dan sesuai dengan kaidah tajwid.
            </p>

            <p>
              Pendampingan dilakukan melalui pendekatan yang komunikatif dan menyenangkan sehingga anak-anak merasa nyaman serta lebih antusias mengikuti kegiatan TPA. Mahasiswa juga memberikan perhatian secara langsung kepada anak-anak yang masih mengalami kesulitan dalam membaca maupun menghafal Al-Qur'an, sehingga proses pembelajaran menjadi lebih optimal.
            </p>

            <p>
              Melalui kegiatan Pendampingan TPA, diharapkan anak-anak di Desa Tembi semakin termotivasi untuk belajar Al-Qur'an, meningkatkan kemampuan membaca dan menghafal, serta menumbuhkan kecintaan terhadap nilai-nilai keislaman dalam kehidupan sehari-hari. Selain itu, kegiatan ini juga diharapkan dapat membantu ustaz dan ustazah dalam mendukung kelancaran proses pembelajaran di TPA.
            </p>

            <h2>Timeline</h2>
            <Timeline timelines={timelines} />
          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              <img src={Foto3} />
            </div>

            <div className="gallery-grid">
              <img src={Foto1} />
              <img src={Foto2} />
              <img src={Foto4} />
            </div>
          </div>

          <div className="detail-nav reveal">
            <a href="proker.html" className="btn btn-outline">← Semua Proker</a>
            <a href="proker-2.html" className="btn btn-primary">Proker Selanjutnya →</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
