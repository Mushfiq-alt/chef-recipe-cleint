import { FaQuoteLeft } from "react-icons/fa";

import "./ReviewSliders.css";

const ReviewsSilders = () => {
  return (
    <section>
      <div className="container">
        <div className="testimonials">
          <div
            id="carouselExampleControls"
            className="carousel slide shadow p-3 mb-5 bg-white rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>Jordan Harley</h2>
                          <h4>Artist</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          "Fantastic kitchen food store! They offer a wide range of high-quality ingredients, cookware, and gadgets. The staff is knowledgeable and helpful. A must-visit for any cooking enthusiast!"
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="carousel-item">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>Karol R.</h2>
                          <h4>Financial Analyst</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          "KitKitchen is a culinary haven that not only satisfies taste buds but also caters to budget-conscious foodies. Its diverse selection of affordable ingredients and budget-friendly cookware make it a wise choice for any financially savvy cook."
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="carousel-item">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>Stoward larry</h2>
                          <h4>Actor</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          The chef was good. I found the chef of my choice very
                          easily. Highly recommended.
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"     
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSilders;
