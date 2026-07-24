import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
export default function Vertikultur() {
  const proker = {
    type: "individu",
    name: "Vertikultur",
    time: "Minggu, 19 Juli 2026",
    target: "RT 07",
    responsibles: ["Alifa Hanna"],
    status: "Selesai"
  }

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker} />

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h2>Latar Belakang</h2>
            <p>[Jelaskan masalah atau kebutuhan di desa yang melatarbelakangi proker ini. 2–4 kalimat.]</p>

            <h2>Tujuan</h2>
            <ul>
              <li>[Tujuan 1]</li>
              <li>[Tujuan 2]</li>
              <li>[Tujuan 3]</li>
            </ul>

            <h2>Pelaksanaan</h2>
            <p>[Ceritakan bagaimana kegiatan berlangsung — metode, tahapan, keterlibatan warga, kendala jika ada.]</p>

            <h2>Hasil & Dampak</h2>
            <p>[Jelaskan hasil konkret dari proker ini dan dampaknya bagi warga desa.]</p>
          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              < div className="g-item">Foto 1</div>
              <div className="g-item">Foto 2</div>
              <div className="g-item">Foto 3</div>
              <div className="g-item">Foto 4</div>
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
