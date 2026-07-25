import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Banner from "../../../assets/proker/pendukung/gotong-royong/banner.jpeg"
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/pendukung/gotong-royong/1.jpeg"
import Foto2 from "../../../assets/proker/pendukung/gotong-royong/2.jpeg"
import Foto3 from "../../../assets/proker/pendukung/gotong-royong/3.jpeg"
import Foto4 from "../../../assets/proker/pendukung/gotong-royong/4.jpeg"

export default function GotongRoyong() {
  const proker = {
    type: "pendukung",
    name: "GOTONG ROYONG DAN PILAH SAMPAH",
    time: "",
    target: "Dusun Tembi",
    responsibles: ["Seluruh Anggota"],
    status: "Selesai"
  }
  const timelines = [
    {
      date: "04 Juli 2026",
      title: "Gotong Royong dan Takziah",
      description: "Pelaksanaan di RT-06",
    },
    {
      date: "12 Juli 2026",
      title: "Gotong Royong Pemilahan Sampah",
      description: "Pelaksanaan di RT-02",
    },
    {
      date: "14 Juli 2026",
      title: "Gotong Royong Persiapan Lomba Agustusan",
      description: "Kegiatan dilakukan bersama pemuda setempat",
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
              Kebersihan lingkungan merupakan salah satu faktor penting dalam menciptakan lingkungan yang sehat, nyaman, dan asri. Upaya menjaga kebersihan tidak hanya menjadi tanggung jawab pemerintah, tetapi juga memerlukan partisipasi aktif dari seluruh masyarakat. Salah satu bentuk kepedulian terhadap lingkungan adalah dengan membiasakan kegiatan gotong royong serta menerapkan pemilahan sampah sejak dari sumbernya. Melalui kedua kegiatan tersebut, masyarakat dapat menciptakan lingkungan yang lebih bersih sekaligus mendukung pengelolaan sampah yang lebih efektif.
            </p>

            <p>
              Di Desa Tembi, semangat gotong royong masih menjadi budaya yang terus dijaga oleh masyarakat. Namun, kesadaran mengenai pentingnya memilah sampah organik dan anorganik masih perlu ditingkatkan agar pengelolaan sampah dapat dilakukan dengan lebih optimal. Pemilahan sampah sejak awal tidak hanya mempermudah proses pengolahan dan daur ulang, tetapi juga membantu mengurangi pencemaran lingkungan serta volume sampah yang dibuang ke tempat pembuangan akhir.
            </p>


            <p>
              Melalui program Gotong Royong dan Pilah Sampah, mahasiswa KKN bersama masyarakat melaksanakan kegiatan kerja bakti membersihkan lingkungan sekaligus memberikan pendampingan dalam pemilahan sampah sesuai dengan jenisnya. Program ini bertujuan untuk menumbuhkan kesadaran masyarakat akan pentingnya menjaga kebersihan lingkungan, memperkuat budaya gotong royong, serta mendorong penerapan kebiasaan memilah sampah dalam kehidupan sehari-hari. Dengan adanya kegiatan ini, diharapkan lingkungan Desa Tembi menjadi lebih bersih, sehat, dan nyaman, serta tercipta budaya masyarakat yang semakin peduli terhadap kelestarian lingkungan secara berkelanjutan.
            </p>

            <h2>
              Tujuan
            </h2>

            <ul>
              <li>Meningkatkan kepedulian masyarakat terhadap kebersihan lingkungan.</li>

              <li>Membiasakan masyarakat memilah sampah organik dan anorganik.</li>

              <li>Memperkuat budaya gotong royong di Desa Tembi.</li>
            </ul>

            <h2>Pelaksanaan</h2>

            <p>
              Program Gotong Royong dan Pilah Sampah dilaksanakan bersama masyarakat Desa Tembi sebagai bentuk kepedulian terhadap kebersihan dan kelestarian lingkungan. Kegiatan diawali dengan gotong royong membersihkan lingkungan desa, seperti menyapu jalan, membersihkan area sekitar permukiman, serta mengumpulkan sampah yang berserakan. Kegiatan ini dilakukan secara bersama-sama oleh mahasiswa KKN dan masyarakat sehingga lingkungan menjadi lebih bersih sekaligus memperkuat semangat kebersamaan.
            </p>

            <p>
              Setelah kegiatan gotong royong, dilanjutkan dengan pemilahan sampah berdasarkan jenisnya. Sampah dipisahkan menjadi beberapa kategori, seperti botol plastik, tutup botol, kaleng, serta berbagai jenis wadah kemasan lainnya yang masih memiliki nilai ekonomis. Proses pemilahan dilakukan agar sampah yang masih layak dapat dikelola dengan baik dan dipersiapkan untuk dijual kepada pengepul atau bank sampah.
            </p>

            <p>
              Hasil penjualan sampah yang telah dipilah diharapkan dapat memberikan nilai tambah ekonomi sekaligus menjadi motivasi bagi masyarakat untuk membiasakan pemilahan sampah sejak dari rumah. Kegiatan ini juga menjadi sarana edukasi bahwa sampah tidak selalu menjadi limbah, tetapi dapat dimanfaatkan kembali apabila dikelola dengan tepat.
            </p>

            <p>
              Melalui program Gotong Royong dan Pilah Sampah, diharapkan masyarakat Desa Tembi semakin peduli terhadap kebersihan lingkungan, terbiasa memilah sampah sesuai jenisnya, serta menyadari bahwa pengelolaan sampah yang baik tidak hanya menjaga kelestarian lingkungan, tetapi juga memberikan manfaat ekonomi bagi masyarakat.
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
              <img src={Foto3} />
              <img src={Foto4} />
            </div>

            <div className="gallery-grid">
              <img src={Foto2} />
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
