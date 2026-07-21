import { useTimelineReveal } from "../hooks/useTimelineReveal"

export default function Timeline({ timelines }) {
  useTimelineReveal()

  return (
    <section style={{ paddingTop: 10 }}>
      <div className="container">
        <div className="timeline-wrap">
          <svg className="timeline-svg-line" viewBox="0 0 4 1000" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2,0 L2,1000" />
          </svg>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <span className="tl-date">[Tanggal] — Hari 1</span>
            <h3>Penerjunan & Pembukaan KKN</h3>
            <p>[Deskripsi singkat kegiatan pembukaan, penyambutan oleh perangkat desa, dsb.]</p>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <span className="tl-date">[Tanggal]</span>
            <h3>[Nama Proker Utama 1] — Tahap Persiapan</h3>
            <p>[Deskripsi singkat.]</p>
            <span className="badge utama">Proker Utama</span>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <span className="tl-date">[Tanggal]</span>
            <h3>[Nama Proker Pendukung 1]</h3>
            <p>[Deskripsi singkat.]</p>
            <span className="badge pendukung">Proker Pendukung</span>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <span className="tl-date">[Tanggal]</span>
            <h3>[Nama Proker Utama 2] — Pelaksanaan</h3>
            <p>[Deskripsi singkat.]</p>
            <span className="badge utama">Proker Utama</span>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <span className="tl-date">[Tanggal] — Hari Terakhir</span>
            <h3>Penutupan & Perpisahan KKN</h3>
            <p>[Deskripsi singkat kegiatan penutupan, evaluasi, dan perpisahan dengan warga.]</p>
          </div>
        </div>
      </div>
    </section>
  )
}

