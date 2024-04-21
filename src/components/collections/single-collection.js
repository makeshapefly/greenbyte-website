import React from "react"

const SingleCollection = ({item}) => {
  return (
    <div className="collection__item">
      <div className="collection__item-thumb">
        <a href="#">
          <img src={item.img} alt="img" />
        </a>
      </div>
      <div className="collection__item-content">
        <h4 className="name">
          <h4>{item.name}</h4>
        </h4>
      </div>
    </div>
  )
}

export default SingleCollection