import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useApi from '../api/useApi';
import { Link } from 'react-router-dom';

function NewArrivals() {
  const products = useApi(); 

  return (
    <>
      <div className="newArrival text-center">
        <h1 className='text-center'>New Arrivals</h1>
        <hr/>
        <div className="container mt-4">
          <div className="row">
            {products.slice(0, 8).map((product) => (
              <div className="col-lg-3 mb-4" key={product.id}>
                <div className="card h-100 d-flex flex-column">
                  <div className="image">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid mt-3"
                      style={{ height: '200px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="text mt-3 flex-grow-1 d-flex flex-column">
                    <p>{product.title}</p>
                    <p>Rs. {product.price}</p>
                  </div>
                  <Link to={`/product/${product.id}`} className="btn w-100 mt-auto text-white" style={{backgroundColor: "#ff414d", borderRadius: "unset", visibility: "hidden"}}>Shop Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
