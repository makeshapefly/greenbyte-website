import React from "react"

const GradientPosition = () => {
  return (
    <div className="gradient-position">
      <img
        src="/assets/img/others/gradient-circle.svg"
        style={{left:'-4%',top:'-4%'}}
        width="500"
        alt="circle"
      />
      <img
        src="/assets/img/others/gradient-circle.svg"
        style={{right:'-4%',bottom:'-4%'}}
        width="500"
        alt="circle"
      />
    </div>
  )
}

export default GradientPosition
