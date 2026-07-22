import Footer from "../components/Footer"
import MemberCard from "../components/MemberCard"
import Navbar from "../components/Navbar"
import { members } from "../repository/members"

export default function Tentang() {
  return (
    <>
      <Navbar active="tentang" />
      <header className="hero" style={{
        minHeight: "56vh"
      }}>
        <div className="hero-blob b1"></div >
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Tentang Kami</span>
            <h1>Mengenal lebih dekat <span className="accent">kelompok</span> dan lokasi KKN kami.</h1>
            <p className="lead">Sekilas tentang desa tempat kami mengabdi dan tim yang menjalankannya.</p>
          </div>
        </div>
      </header >

      <section style={{ paddingTop: 20 }} >
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Lokasi</span>
            <h2>Profil Desa Tembi</h2>
          </div>
          <div className="prose reveal">
            <p>Desa Wisata Tembi terletak di Kalurahan Timbulharjo, Kapanewon Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Secara geografis, desa ini didominasi oleh hamparan sawah yang asri serta lingkungan pedesaan khas Jawa yang masih terawat dengan baik. Sebagian besar warga Tembi menggantungkan hidupnya dari sektor pertanian, kerajinan tangan, dan pengelolaan pariwisata berbasis budaya serta edukasi. Potensi besar ini menjadikan Tembi sebagai tempat yang sangat ideal untuk pengembangan program berbasis pemajuan UMKM lokal, pelestarian budaya, hingga digitalisasi pariwisata.</p>
            <ul>
              <li><strong>Kecamatan:</strong> Sewon</li>
              <li><strong>Kabupaten:</strong> Bantul</li>
              <li><strong>Periode KKN:</strong> 1 – 30 Juli 2026</li>
              <li><strong>Tema KKN:</strong> PEMBERDAYAAN MASYARAKAT BERBASIS KESEHATAN, PENGELOLAAN LINGKUNGAN, DAN DIGITALISASI UMKM</li>
            </ul>
          </div>
        </div>
      </section >

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Tim</span> <h2>Anggota Kelompok</h2>
          </div>
          <div className="team-grid" data-stagger>
            {members.map((member, index) => {
              return <MemberCard key={index} member={member} />
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
