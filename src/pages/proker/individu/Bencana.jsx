import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Foto1 from "../../../assets/proker/individu/ceria/1.jpeg"
import Foto2 from "../../../assets/proker/individu/ceria/2.jpeg"
import Foto3 from "../../../assets/proker/individu/ceria/3.jpeg"

import Banner from "../../../assets/proker/individu/bencana/banner.jpeg"

export default function Bencana() {
  const proker = {
    type: "individu",
    name: "PEMBUATAN PETA RAWAN BENCANA BERBASIS SISTEM INFORMASI GEOGRAFIS",
    time: "09 - 25 Juli 2026",
    target: "Warga Tembi",
    responsibles: ["Muhammad Arif"],
    status: "Selesai"
  }

  const timelines = [
    {
      date: "09 - 22 Juli 2026",
      title: "Pengumpulan dan Pengolahan Data",
    },
    {
      date: "23 - 24 Juli 2026",
      title: "Survey Lokasi Titik Kumpul dan Finalisasi Peta",
    },
    {
      date: "25 Juli 2026",
      title: "Pengambilan Peta yang Sudah Jadi",
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
              Kalurahan Timbulharjo, khususnya Dusun Tembi, merupakan salah satu wilayah di Kabupaten Bantul yang memiliki karakteristik penggunaan lahan yang beragam, dilalui jaringan sungai, serta berada pada wilayah yang berpotensi mengalami bencana, terutama banjir dan gempa bumi. Potensi tersebut dipengaruhi oleh kondisi topografi, penggunaan lahan, curah hujan, serta letak wilayah yang berada di kawasan rawan gempa di Daerah Istimewa Yogyakarta. Meskipun demikian, informasi spasial mengenai tingkat kerawanan bencana yang mudah dipahami dan dimanfaatkan oleh masyarakat maupun pemerintah setempat masih terbatas.
            </p>

            <p>
              Sistem Informasi Geografis (SIG) merupakan teknologi yang mampu mengintegrasikan, mengelola, menganalisis, dan menyajikan data spasial secara efektif. Melalui SIG, berbagai parameter yang berkaitan dengan potensi bencana dapat diolah menjadi informasi berupa peta kerawanan yang menggambarkan tingkat potensi bencana pada suatu wilayah. Peta tersebut dapat menjadi media informasi yang mendukung pengambilan keputusan dalam perencanaan pembangunan, penataan ruang, serta penyusunan langkah-langkah mitigasi bencana.
            </p>

            <h2>Mengenal Peta Rawan Bencana</h2>
            <p>
              Peta Rawan Bencana adalah peta yang menunjukkan tingkat potensi suatu wilayah terhadap bencana, seperti banjir dan gempa bumi. Peta ini disusun berdasarkan analisis berbagai data spasial menggunakan Sistem Informasi Geografis (SIG) sehingga dapat menggambarkan wilayah dengan tingkat kerawanan rendah hingga tinggi.
            </p>

            <p>
              Peta ini berfungsi sebagai media informasi untuk membantu masyarakat mengenali potensi bencana di lingkungan sekitarnya, meningkatkan kesiapsiagaan, serta mendukung upaya mitigasi dan perencanaan jalur evakuasi. Perlu dipahami bahwa peta rawan bencana tidak memprediksi kapan bencana akan terjadi, melainkan menunjukkan wilayah yang memiliki tingkat potensi terdampak lebih tinggi sehingga masyarakat dapat lebih waspada dan siap menghadapi kemungkinan bencana
            </p>


            <h2>Apa itu sistem informasi geografis ?</h2>
            <p>Sistem Informasi Geografis (SIG) adalah teknologi yang digunakan untuk mengumpulkan, mengelola, menganalisis, dan menyajikan data yang memiliki informasi lokasi atau geografis. Dalam program ini, SIG dimanfaatkan untuk mengolah berbagai data, seperti penggunaan lahan, kemiringan lereng, curah hujan, jaringan sungai, dan data bahaya gempa, sehingga menghasilkan Peta Rawan Bencana yang informatif dan mudah dipahami. Melalui SIG, informasi kerawanan bencana dapat ditampilkan dalam bentuk peta yang membantu masyarakat mengenali potensi bencana di sekitarnya serta mendukung upaya mitigasi, perencanaan, dan pengambilan keputusan secara lebih tepat</p>

            <h2>Mengapa Dusun Tembi Memerlukan Peta Rawan Bencana?</h2>
            <p>
              Dusun Tembi memiliki potensi terdampak bencana, terutama banjir dan gempa bumi, yang dipengaruhi oleh kondisi geografis, penggunaan lahan, serta letaknya di wilayah rawan gempa di Kabupaten Bantul. Oleh karena itu, diperlukan informasi yang dapat membantu masyarakat mengenali tingkat kerawanan di setiap wilayah
            </p>
            <p>
              Peta Rawan Bencana dibuat sebagai media informasi untuk menunjukkan daerah yang memiliki tingkat kerawanan berbeda-beda. Dengan adanya peta ini, masyarakat dapat lebih memahami kondisi lingkungannya, meningkatkan kesiapsiagaan, serta mengetahui jalur evakuasi dan titik kumpul yang dapat digunakan saat terjadi bencana. Selain itu, peta ini juga dapat menjadi acuan bagi pemerintah kalurahan dalam mendukung upaya mitigasi dan penanggulangan bencana.
            </p>

            <h2>
              Bagaimana Peta Rawan Banjir Dibuat?
            </h2>
            <p>
              Peta Rawan Banjir Dusun Tembi disusun menggunakan Sistem Informasi Geografis (SIG) dengan metode skoring. Metode ini dilakukan dengan memberikan nilai (skor) pada setiap parameter yang memengaruhi potensi banjir. Semakin besar pengaruh suatu kondisi terhadap terjadinya banjir, maka semakin tinggi skor yang diberikan
            </p>

            <p>
              Dalam penyusunan peta ini digunakan enam parameter utama, yaitu curah hujan, jarak terhadap sungai, jenis tanah, kemiringan lahan, ketinggian lahan, dan penggunaan lahan. Masing-masing parameter diklasifikasikan berdasarkan tingkat pengaruhnya terhadap banjir, kemudian diberikan skor sesuai klasifikasi yang telah ditentukan dari referensi penelitian. Setelah seluruh parameter memperoleh skor, setiap lapisan data digabungkan menggunakan teknik overlay pada Sistem Informasi Geografis (SIG). Nilai dari setiap parameter kemudian dijumlahkan sehingga menghasilkan skor total kerawanan banjir untuk setiap lokasi di Dusun Tembi. Semakin tinggi skor total yang diperoleh, semakin tinggi pula tingkat kerawanan banjir pada lokasi tersebut. Adapun hasil pengolahan parameter tersebut untuk daerah Tembi, yaitu sebagai berikut
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
            <a href="/proker" className="btn btn-outline">← Semua Proker</a>
          </div>
        </div >
      </section >

      <Footer />
    </>
  )
}
