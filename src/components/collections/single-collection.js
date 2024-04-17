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
          <a href="#">#{item.name}</a>
        </h4>
        <span className="author">
          By <a href="#">{item.author}</a>
        </span>
      </div>
    </div>
  )
}

export default SingleCollection
