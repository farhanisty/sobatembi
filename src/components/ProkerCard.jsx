export default function ProkerCard({ title, description, href }) {
  return (
    <article className="card-proker reveal">
      <div className="thumb">01</div>
      <div className="body">
        <span className="badge utama">Proker Utama</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} className="card-link">Lihat detail <span className="arrow">→</span></a>
      </div>
    </article>
  )
}
