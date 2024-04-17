import React from 'react';

const Breadcrumb = ({title}) => {
  return (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__content">
              <h2 className="title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;