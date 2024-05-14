import React from "react"

const SingleTeam = ({item,style_2=false}) => {
  return (
    <div className={`${style_2?"team__item-two":"team__item"} text-center`}>
      <div className={`${style_2?"team__item-two-thumb":"team__item-thumb"}`}>
        <img src={item.img} alt="team" />
      </div>
      <div className={`${style_2?"team__item-two-content":"team__item-content"}`}>
        <h4 className="name">{item.name}</h4>
        <span className="designation">{item.designation}</span>
      </div>
    </div>
  )
}

export default SingleTeam
