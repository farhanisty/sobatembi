import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/individu/sigd/1.png"
import Foto2 from "../../../assets/proker/individu/sigd/2.png"
import Foto3 from "../../../assets/proker/individu/sigd/3.png"
import Foto4 from "../../../assets/proker/individu/sigd/4.png"
import Foto5 from "../../../assets/proker/individu/sigd/5.png"
import Foto6 from "../../../assets/proker/individu/sigd/6.png"

export default function SIGDTembi() {
  const proker = {
    type: "individu",
    name: "Sistem Informasi Golongan Darah Tembi",
    time: "15 - 24 Juli 2026",
    target: "Warga Tembi",
    responsibles: ["Farhannivta Ramadhana"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "15-17 Juli 2026",
      title: "Pembuatan Web App Input Data",
      description: "Untuk memudahkan kelompok kami dalam menginputkan data form, sebelumnya dibuat aplikasi sederhana yang ditujukan untuk mempermudah input data Form.",
    },
    {
      date: "18 - 22 Juli 2026",
      title: "Input Form ke Database",
      description: "Dilakukan dengan bantuan Web App yang sebelumnya telah dibuat.",
    },
    {
      date: "22 - 24 Juli 2026",
      title: "Developing Sistem Informasi Golongan Darah Tembi",
    },
    {
      date: "24 Juli 2026",
      title: "Hosting SIGD ke Vercel",
      description: "Agar SI dapat diakses oleh pengguna internet, perlu dilakukan hosting.",
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker}>
        <img src={Foto1} alt="" />
      </ProkerHero >

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h3>Link: <a style={{ color: "#6C8B08" }} href="http://10.200.53.135:3000" target="_blank">sigd-tembi.vercel.app</a></h3>
            <h2>Latar Belakang</h2>
            <p>
              Dalam situasi darurat medis, <span style={{ fontWeight: 800 }}>kecepatan menemukan pendonor darah yang cocok adalah kunci keselamatan pasien</span>. Sayangnya, proses pencarian pendonor di tingkat desa sering kali terkendala akibat belum adanya pendataan yang terorganisir.
            </p>
            <p>
              Sistem Informasi Golongan Darah Desa ini hadir sebagai solusi digitalisasi data warga. Dengan sistem ini, persebaran golongan darah dan kesiapan pendonor dapat terdata dengan rapi, memudahkan warga maupun perangkat desa untuk menemukan pendonor siap panggil dalam satu klik saat kondisi kritis terjadi.
            </p>

            <h2>Fitur Utama</h2>
            <ul>
              <li><span style={{ fontWeight: "bold" }}>Pencarian Calon Pendonor Darah</span> — cari berdasarkan RT & golongan darah tanpa perlu login</li>
              <li><span style={{ fontWeight: "bold" }}>Dashboard Statistik Golongan Darah Dusun</span> — visualisasi sebaran golongan darah seluruh warga</li>
              <li><span style={{ fontWeight: "bold" }} >Dashboard Statistik Demografi</span> — grafik jenis kelamin, rentang umur, pendidikan, pekerjaan, status perkawinan, dan sebaran per RT</li>
              <li><span style={{ fontWeight: "bold" }} >Edukasi Donor Darah</span> — syarat, manfaat, dan kompatibilitas golongan darah untuk warga</li>
              <li><span style={{ fontWeight: "bold" }} >Manajemen Data Warga</span> — pengelolaan data kependudukan lengkap (NIK, KK, biodata, dll)</li>
              <li><span style={{ fontWeight: "bold" }} >Detail Profil Warga</span> — informasi lengkap per individu bagi pihak berwenang</li>
              <li><span style={{ fontWeight: "bold" }} >Sistem Login Multi-Role</span> — akses berbeda untuk Guest, Ketua RT, dan Pak Dukuh</li>
              <li><span style={{ fontWeight: "bold" }} >Kelola Akun Ketua RT</span> — Dukuh dapat menambah, mengubah, dan menghapus akun Ketua RT</li>
              <li><span style={{ fontWeight: "bold" }} >Proteksi Privasi Data Warga</span> — data sensitif otomatis tersembunyi dari publik, hanya terbuka untuk RT berwenang</li>
              <li><span style={{ fontWeight: "bold" }} >Akses Data Berbasis Wilayah (RT)</span> — Ketua RT hanya dapat melihat dan mengelola data di RT-nya sendiri</li>
            </ul>

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
            <a href="/proker" className="btn btn-outline">← Semua Proker</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
