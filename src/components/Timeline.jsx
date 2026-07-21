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

          {timelines.map((timeline, index) => {
            return (
              <div key={index} className="tl-item">
                <div className="tl-dot"></div>
                <span className="tl-date">{timeline.date}</span>
                <h3>{timeline.title}</h3>
                <p>{timeline.description}</p>
                {timeline.badge && (
                  <span className={`badge ${timeline.badge}`}>Proker {timeline.badge}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

