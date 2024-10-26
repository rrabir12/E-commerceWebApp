import React from 'react'

function Banner() {
  return (
    <>
    <div className="banner mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="banner_item1 align-item-center" >
              <div className="banner_category">
                <a href="#">Women's</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="banner_item2">
            <div className="banner_category">
            <a href="#">Assecories's</a>
            </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="banner_item3">
            <div className="banner_category">
            <a href="#">Men's</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Banner
