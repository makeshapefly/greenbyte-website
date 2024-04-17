import React from "react";
import collection_data from "../../data/collection-data";
import SingleCollection from "./single-collection";

const CollectionArea = () => {
  return (
    <section id="collection" className="collection-area section-py-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-65">
              <h2 className="title">Latest artworks</h2>
            </div>
          </div>
        </div>
        <div
          className="row collection__items-list"
          data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
        >
          {collection_data.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-11">
            <SingleCollection item={item} />
          </div>
          ))}
        </div>
        <div
          className="collection__btn text-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <a
            href="https://opensea.io/"
            target="_blank"
            className="btn gradient-btn"
          >
            <span>View more in OPENSEA</span>{" "}
            <i className="unicon-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CollectionArea
