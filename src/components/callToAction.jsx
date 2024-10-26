import React from 'react'
import productImage from '../assets/model_5.png'

function CallToAction() {
  return (
    <>
      <div className="callToAction">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-4" >
             <img src={productImage} alt="" style={{height: "100vh", width: "500px"}}/>
            </div>
            <div className="col-lg-6 text ">
              <p># New Summer Collection 2024</p>
              <h3>New Denim </h3>
              <h3>Coat</h3>
              <div className="btn" style={{backgroundColor: "#000", color: "#fff"}}>
                Shop Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToAction
