import FotoFarhan from "../assets/farhan.png"

export default function MemberCard({ member }) {
  return (
    <>
      <div className="team-card reveal">
        <div className="team-avatar">
          <img src={member.avatar} alt="" />
        </div>
        <h4>{member.name}</h4>
        <span>{member.nim}</span>
      </div>
    </>
  )
}
