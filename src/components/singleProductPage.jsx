import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faStar,
  faUserCircle,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useApi from "../api/useApi";

function SingleProductPage() {
  const [reviews, setReviews] = useState([
    {
      name: "Mohan Singh",
      rating: 4,
      comment: "Great product!",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([
        ...reviews,
        { ...newReview, date: new Date().toLocaleDateString() },
      ]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  const { id } = useParams();
  const products = useApi();
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  // Show a loading indicator if product data is not available
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <span
        className=""
        style={{
          display: "inline-block",
          fontSize: "15px",
          marginTop: "70px",
          marginLeft: "80px",
          padding: "30px 0px",
        }}
      >
        Home <FontAwesomeIcon icon={faAngleRight} className="ms-3 me-3" /> Shop{" "}
        <FontAwesomeIcon icon={faAngleRight} className="ms-3 me-3" />
        <span style={{ color: "#aeacac" }}>Product-Detail</span>
      </span>

      <div className="Detailproduct py-5">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-7 d-flex">
              <div className="small-img-group d-flex flex-column me-3">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    className="img-fluid small-img"
                    src={product.image}
                    alt={`thumbnail${index + 1}`}
                  />
                ))}
              </div>
              <div className="main-img-container">
                <img
                  className="img-fluid main-img"
                  src={product.image}
                  alt="Main product"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-5">
              <span style={{ color: "#aeacac", fontSize: "14px" }}>
                Men / Women
              </span>
              <h1 className="product-title mb-3 mt-3">{product.title}</h1>
              <p className="product-description text-muted mb-4">
                {product.description}
              </p>
              <div className="freeDelivery mb-4">
                <span>
                  <FontAwesomeIcon icon={faTruck} className="me-3" /> FREE
                  DELIVERY
                </span>
              </div>
              <div className="price-review mb-4 d-flex">
                <h4 className="price mb-2 me-5">Rs. {product.price}</h4>
                <span className="review text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{
                        color: i < 4 ? "orange" : "#ddd",
                        fontSize: "13px",
                      }}
                    />
                  ))}
                </span>
              </div>

              <div className="product-options mb-4 d-flex align-items-center">
                <span className="me-4">Color:</span>
                <div className="d-flex gap-2">
                  {["red", "blue", "green", "black"].map((color) => (
                    <div
                      key={color}
                      className="color-swatch"
                      style={{
                        backgroundColor: color,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="selectSize mb-4 d-flex align-items-center">
                <span className="me-4">Size:</span>
                <select className="form-select w-100">
                  {["S", "M", "L", "XL"].map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="quantity-add d-flex align-items-center">
                <span className="me-3">Quantity:</span>
                <button
                  className="btn me-2"
                  onClick={handleDecrement}
                  style={{ border: "1px solid #e8e8e8" }}
                >
                  -
                </button>
                <input
                  type="text"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="form-control w-25 me-2"
                  readOnly
                />
                <button
                  className="btn me-4"
                  onClick={handleIncrement}
                  style={{ border: "1px solid #e8e8e8" }}
                >
                  +
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: "#ff414d", color: "#fff" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="reviews-section mt-5">
            <h4>Customer Reviews</h4>
            <div className="review-list mt-4">
              {reviews.map((review, index) => (
                <div key={index} className="review mb-3 p-3 border rounded">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size="2x"
                      className="me-3"
                    />
                    <div>
                    <small className="" style={{color: "#ff414d"}}>{review.date}</small>
                      <h6 className="mb-0">{review.name}</h6>
                      
                    </div>
                    <span className="ms-auto text-warning">
                      {[...Array(5)].map((index, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          style={{
                            color: i < review.rating ? "orange" : "#ddd",
                          }}
                        />
                      ))}
                    </span>
                  </div>
                  <p className="mt-2 ms-5">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Add a Review Form */}
            <form onSubmit={handleReviewSubmit} className="mt-4">
              <h4>Add a Review</h4>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={newReview.name}
                  onChange={(e) =>
                    setNewReview({ ...newReview, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <select
                  className="form-select"
                  id="rating"
                  value={newReview.rating}
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      rating: parseInt(e.target.value),
                    })
                  }
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#ff414d", color: "#fff" }}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
