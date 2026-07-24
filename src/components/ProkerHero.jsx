export default function ProkerHero({ proker }) {
  return (
    <section className="detail-hero">
      <div className="container">
        <span className="badge utama reveal">Proker Utama</span>
        <h1 className="reveal">{proker.name}</h1>
        <div className="detail-meta reveal">
          <div>
            <span className="m-label">Waktu Pelaksanaan</span>
            <span className="m-val">{proker.time}</span>
          </div>
          <div>
            <span className="m-label">Sasaran</span>
            <span className="m-val">{proker.target}</span>
          </div>
          <div>
            <span className="m-label">Penanggung Jawab</span>
            {proker.responsibles.map((person, index) => {
              return (
                <span key={index} className="m-val">{person}</span>
              )
            })}
          </div>
          <div>
            <span className="m-label">Status</span>
            <span className="m-val">{proker.status}</span>
          </div>
        </div>
        <div className="detail-cover reveal"></div>
      </div>
    </section>
  )
}
