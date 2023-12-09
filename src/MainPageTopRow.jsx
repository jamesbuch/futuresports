import * as React from 'react'

const MainPageTopRow = (props) => {
	return (
		<div className="container">
		<div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="mb-3">
              <h1>Matildas</h1>
            </div>
            <div className="mb-1">
              Video not playing? This is an issue with YouTube itself; please
              open in new window.
            </div>
            <iframe
					className="embeddedVideo"
					style={{ marginRight: '1rem' }}
					src="https://www.youtube.com/embed/5uHC420UdD4"
            ></iframe>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/carousel1.jpg"
                    className="d-block w-100"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/carousel2.jpg"
                    className="d-block w-100"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/carousel3.jpg"
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
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
                data-bs-target="#carouselExampleIndicators"
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
		</div>
	)
}

export default MainPageTopRow
