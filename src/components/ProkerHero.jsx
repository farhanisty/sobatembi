import Foto1 from "../assets/proker/individu/sigd/1.png"
export default function ProkerHero({ children, proker }) {
  return (
    <section className="detail-hero">
      <div className="container">
        <span className={`badge ${proker.type} reveal`}>Proker {proker.type}</span>
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
        <div className="detail-cover reveal" style={{ overflow: "hidden" }}>{children}</div>
      </div>
    </section>
  )
}
