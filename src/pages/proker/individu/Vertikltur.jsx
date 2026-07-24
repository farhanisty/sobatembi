import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";
export default function Vertikultur() {
  const proker = {
    type: "individu",
    name: "Sosialisasi dan Pelatihan Budidaya Sayuran Sistem Vertikultur Berbahan Botol Plastik Bekas",
    time: "Minggu, 19 Juli 2026",
    target: "RT 07",
    responsibles: ["Alifa Hanna Safitri"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "03 Juli 2026",
      title: "Penyemaian Benih.",
    },
    {
      date: "19 Juli 2026",
      title: "Pelaksanaan Program Kerja Vertikultur",
      description: "Dilaksanakan di Kelurahan Timbulharjo.",
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker} />

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h2>
              Apa itu Vertikultur?
            </h2>
            <p>
              Vertikultur adalah cara menanam tanaman dengan menyusun media tanam secara bertingkat atau vertikal. Metode ini cocok diterapkan di pekarangan rumah yang lahannya terbatas karena tidak membutuhkan banyak ruang. Pada kegiatan ini, media vertikultur dibuat dari botol plastik bekas sehingga selain dimanfaatkan untuk menanam sayuran, botol yang sebelumnya menjadi limbah juga dapat digunakan kembali.
            </p>

            <h2>Manfaat Kegiatan</h2>
            <p>
              Melalui kegiatan ini, masyarakat diajak untuk memanfaatkan pekarangan rumah agar lebih produktif dengan menanam sayuran sendiri. Selain itu, peserta juga belajar memanfaatkan botol plastik bekas menjadi media tanam yang bermanfaat. Harapannya, masyarakat dapat memenuhi sebagian kebutuhan sayuran sehari-hari, mengurangi sampah plastik, serta menciptakan lingkungan yang lebih hijau.
            </p>

            <h2>Pelaksanaan</h2>
            <p>Kegiatan diawali dengan penyampaian materi mengenai pengertian vertikultur, manfaat, jenis tanaman yang sesuai, alat dan bahan, serta tahapan pembuatannya. Setelah sesi sosialisasi, peserta mengikuti praktik langsung membuat media vertikultur berbahan botol plastik bekas, mulai dari proses melubangi dan merangkai botol, mengisi media tanam, hingga menanam bibit sayuran. Melalui kegiatan ini, peserta memperoleh pengalaman langsung sehingga diharapkan mampu menerapkan budidaya vertikultur secara mandiri di pekarangan rumah masing-masing.</p>

            <h2>Timeline</h2>
            <Timeline timelines={timelines} />
          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              < div className="g-item">Foto 1</div>
              <div className="g-item">Foto 2</div>
            </div>

            <div className="gallery-grid">
              < div className="g-item">Foto 1</div>
              <div className="g-item">Foto 2</div>
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
