import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Banner from "../../../assets/proker/pendukung/posyandu/banner.jpeg"

export default function GotongRoyong() {
  const proker = {
    type: "pendukung",
    name: "Pendampingan POSYANDU",
    time: "8 Juli 2026",
    target: "Warga Tembi",
    responsibles: ["Seluruh Anggota"],
    status: "Selesai"
  }

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
              Posyandu merupakan salah satu bentuk pelayanan kesehatan berbasis masyarakat yang berperan penting dalam meningkatkan derajat kesehatan, khususnya bagi ibu hamil, ibu menyusui, bayi, dan balita. Melalui kegiatan Posyandu, masyarakat dapat memperoleh berbagai layanan kesehatan, seperti pemantauan pertumbuhan dan perkembangan balita, penimbangan berat badan, imunisasi, pemberian vitamin, serta penyuluhan kesehatan. Oleh karena itu, pelaksanaan Posyandu yang rutin dan optimal sangat diperlukan untuk mendukung terciptanya masyarakat yang sehat.
            </p>

            <p>
              Di Desa Tembi, kegiatan Posyandu dilaksanakan secara rutin setiap tanggal 8 pada setiap bulannya sebagai upaya menjaga kesehatan ibu dan anak. Kegiatan ini menjadi sarana penting bagi masyarakat untuk memantau tumbuh kembang balita serta memperoleh pelayanan kesehatan dasar secara berkala. Agar seluruh rangkaian kegiatan dapat berjalan dengan tertib dan lancar, diperlukan dukungan dari berbagai pihak, termasuk mahasiswa KKN yang turut berpartisipasi membantu pelaksanaan Posyandu bersama kader dan tenaga kesehatan.
            </p>

            <p>
              Melalui program Pendampingan Posyandu, mahasiswa KKN berperan dalam membantu berbagai kegiatan pelayanan, seperti proses pendaftaran peserta, penimbangan dan pengukuran balita, pencatatan hasil pemeriksaan, serta mendukung kelancaran pelaksanaan kegiatan bersama kader Posyandu. Program ini diharapkan dapat meningkatkan kualitas pelayanan kesehatan di Desa Tembi, memperkuat kolaborasi antara mahasiswa dan masyarakat, serta meningkatkan kesadaran masyarakat akan pentingnya mengikuti Posyandu secara rutin. Dengan adanya pendampingan ini, kegiatan Posyandu yang dilaksanakan setiap bulan diharapkan dapat berlangsung lebih efektif, tertib, dan memberikan manfaat yang optimal bagi ibu, balita, serta masyarakat Desa Tembi.
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
              Program Pendampingan Posyandu dilaksanakan pada tanggal 8 sesuai dengan jadwal rutin Posyandu di Desa Tembi. Mahasiswa KKN turut berpartisipasi membantu kader Posyandu dan tenaga kesehatan dalam berbagai rangkaian pelayanan kesehatan bagi ibu dan balita agar kegiatan dapat berlangsung dengan tertib, efektif, dan lancar.
            </p>

            <p>
              Selama pelaksanaan kegiatan, mahasiswa membantu proses penimbangan berat badan, pengukuran tinggi badan, pengukuran lingkar kepala, lingkar lengan atas (LILA), serta pemeriksaan fisik dasar lainnya sesuai dengan prosedur yang telah ditetapkan. Selain itu, mahasiswa juga membantu proses administrasi dengan mengisi Buku Kesehatan Ibu dan Anak (Buku KIA) berdasarkan hasil pemeriksaan yang telah dilakukan oleh tenaga kesehatan.
            </p>

            <p>
              Melalui keterlibatan tersebut, mahasiswa memperoleh pengalaman dalam mendukung pelayanan kesehatan masyarakat sekaligus membantu meringankan tugas kader Posyandu selama kegiatan berlangsung. Kehadiran tim KKN juga diharapkan dapat meningkatkan efektivitas pelayanan sehingga seluruh peserta Posyandu memperoleh layanan yang lebih optimal.
            </p>

            <p>
              Program Pendampingan Posyandu diharapkan dapat mendukung kelancaran pelayanan kesehatan di Desa Tembi, meningkatkan kesadaran masyarakat untuk mengikuti Posyandu secara rutin, serta berkontribusi dalam pemantauan tumbuh kembang balita dan kesehatan ibu secara berkelanjutan.
            </p>


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
