import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Banner from "../../../assets/proker/utama/goldar/banner.jpeg"
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/utama/goldar/1.jpeg"
import Foto2 from "../../../assets/proker/utama/goldar/2.jpeg"
import Foto3 from "../../../assets/proker/utama/goldar/3.jpeg"
import Foto4 from "../../../assets/proker/utama/goldar/4.jpeg"

export default function SIGDTembi() {
  const proker = {
    type: "utama",
    name: "Pendataan Golongan Darah Dusun Tembi",
    time: "12 - 26 Juli 2026",
    target: "Warga Tembi",
    responsibles: ["Seluruh Anggota"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "07 Juli 2026",
      title: "Pendataan Golongan Darah",
      description: "Pendataan dilakukan di RT-03 dan RT-04",
    },
    {
      date: "08 Juli 2026",
      title: "Melanjutkan Proker Utama Pendataan Golongan Darah",
      description: "Pendataan dilakukan di RT-02, RT-05, dan RT-06",
    },
    {
      date: "09 Juli 2026",
      title: "Melanjutkan Proker Utama Pendataan Golongan Darah",
      description: "Pendataan dilakukan di RT-08",
    },
    {
      date: "10 Juli 2026",
      title: "Melanjutkan Proker Utama Pendataan Golongan Darah",
      description: "Pendataan dilakukan pada RT-01",
    },
    {
      date: "14 Juli 2026",
      title: "Melanjutkan Penginputan Golongan Darah",
      description: "Penginputan data ke website yang telah dibuat",
    },
    {
      date: "21 Juli 2026",
      title: "Penginputan Golongan Darah",
      description: "Penginputan data ke website yang telah dibuat",
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
              Kesehatan merupakan salah satu aspek penting dalam meningkatkan kualitas hidup masyarakat. Salah satu informasi dasar yang perlu diketahui oleh setiap individu adalah golongan darah, karena informasi tersebut sangat dibutuhkan dalam berbagai kondisi, terutama saat terjadi keadaan darurat yang memerlukan transfusi darah atau penanganan medis secara cepat. Namun, masih terdapat sebagian masyarakat yang belum mengetahui atau belum memiliki data golongan darah yang terdokumentasi dengan baik.
            </p>

            <p>
              Di Desa Tembi, pendataan golongan darah masyarakat belum dilakukan secara menyeluruh sehingga informasi mengenai golongan darah belum tersedia secara lengkap. Kondisi ini dapat menjadi kendala ketika dibutuhkan data secara cepat untuk keperluan pelayanan kesehatan, kegiatan sosial, maupun situasi darurat yang membutuhkan donor darah. Oleh karena itu, diperlukan upaya untuk menghimpun dan mendokumentasikan data golongan darah masyarakat secara lebih sistematis.
            </p>

            <p>
              Melalui program kerja Pendataan Golongan Darah, dilakukan pendataan informasi golongan darah masyarakat sebagai upaya mendukung tersedianya basis data kesehatan di Desa Tembi. Kegiatan ini diharapkan dapat membantu masyarakat mengetahui dan memastikan golongan darah yang dimiliki, sekaligus memudahkan pemerintah desa maupun tenaga kesehatan dalam memperoleh informasi yang diperlukan apabila terjadi kondisi darurat atau pelaksanaan kegiatan kesehatan di kemudian hari. Dengan adanya pendataan yang tertata dengan baik, diharapkan pelayanan kesehatan di Desa Tembi dapat menjadi lebih cepat, tepat, dan efektif.
            </p>

            <h2>
              Tujuan
            </h2>

            <ul>
              <li>Mendata golongan darah masyarakat Desa Tembi secara akurat dan terorganisir.</li>

              <li>Meningkatkan kesadaran masyarakat akan pentingnya mengetahui golongan darah.</li>

              <li>Mendukung pelayanan kesehatan dan penanganan keadaan darurat melalui ketersediaan data golongan darah.</li>

            </ul>

            <h2>Pelaksanaan</h2>
            <p>
              Program Pendataan Golongan Darah dilaksanakan dengan metode door to door ke rumah-rumah warga di Desa Tembi. Kegiatan diawali dengan mendatangi masyarakat secara langsung untuk menyampaikan tujuan program sekaligus melakukan pendataan informasi golongan darah. Pendekatan ini dilakukan agar proses pendataan dapat menjangkau lebih banyak warga serta memudahkan masyarakat dalam memberikan informasi yang diperlukan.
            </p>

            <p>
              Dalam pelaksanaannya, tim KKN memberikan dua alternatif kepada masyarakat. Alternatif pertama, formulir pendataan dapat langsung diisi bersama tim KKN saat kunjungan berlangsung. Alternatif kedua, formulir dapat dibawa pulang dan dikumpulkan melalui Ketua RT dalam batas waktu yang telah ditentukan. Mekanisme ini diterapkan untuk memberikan fleksibilitas kepada masyarakat sehingga proses pendataan dapat berjalan lebih efektif dan sesuai dengan kondisi masing-masing warga.
            </p>

            <p>
              Selama kegiatan berlangsung, masyarakat menunjukkan respons yang baik dengan berpartisipasi dalam pengisian data golongan darah. Kerja sama antara tim KKN, masyarakat, dan Ketua RT turut mendukung kelancaran proses pendataan sehingga data yang terkumpul dapat terdokumentasi dengan lebih rapi dan terorganisir.
            </p>

            <p>
              Melalui kegiatan ini, diharapkan data golongan darah masyarakat Desa Tembi dapat dimanfaatkan sebagai informasi pendukung bagi pemerintah desa dan tenaga kesehatan dalam meningkatkan pelayanan kesehatan serta membantu penanganan keadaan darurat yang memerlukan informasi golongan darah secara cepat dan akurat.
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
            </div>

            <div className="gallery-grid">
              <img src={Foto3} />
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
