import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/individu/ceria/1.jpeg"
import Foto2 from "../../../assets/proker/individu/ceria/2.jpeg"
import Foto3 from "../../../assets/proker/individu/ceria/3.jpeg"

import Banner from "../../../assets/proker/individu/sabun/banner.jpeg"

export default function Gemas() {
  const proker = {
    type: "individu",
    name: "Pembuatan Sabun Natural",
    time: "01 - 19 Juli 2026",
    target: "RT 02, 06, dan 07",
    responsibles: ["Khotimatu Tsamaaniya"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "01 Juli 2026",
      title: "Penyampaian program kerja individu berupa pelatihan pembuatan sabun natural kepada pak dukuh, ketua masyarakat, dan seluruh ketua RT 01 -08 melalui forum rapat bersama.",
    },
    {
      date: "02 - 10 Juli 2026",
      title: "Penyusunan materi dan perhitungan bahan, alat, serta berat sabun yang akan dihasilkan ke dalam spreadsheet",
    },
    {
      date: "10 Juli 2026",
      title: "Persiapan penyediaan alat dan penimbangan bahan yang terbagi menjadi 5 bagian.",
    },
    {
      date: "11 Juli 2026",
      title: "Pelaksanaan pelatihan pembuatan sabun natural di RT 06",
      description: "rundown: mengikuti arisan ibu - ibu RT 06, penyampaian materi pembuatan sabun, praktik sekaligus tanya jawab, dan sesi dokumentasi."
    },
    {
      date: "15 - 18 Juli 2026",
      title: "Persiapan penyediaan alat dan penimbangan bahan pembuatan sabun  untuk RT 07 dan RT 02.",
    },
    {
      date: "19 Juli 2026",
      title: "Pelaksanaan pelatihan pembuatan sabun natural di RT 07.",
      description: "Rundown: mengikuti arisan ibu - ibu RT 07, sosialisasi biopori, sosialisasi pembuatan vertikultur, penyampaian materi pembuatan sabun, praktik sekaligus tanya jawab, dan sesi dokumentasi."
    },
    {
      date: "19 Juli 2026",
      title: "Pelaksanaan pelatihan pembuatan sabun natural di RT 02.",
      description: "Rundown: penyampaian materi pembuatan sabun, praktik sekaligus tanya jawab, dan sesi dokumentasi."
    },
  ];

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker}>
        <img src={Banner} alt="" />
      </ProkerHero >

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal">
            <h2>Latar Belakang</h2>
            <p>
              Sabun merupakan kebutuhan sehari-hari yang digunakan oleh seluruh lapisan masyarakat. Sebagian besar sabun komersial mengandung surfaktan sintetis seperti SLS atau SLES yang berfungsi menghasilkan busa dan membersihkan kotoran. Namun, penggunaan SLS dalam kadar tertentu dapat menyebabkan kulit menjadi kering bahkan memicu iritasi pada sebagian orang, terutama yang memiliki kulit sensitif. Di sisi lain, sabun natural dibuat melalui proses saponifikasi minyak nabati dengan NaOH sehingga tetap mempertahankan gliserin alami yang membantu menjaga kelembapan kulit. Selain itu, pemanfaatan ampas kopi sebagai bahan scrub alami juga memberikan nilai tambah terhadap limbah organik yang masih dapat dimanfaatkan menjadi produk yang bernilai guna. Adapun penambahan oatmeal sebagai pelembut kulit.
            </p>
            <p>
              Pelatihan ini juga relevan dengan potensi Dusun Tembi sebagai desa wisata yang dikenal dengan suasana pedesaan, budaya lokal, serta daya tarik alamnya. Wisatawan yang berkunjung ke desa wisata umumnya memiliki ketertarikan terhadap produk-produk alami, ramah lingkungan, dan berciri khas lokal. Oleh karena itu, pembuatan sabun natural berbahan ampas kopi dan oatmeal tidak hanya menjadi sarana edukasi bagi masyarakat, tetapi juga berpotensi dikembangkan sebagai produk unggulan UMKM atau suvenir khas Dusun Tembi yang memiliki nilai ekonomi. Melalui pelatihan ini, diharapkan masyarakat memperoleh keterampilan baru yang dapat mendukung pengembangan ekonomi kreatif berbasis potensi lokal sekaligus mendorong pemanfaatan limbah organik secara berkelanjutan.
            </p>

            <h2>Manfaat & Tujuan</h2>
            <ul>
              <li>Meningkatkan pengetahuan masyarakat mengenai perbedaan sabun natural dan sabun komersial.</li>
              <li>Memberikan edukasi mengenai penggunaan SLS/SLES serta pengaruhnya terhadap kesehatan kulit.</li>
              <li>Melatih masyarakat membuat sabun natural melalui proses saponifikasi menggunakan bahan-bahan yang dapat diperoleh.</li>
              <li>emanfaatkan limbah ampas kopi sebagai bahan scrub alami yang memiliki nilai tambah.</li>
              <li>Mendorong masyarakat untuk menghasilkan produk sabun natural yang dapat digunakan sendiri maupun berpotensi dikembangkan sebagai produk UMKM.</li>
            </ul>


            <h2>Pelaksanaan</h2>
            <p>
              Kegiatan diawali dengan penyampaian presentasi menggunakan media PPT Canva mengenai perbedaan sabun natural dan sabun komersial, pengenalan SLS dan SLES beserta dampaknya terhadap kulit, konsep dasar proses saponifikasi, komposisi bahan dan fungsi masing-masing bahan dalam pembuatan sabun natural, serta penjelasan mengenai masa curing selama 4–6 minggu sebelum sabun siap digunakan. Selanjutnya, warga dibentuk beberapa grup sebelum diberikan demonstrasi dan praktik langsung pembuatan sabun natural. Praktik dimulai dari penggunaan alat pelindung diri (APD), pencampuran minyak nabati dan larutan lye di suatu wadah, proses pengadukan menggunakan spatula dan mixer hingga mencapai trace (teremulsi), penambahan ampas kopi dan atau oatmeal, pencetakan sabun, serta penjelasan mengenai proses penyimpanan dan masa curing agar sabun memiliki kualitas yang baik sebelum pembuatan larutan lye, pencampuran minyak nabati, proses pengadukan hingga mencapai trace, penambahan oatmeal dan ampas kopi, pencetakan sabun, serta penjelasan mengenai proses penyimpanan dan curing agar sabun memiliki kualitas yang baik.
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
              <img src={Foto3} />
            </div>
          </div>

          <div className="detail-nav reveal">
            <a href="proker.html" className="btn btn-outline">← Semua Proker</a>
            <a href="/proker/individu/uji-kualitas-air-sumur" className="btn btn-primary">Proker Selanjutnya →</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
