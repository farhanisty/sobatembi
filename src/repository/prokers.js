import FotoSIGDIndividu from "../assets/proker/individu/sigd/1.png"
import BannerBiopori from "../assets/proker/utama/biopori/banner.jpeg"
import BannerGoldar from "../assets/proker/utama/goldar/banner.jpeg"
import BannerHariAnak from "../assets/proker/utama/hari-anak/banner.jpeg"

export const prokers = {
  utama: [
    {
      title: "Pembuatan Biopori",
      description: "Mengelola sampah organik sekaligus meningkatkan daya resap tanah melalui pembuatan lubang biopori di Desa.",
      image: BannerBiopori,
      href: "/proker/utama/biopori"
    },
    {
      title: "Pendataan Golongan Darah Dusun Tembi",
      description: "Meningkatkan ketersediaan data golongan darah masyarakat Desa Tembi untuk mendukung pelayanan kesehatan dan keadaan darurat.",
      image: BannerGoldar,
      href: "/proker/utama/pendataan-golongan-darah"
    },
    {
      title: "Kegiatan 'Hari Anak Nasional'",
      description: "adalah",
      image: BannerHariAnak,
      href: "/proker/utama/hari-anak-nasional"
    },
  ],
  individu: [
    {
      title: "Sosialisasi dan Pelatihan Budidaya Sayuran Sistem Vertikultur Berbahan Botol Plastik Bekas",
      description: "adalah",
      href: "/proker/individu/vertikultur"
    },
    {
      title: "Sistem Informasi Golongan Darah Tembi",
      description: "Melakukan digitalisasi dan pemetaan data golongan darah warga desa secara terintegrasi. Program ini bertujuan untuk membangun katalog pendonor siaga yang terstruktur, guna mempercepat akses informasi dan penyaluran bantuan darah bagi masyarakat yang membutuhkan.",
      image: FotoSIGDIndividu,
      href: "/proker/individu/sistem-informasi-golongan-darah"
    },
  ]
}
