import React from 'react';
import productImage from '../assets/model_5.png';

function CallToAction() {
  return (
    <div className="callToAction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
            <img src={productImage} alt="" className="product-image img-fluid"/>
          </div>
          <div className="col-lg-6 col-md-12 text text-center align-items-center">
            <p># New Summer Collection 2024</p>
            <h3>New Denim</h3>
            <h3>Coat</h3>
            <div className="btn shop-btn">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
