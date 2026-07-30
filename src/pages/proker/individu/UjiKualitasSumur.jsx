import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProkerHero from "../../../components/ProkerHero";
import Timeline from "../../../components/Timeline";

import Peta from "../../../assets/proker/individu/sumur/banner.jpg"

import Foto1 from "../../../assets/proker/individu/sumur/1.jpeg"
import Foto2 from "../../../assets/proker/individu/sumur/2.jpeg"
import Foto3 from "../../../assets/proker/individu/sumur/3.jpeg"
import Foto4 from "../../../assets/proker/individu/sumur/4.jpeg"

import Banner from "../../../assets/proker/individu/sumur/banner.jpeg"

export default function UjiKualitasSmur() {
  const proker = {
    type: "individu",
    name: "Pengujian Kualitas Air Sumur",
    time: "15 - 31 Juli 2026",
    target: "Warga Tembi",
    responsibles: ["Chayrul Sholeh Setiawan", "Irfani Fuspita Devi"],
    status: "Menunggu Hasil Lab"
  }

  const timelines = [
    {
      date: "15 Juli 2026",
      title: "Survey Titik Sumur",
    },
    {
      date: "16 - 17 Juli 2026",
      title: "Pengambilan dan Pengujian Air Sampel",
      description: "Pengujian dilakukan untuk 3 parameter yaitu: PH, TDS, dan DHL.",
    },
    {
      date: "17 Juli 2026",
      title: "Menguji Sampel Air ke BB Lab Kesmas Yogyakarta",
      description: "Pengujian dilakukan untuk mengetahui parameter Fe, Mn, dan Salinitas.",
    },
    {
      date: "21 Juli 2026",
      title: "Pengolahan dan Analisis Data",
    },
    {
      date: "22 Juli 2026",
      title: "Pembuatan Peta Kelayakan Air",
    },
    {
      date: "24 Juli 2026",
      title: "Finalisasi Peta Kelayakan Air",
    },
    {
      date: "26 Juli 2026",
      title: "Publikasi Hasil Pengujian Kualitas Air Sampel",
      description: "Publikasi dilakukan di perpisahan KKN.",
    },
  ];

  const hasilPengujian = [
    {
      rt: "01",
      ph: "7.15 - 7.60",
      tds: "259 - 313",
      dhl: "524 - 627",
    },
    {
      rt: "02",
      ph: "7.30 - 7.93",
      tds: "209 - 278",
      dhl: "432 - 562",
    },
    {
      rt: "03",
      ph: "7.00 - 7.05",
      tds: "282 - 292",
      dhl: "564 - 586",
    },
    {
      rt: "04",
      ph: "7.20 - 7.70",
      tds: "208 - 270",
      dhl: "414 - 542",
    },
    {
      rt: "05",
      ph: "7.30",
      tds: "201 - 290",
      dhl: "402 - 576",
    },
    {
      rt: "06",
      ph: "7.10 - 7.45",
      tds: "234 - 286",
      dhl: "472 - 580",
    },
    {
      rt: "07",
      ph: "7.20 - 7.50",
      tds: "233 - 263",
      dhl: "474 - 528",
    },
    {
      rt: "08",
      ph: "7.10 - 7.60",
      tds: "243 - 409",
      dhl: "480 - 822",
    },
  ]

  return (
    <>
      <Navbar />

      <ProkerHero proker={proker}>
        <img src={Banner} alt="" />
      </ProkerHero >

      <section style={{ paddingTop: 0 }} >
        <div className="container">
          <div className="prose reveal in">
            <h2>Latar Belakang</h2>
            <p>
              Sebagai upaya mendukung penyediaan informasi mengenai kondisi kualitas air tanah, Tim KKN-AB 84.022 UPN "Veteran" Yogyakarta melaksanakan kegiatan pengujian kualitas air sumur warga di Dusun Tembi, Kalurahan Timbulharjo, Kapanewon Sewon, Kabupaten Bantul. Kegiatan ini bertujuan untuk memberikan gambaran awal mengenai kondisi kualitas air sumur yang dimanfaatkan masyarakat sebagai sumber air bersih serta menjadi sumber informasi bagi masyarakat dan pemerintah kalurahan dalam menjaga kualitas sumber air tanah.
            </p>

            <h2>Pelaksanaan</h2>
            <p>
              Sebanyak 24 sumur warga yang tersebar di RT 1 hingga RT 8 diuji menggunakan tiga parameter lapangan, yaitu <span style={{ fontWeight: 800 }}>derajat keasaman (pH)</span>, <span style={{ fontWeight: 800, fontStyle: "italic" }}>Total Dissolved Solids</span> <span style={{ fontWeight: 800 }}>(TDS)</span>, dan <span style={{ fontWeight: 800 }}>Daya Hantar Listrik (DHL)</span>. Hasil pengujian kemudian dipetakan untuk menggambarkan persebaran kualitas air sumur pada setiap lokasi pengambilan sampel.
            </p>

            <h2>Baku Mutu</h2>
            <p>
              Penilaian hasil pengujian mengacu pada Peraturan Menteri Kesehatan Republik Indonesia Nomor 2 Tahun 2023 tentang Peraturan Pelaksanaan Peraturan Pemerintah Nomor 66 Tahun 2014 tentang Kesehatan Lingkungan untuk parameter pH dan Total Dissolved Solids (TDS). Berdasarkan peraturan tersebut, nilai pH yang memenuhi syarat untuk air minum berada pada kisaran 6,5–8,5, sedangkan nilai TDS yang dipersyaratkan untuk air minum adalah kurang dari 300 mg/L. Sementara itu, parameter Daya Hantar Listrik (DHL) belum diatur dalam Permenkes Nomor 2 Tahun 2023, sehingga interpretasi hasil mengacu pada Boyd (1990) yang menyatakan bahwa nilai DHL hingga 1.500 µS/cm masih berada dalam kisaran yang baik untuk air tawar.
            </p>

            <h2>Hasil</h2>
            <img src={Peta} alt="" />
            <p>
              Secara umum, hasil pengujian menunjukkan bahwa kualitas air sumur di Dusun Tembi berada dalam kondisi baik. Nilai pH seluruh sampel berada pada kisaran 7,00–7,93, sehingga seluruh sampel memenuhi baku mutu yang dipersyaratkan. Nilai TDS berkisar antara 201–409 mg/L, sedangkan nilai DHL berada pada kisaran 402–822 µS/cm.
            </p>

            <p>
              Hasil pengujian pada masing-masing RT adalah sebagai berikut:
            </p>
            <div className="table-wrap">
              <table style={{ width: "100%" }} border="1">
                <thead>
                  <tr>
                    <th>RT</th>
                    <th>pH</th>
                    <th>TDS</th>
                    <th>DHL</th>
                  </tr>
                </thead>
                <tbody>
                  {hasilPengujian.map((h, index) =>

                    <tr key={index}>
                      <td>{h.rt}</td>
                      <td>{h.ph}</td>
                      <td>{h.tds} ppm</td>
                      <td>{h.dhl} µS/cm</td>
                    </tr>
                  )
                  }
                </tbody>
              </table>

              <h3 style={{ marginTop: 12 }}>Link: <a style={{ color: "#6C8B08" }} href="https://drive.google.com/drive/folders/1X_Go485goFEmusOcNEHS9tqhj5wbZK7V" target="_blank">Excel Lengkap</a></h3>
            </div>

            <h2>Analisis</h2>

            <p>
              Berdasarkan hasil pemetaan, 22 sumur (91,7%) memenuhi seluruh parameter yang diuji, sedangkan 2 sumur (8,3%) memiliki nilai TDS yang melebihi baku mutu Permenkes Nomor 2 Tahun 2023 untuk air minum, yaitu:
            </p>

            <ul>
              <li>
                RT 1, tepatnya di Rumah Bapak Bambang Tri, dengan nilai TDS sebesar 313 mg/L.
              </li>

              <li>
                RT 8, pada sumur yang berada di sebelah barat–timur TPA Al-Huda, dengan nilai TDS sebesar 409 mg/L.
              </li>

            </ul>

            <p>
              Meskipun kedua sumur tersebut memiliki nilai TDS yang melebihi baku mutu, nilai pH dan DHL masih berada dalam kisaran yang memenuhi nilai acuan. Oleh karena itu, diperlukan pemantauan dan pengujian lanjutan untuk mengetahui faktor yang menyebabkan tingginya kandungan padatan terlarut pada kedua sumur tersebut.
            </p>

            <p>
              Selain pengujian parameter lapangan,  beberapa sampel air juga telah dikirim ke laboratorium untuk dilakukan analisis kandungan Besi (Fe), dan Mangan (Mn). Berdasarkan hasil pengujian laboratorium dan mengacu pada Permenkes Nomor 2 Tahun 2023 tentang Persyaratan Kualitas Air Minum (baku mutu Fe ≤ 0,2 mg/L dan Mn ≤ 0,1 mg/L), diperoleh hasil sebagai berikut:
            </p>
            <ul>
              <li>
                RT 02: Kadar Fe sebesar 1,2856 mg/L dan Mn sebesar 1,7300 mg/L, sehingga keduanya melebihi baku mutu. Air sumur belum memenuhi persyaratan kualitas air minum untuk parameter besi dan mangan serta disarankan dilakukan pengolahan, sebelum digunakan sebagai air minum.
              </li>
              <li>
                RT 08: Kadar Fe sebesar 0,1529 mg/L memenuhi baku mutu, sedangkan Mn sebesar 0,1396 mg/L melebihi baku mutu. Dengan demikian, air sumur belum memenuhi persyaratan kualitas air minum karena kadar mangan masih berada di atas batas yang diperbolehkan.
              </li>

            </ul>

            <div style={{ marginTop: 24, background: "rgba(255, 0, 0, .3)", borderRadius: "12px", padding: 12 }}>
              <h2 style={{ margin: 0, marginBottom: 12 }}>Catatan!!</h2>
              <p>
                Hasil pengujian yang disajikan merupakan hasil pengukuran awal (screening) berdasarkan parameter pH, TDS, dan DHL, Fe, dan Mn. Oleh karena itu, hasil ini tidak dapat dijadikan sebagai satu-satunya acuan bahwa air sumur aman atau layak untuk dikonsumsi secara langsung. Penentuan kelayakan air minum memerlukan pengujian laboratorium yang lebih lengkap, meliputi parameter fisika, kimia, dan mikrobiologi sesuai ketentuan Permenkes Nomor 2 Tahun 2023. Masyarakat tetap disarankan untuk mengolah air sebelum dikonsumsi serta melakukan pemeriksaan kualitas air secara berkala, terutama apabila air tersebut digunakan untuk konsumsi.
              </p>
            </div>


            <h2>Timeline</h2>
            <Timeline timelines={timelines} />
          </div>

          <div className="reveal">
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.6rem", margin: "40px 0 6px"
            }}>Dokumentasi</h2>
            <div className="gallery-grid">
              <img src={Foto1} />
            </div>

            <div className="gallery-grid">
              <img src={Foto2} />
              <img src={Foto3} />
              <img src={Foto4} />
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
