import React from 'react';

function Blog() {
  return (
    <>
      <div className="blog py-5">
        <h1 className='text-center'>Recent Blogs</h1>
        <hr />
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4 blogs">
              <div className="blog_item1" >
                <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className='blog-title'>Here are the trends I see coming this fall</h4>
                  <span className='blog-date'>by admin | Dec 01, 2017</span>
                  <a className='blog-more' href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 blogs">
              <div className="blog_item2">
              <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className='blog-title'>Here are the trends I see coming this fall</h4>
                  <span className='blog-date'>by admin | Dec 01, 2017</span>
                  <a className='blog-more' href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 blogs">
              <div className="blog_item3">
              <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className='blog-title'>Here are the trends I see coming this fall</h4>
                  <span className='blog-date'>by admin | Dec 01, 2017</span>
                  <a className='blog-more' href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
