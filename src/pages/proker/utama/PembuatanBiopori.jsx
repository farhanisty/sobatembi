import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";

import Banner from "../../../assets/proker/utama/biopori/banner.jpeg"

export default function PembuatanBiopori() {
  const proker = {
    type: "utama",
    name: "Pembuatan Biopori",
    time: "12 - 26 Juli 2026",
    target: "RT 01, 02, 04, 07, dan 08.",
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
            <h2>Latar Belakang</h2>
            <p>
              Desa Tembi merupakan salah satu wilayah yang memiliki potensi lingkungan yang baik serta didukung oleh partisipasi masyarakat dalam menjaga kebersihan lingkungan. Namun demikian, pengelolaan sampah organik rumah tangga masih menjadi salah satu aspek yang perlu terus ditingkatkan. Sampah organik seperti sisa makanan, daun kering, dan limbah tanaman sering kali belum dimanfaatkan secara optimal sehingga berpotensi menimbulkan bau, menjadi sumber pencemaran, serta mengurangi kualitas kebersihan lingkungan apabila tidak dikelola dengan baik. Di sisi lain, berkurangnya daerah resapan air akibat padatnya permukaan tanah juga dapat menyebabkan air hujan tidak terserap secara maksimal dan meningkatkan risiko terjadinya genangan pada musim penghujan.
            </p>

            <p>
              Salah satu upaya sederhana yang dapat diterapkan untuk mengatasi kedua permasalahan tersebut adalah melalui pembuatan lubang resapan biopori. Biopori merupakan teknologi ramah lingkungan yang berfungsi meningkatkan kemampuan tanah dalam menyerap air hujan sekaligus menjadi media pengolahan sampah organik. Sampah organik yang dimasukkan ke dalam lubang biopori akan terurai secara alami oleh mikroorganisme dan organisme tanah sehingga menghasilkan kompos yang bermanfaat bagi kesuburan tanah. Dengan demikian, biopori tidak hanya membantu mengurangi volume sampah organik, tetapi juga berkontribusi dalam meningkatkan kualitas lingkungan secara berkelanjutan.
            </p>

            <p>
              Melalui program kerja Pembuatan Biopori, mahasiswa KKN bersama masyarakat Desa Tembi melaksanakan pembuatan lubang biopori sebagai bentuk edukasi sekaligus aksi nyata dalam pengelolaan lingkungan. Program ini diharapkan dapat meningkatkan kesadaran masyarakat mengenai pentingnya pengelolaan sampah organik, memperluas daerah resapan air, mengurangi potensi genangan saat musim hujan, serta mendorong terciptanya lingkungan desa yang lebih bersih, sehat, dan berkelanjutan. Dengan adanya partisipasi aktif masyarakat, diharapkan pemanfaatan biopori dapat terus dilanjutkan dan menjadi salah satu kebiasaan dalam menjaga kelestarian lingkungan di Desa Tembi.
            </p>

            <h2>Tujuan</h2>
            <ul>
              <li>Meningkatkan daya resap tanah melalui pembuatan lubang biopori.</li>
              <li>Mengelola sampah organik menjadi kompos secara ramah lingkungan.</li>
              <li>Meningkatkan kepedulian masyarakat Desa Tembi terhadap pelestarian lingkungan</li>
            </ul>

            <h2>Pelaksanaan</h2>
            <p>
              Program Pembuatan Biopori diawali dengan survei ke seluruh RT di Desa Tembi untuk mengidentifikasi lokasi yang sesuai serta menentukan titik pemasangan lubang biopori. Berdasarkan hasil survei, setiap RT memperoleh 10 unit biopori sebagai bentuk dukungan dalam pengelolaan lingkungan. Pada tahap pelaksanaan, 5 unit biopori dipasang secara langsung oleh tim KKN bersama warga sebagai contoh penerapan, sedangkan 5 unit lainnya diserahkan kepada masing-masing RT untuk dipasang secara mandiri di lokasi yang telah disepakati.
            </p>

            <p>
              Sebelum proses pemasangan, tim terlebih dahulu melakukan persiapan dan pembuatan komponen biopori. Tahapan tersebut meliputi pemotongan pipa PVC (pralon) dengan panjang 80 cm, kemudian membuat lubang-lubang pada badan pipa sebagai jalur masuknya air dan aktivitas organisme tanah. Selain itu, tutup pipa juga dilubangi untuk menjaga sirkulasi udara sekaligus mempercepat proses penguraian sampah organik di dalam lubang biopori.
            </p>

            <p>
              Setelah seluruh komponen siap, dilakukan pemasangan biopori pada titik yang telah ditentukan. Lubang dibuat sesuai ukuran pipa, kemudian pipa dimasukkan dan dipasang hingga kokoh di dalam tanah. Biopori yang telah terpasang selanjutnya dapat dimanfaatkan oleh masyarakat sebagai tempat memasukkan sampah organik, sehingga selain meningkatkan daya resap air ke dalam tanah, juga berfungsi sebagai media pengomposan alami.
            </p>

            <p>
              Selama pelaksanaan kegiatan, masyarakat Desa Tembi menunjukkan partisipasi yang baik dengan membantu proses pemasangan serta memberikan dukungan terhadap program yang dilaksanakan. Melalui kegiatan ini, diharapkan masyarakat dapat menerapkan dan memanfaatkan biopori secara berkelanjutan sebagai salah satu upaya menjaga kebersihan lingkungan, mengurangi sampah organik, dan meningkatkan resapan air di lingkungan sekitar.
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
