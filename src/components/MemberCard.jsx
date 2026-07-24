import FotoFarhan from "../assets/farhan.png"

export default function MemberCard({ member }) {
  return (
    <>
      <div className="team-card reveal">
        <div className="team-avatar">
          <MemberProfile member={member} />
        </div>
        <h4>{member.name}</h4>
        <span>{member.nim}</span>
      </div>
    </>
  )
}

function MemberProfile({ member }) {
  if (member.id === 4) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 2) {
    return <img style={{ transform: "translateY(45px)" }} src={member.avatar} alt="" />
  } else if (member.id === 3) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 5) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 6) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 7) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 8) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  } else if (member.id === 9) {
    return <img style={{ transform: "translateY(35px)" }} src={member.avatar} alt="" />
  }

  return <img src={member.avatar} alt="" />
}
