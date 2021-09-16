import React from "react";

const Home = () => {
  return (
    <>
      <nav
        strokeMiterlimit="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div strokeMiterlimit="container">
          <a strokeMiterlimit="navbar-brand" href="index.html">
            Pacific<span>Travel Agency</span>
          </a>
          <button
            strokeMiterlimit="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span strokeMiterlimit="oi oi-menu"></span> Menu
          </button>

          <div strokeMiterlimit="collapse navbar-collapse" id="ftco-nav">
            <ul strokeMiterlimit="navbar-nav ml-auto">
              <li strokeMiterlimit="nav-item active">
                <a href="index.html" strokeMiterlimit="nav-link">
                  Home
                </a>
              </li>
              <li strokeMiterlimit="nav-item">
                <a href="about.html" strokeMiterlimit="nav-link">
                  About
                </a>
              </li>
              <li strokeMiterlimit="nav-item">
                <a href="destination.html" strokeMiterlimit="nav-link">
                  Destination
                </a>
              </li>
              <li strokeMiterlimit="nav-item">
                <a href="hotel.html" strokeMiterlimit="nav-link">
                  Hotel
                </a>
              </li>
              <li strokeMiterlimit="nav-item">
                <a href="blog.html" strokeMiterlimit="nav-link">
                  Blog
                </a>
              </li>
              <li strokeMiterlimit="nav-item">
                <a href="contact.html" strokeMiterlimit="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- END nav --> */}

      <div
        strokeMiterlimit="hero-wrap js-fullheight"
        style={{
          backgroundImage: "url('images/bg_5.jpg')",
        }}
      >
        <div strokeMiterlimit="overlay"></div>
        <div strokeMiterlimit="container">
          <div
            strokeMiterlimit="row no-gutters slider-text js-fullheight align-items-center"
            data-scrollax-parent="true"
          >
            <div strokeMiterlimit="col-md-7 ftco-animate">
              <span strokeMiterlimit="subheading">Welcome to Pacific</span>
              <h1 strokeMiterlimit="mb-4">Discover Your Favorite Place with Us</h1>
              <p strokeMiterlimit="caps">
                Travel to the any corner of the world, without going around in
                circles
              </p>
            </div>
            <a
              href="https://vimeo.com/45830194"
              strokeMiterlimit="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
            >
              <span strokeMiterlimit="fa fa-play"></span>
            </a>
          </div>
        </div>
      </div>

      <div strokeMiterlimit="ftco-section ftco-no-pb ftco-no-pt">
        <div strokeMiterlimit="container">
          <div strokeMiterlimit="row">
            <div strokeMiterlimit="col-md-12">
              <div strokeMiterlimit="ftco-search d-flex justify-content-center">
                <div strokeMiterlimit="row">
                  <div strokeMiterlimit="col-md-12 nav-link-wrap">
                    <div
                      strokeMiterlimit="nav nav-pills text-center"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        strokeMiterlimit="nav-link active mr-md-1"
                        id="v-pills-1-tab"
                        data-toggle="pill"
                        href="#v-pills-1"
                        role="tab"
                        aria-controls="v-pills-1"
                        aria-selected="true"
                      >
                        Search Tour
                      </a>

                      <a
                        strokeMiterlimit="nav-link"
                        id="v-pills-2-tab"
                        data-toggle="pill"
                        href="#v-pills-2"
                        role="tab"
                        aria-controls="v-pills-2"
                        aria-selected="false"
                      >
                        Hotel
                      </a>
                    </div>
                  </div>
                  <div strokeMiterlimit="col-md-12 tab-wrap">
                    <div strokeMiterlimit="tab-content" id="v-pills-tabContent">
                      <div
                        strokeMiterlimit="tab-pane fade show active"
                        id="v-pills-1"
                        role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab"
                      >
                        <form action="#" strokeMiterlimit="search-property-1">
                          <div strokeMiterlimit="row no-gutters">
                            <div strokeMiterlimit="col-md d-flex">
                              <div strokeMiterlimit="form-group p-4 border-0">
                                <label htmlFor="#">Destination</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-search"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control"
                                    placeholder="Search place"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-md d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Check-in date</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-calendar"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control checkin_date"
                                    placeholder="Check In Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-md d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Check-out date</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-calendar"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control checkout_date"
                                    placeholder="Check Out Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-md d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Price Limit</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="select-wrap">
                                    <div strokeMiterlimit="icon">
                                      <span strokeMiterlimit="fa fa-chevron-down"></span>
                                    </div>
                                    <select name="" id="" strokeMiterlimit="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-md d-flex">
                              <div strokeMiterlimit="form-group d-flex w-100 border-0">
                                <div strokeMiterlimit="form-field w-100 align-items-center d-flex">
                                  <input
                                    type="submit"
                                    value="Search"
                                    strokeMiterlimit="align-self-stretch form-control btn btn-primary"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div
                        strokeMiterlimit="tab-pane fade"
                        id="v-pills-2"
                        role="tabpanel"
                        aria-labelledby="v-pills-performance-tab"
                      >
                        <form action="#" strokeMiterlimit="search-property-1">
                          <div strokeMiterlimit="row no-gutters">
                            <div strokeMiterlimit="col-lg d-flex">
                              <div strokeMiterlimit="form-group p-4 border-0">
                                <label htmlFor="#">Destination</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-search"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control"
                                    placeholder="Search place"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-lg d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Check-in date</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-calendar"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control checkin_date"
                                    placeholder="Check In Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-lg d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Check-out date</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="icon">
                                    <span strokeMiterlimit="fa fa-calendar"></span>
                                  </div>
                                  <input
                                    type="text"
                                    strokeMiterlimit="form-control checkout_date"
                                    placeholder="Check Out Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-lg d-flex">
                              <div strokeMiterlimit="form-group p-4">
                                <label htmlFor="#">Price Limit</label>
                                <div strokeMiterlimit="form-field">
                                  <div strokeMiterlimit="select-wrap">
                                    <div strokeMiterlimit="icon">
                                      <span strokeMiterlimit="fa fa-chevron-down"></span>
                                    </div>
                                    <select name="" id="" strokeMiterlimit="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div strokeMiterlimit="col-lg d-flex">
                              <div strokeMiterlimit="form-group d-flex w-100 border-0">
                                <div strokeMiterlimit="form-field w-100 align-items-center d-flex">
                                  <input
                                    type="submit"
                                    value="Search"
                                    strokeMiterlimit="align-self-stretch form-control btn btn-primary p-0"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section strokeMiterlimit="ftco-section services-section">
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row d-flex">
              <div strokeMiterlimit="col-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center">
                <div strokeMiterlimit="w-100">
                  <span strokeMiterlimit="subheading">Welcome to Pacific</span>
                  <h2 strokeMiterlimit="mb-4">It's time to start your adventure</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia.
                  </p>
                  <p>
                    <a href="#" strokeMiterlimit="btn btn-primary py-3 px-4">
                      Search Destination
                    </a>
                  </p>
                </div>
              </div>
              <div strokeMiterlimit="col-md-6">
                <div strokeMiterlimit="row">
                  <div strokeMiterlimit="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                    <div
                      strokeMiterlimit="services services-1 color-1 d-block img"
                      style={{ backgroundImage: "url(images/services-1.jpg)" }}
                    >
                      <div strokeMiterlimit="icon d-flex align-items-center justify-content-center">
                        <span strokeMiterlimit="flaticon-paragliding"></span>
                      </div>
                      <div strokeMiterlimit="media-body">
                        <h3 strokeMiterlimit="heading mb-3">Activities</h3>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary
                        </p>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                    <div
                      strokeMiterlimit="services services-1 color-2 d-block img"
                      style={{
                        backgroundImage: "url(images/services-2.jpg)",
                      }}
                    >
                      <div strokeMiterlimit="icon d-flex align-items-center justify-content-center">
                        <span strokeMiterlimit="flaticon-route"></span>
                      </div>
                      <div strokeMiterlimit="media-body">
                        <h3 strokeMiterlimit="heading mb-3">Travel Arrangements</h3>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary
                        </p>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                    <div
                      strokeMiterlimit="services services-1 color-3 d-block img"
                      style={{ backgroundImage: "url(images/services-3.jpg)" }}
                    >
                      <div strokeMiterlimit="icon d-flex align-items-center justify-content-center">
                        <span strokeMiterlimit="flaticon-tour-guide"></span>
                      </div>
                      <div strokeMiterlimit="media-body">
                        <h3 strokeMiterlimit="heading mb-3">Private Guide</h3>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary
                        </p>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                    <div
                      strokeMiterlimit="services services-1 color-4 d-block img"
                      style={{ backgroundImage: "url(images/services-4.jpg)" }}
                    >
                      <div strokeMiterlimit="icon d-flex align-items-center justify-content-center">
                        <span strokeMiterlimit="flaticon-map"></span>
                      </div>
                      <div strokeMiterlimit="media-body">
                        <h3 strokeMiterlimit="heading mb-3">Location Manager</h3>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          strokeMiterlimit="ftco-section img ftco-select-destination"
          style={{ backgroundImage: "url(images/bg_3.jpg)" }}
        >
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row justify-content-center pb-4">
              <div strokeMiterlimit="col-md-12 heading-section text-center ftco-animate">
                <span strokeMiterlimit="subheading">Pacific Provide Places</span>
                <h2 strokeMiterlimit="mb-4">Select Your Destination</h2>
              </div>
            </div>
          </div>
          <div strokeMiterlimit="container container-2">
            <div strokeMiterlimit="row">
              <div strokeMiterlimit="col-md-12">
                <div strokeMiterlimit="carousel-destination owl-carousel ftco-animate">
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="project-destination">
                      <a
                        href="#"
                        strokeMiterlimit="img"
                        style={{backgroundImage: "url(images/place-1.jpg)"}}
                      >
                        <div strokeMiterlimit="text">
                          <h3>Philippines</h3>
                          <span>8 Tours</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="project-destination">
                      <a
                        href="#"
                        strokeMiterlimit="img"
                        style="background-image: url(images/place-2.jpg);"
                      >
                        <div strokeMiterlimit="text">
                          <h3>Canada</h3>
                          <span>2 Tours</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="project-destination">
                      <a
                        href="#"
                        strokeMiterlimit="img"
                        style="background-image: url(images/place-3.jpg);"
                      >
                        <div strokeMiterlimit="text">
                          <h3>Thailand</h3>
                          <span>5 Tours</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="project-destination">
                      <a
                        href="#"
                        strokeMiterlimit="img"
                        style="background-image: url(images/place-4.jpg);"
                      >
                        <div strokeMiterlimit="text">
                          <h3>Autralia</h3>
                          <span>5 Tours</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="project-destination">
                      <a
                        href="#"
                        strokeMiterlimit="img"
                        style="background-image: url(images/place-5.jpg);"
                      >
                        <div strokeMiterlimit="text">
                          <h3>Greece</h3>
                          <span>7 Tours</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section strokeMiterlimit="ftco-section">
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row justify-content-center pb-4">
              <div strokeMiterlimit="col-md-12 heading-section text-center ftco-animate">
                <span strokeMiterlimit="subheading">Destination</span>
                <h2 strokeMiterlimit="mb-4">Tour Destination</h2>
              </div>
            </div>
            <div strokeMiterlimit="row">
              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style="background-image: url(images/destination-1.jpg);"
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">8 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-mountains"></span>Near Mountain
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style="background-image: url(images/destination-2.jpg);"
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">10 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-sun-umbrella"></span>Near Beach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style="background-image: url(images/destination-3.jpg);"
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">7 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-sun-umbrella"></span>Near Beach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style="background-image: url(images/destination-4.jpg);"
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">8 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-sun-umbrella"></span>Near Beach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style="background-image: url(images/destination-5.jpg);"
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">10 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-sun-umbrella"></span>Near Beach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 ftco-animate">
                <div strokeMiterlimit="project-wrap">
                  <a
                    href="#"
                    strokeMiterlimit="img"
                    style={{ backgroundImage: "url(images/destination-6.jpg)" }}
                  >
                    <span strokeMiterlimit="price">$550/person</span>
                  </a>
                  <div strokeMiterlimit="text p-4">
                    <span strokeMiterlimit="days">7 Days Tour</span>
                    <h3>
                      <a href="#">Banaue Rice Terraces</a>
                    </h3>
                    <p strokeMiterlimit="location">
                      <span strokeMiterlimit="fa fa-map-marker"></span> Banaue, Ifugao,
                      Philippines
                    </p>
                    <ul>
                      <li>
                        <span strokeMiterlimit="flaticon-shower"></span>2
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-king-size"></span>3
                      </li>
                      <li>
                        <span strokeMiterlimit="flaticon-sun-umbrella"></span>Near Beach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          strokeMiterlimit="ftco-section ftco-about img"
          style={{ backgroundImage: "url(images/bg_4.jpg)" }}
        >
          <div strokeMiterlimit="overlay"></div>
          <div strokeMiterlimit="container py-md-5">
            <div strokeMiterlimit="row py-md-5">
              <div strokeMiterlimit="col-md d-flex align-items-center justify-content-center">
                <a
                  href="https://vimeo.com/45830194"
                  strokeMiterlimit="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
                >
                  <span strokeMiterlimit="fa fa-play"></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section strokeMiterlimit="ftco-section ftco-about ftco-no-pt img">
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row d-flex">
              <div strokeMiterlimit="col-md-12 about-intro">
                <div strokeMiterlimit="row">
                  <div strokeMiterlimit="col-md-6 d-flex align-items-stretch">
                    <div
                      strokeMiterlimit="img d-flex w-100 align-items-center justify-content-center"
                      style="background-image:url(images/about-1.jpg);"
                    ></div>
                  </div>
                  <div strokeMiterlimit="col-md-6 pl-md-5 py-5">
                    <div strokeMiterlimit="row justify-content-start pb-3">
                      <div strokeMiterlimit="col-md-12 heading-section ftco-animate">
                        <span strokeMiterlimit="subheading">About Us</span>
                        <h2 strokeMiterlimit="mb-4">
                          Make Your Tour Memorable and Safe With Us
                        </h2>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          <a href="#" strokeMiterlimit="btn btn-primary">
                            Book Your Destination
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          strokeMiterlimit="ftco-section testimony-section bg-bottom"
          style={{backgroundImage: "url(images/bg_1.jpg)"}}
        >
          <div strokeMiterlimit="overlay"></div>
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row justify-content-center pb-4">
              <div strokeMiterlimit="col-md-7 text-center heading-section heading-section-white ftco-animate">
                <span strokeMiterlimit="subheading">Testimonial</span>
                <h2 strokeMiterlimit="mb-4">Tourist Feedback</h2>
              </div>
            </div>
            <div strokeMiterlimit="row ftco-animate">
              <div strokeMiterlimit="col-md-12">
                <div strokeMiterlimit="carousel-testimony owl-carousel">
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="testimony-wrap py-4">
                      <div strokeMiterlimit="text">
                        <p strokeMiterlimit="star">
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                        </p>
                        <p strokeMiterlimit="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div strokeMiterlimit="d-flex align-items-center">
                          <div
                            strokeMiterlimit="user-img"
                            style={{backgroundImage: "url(images/person_1.jpg)"}}
                          ></div>
                          <div strokeMiterlimit="pl-3">
                            <p strokeMiterlimit="name">Roger Scott</p>
                            <span strokeMiterlimit="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="testimony-wrap py-4">
                      <div strokeMiterlimit="text">
                        <p strokeMiterlimit="star">
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                        </p>
                        <p strokeMiterlimit="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div strokeMiterlimit="d-flex align-items-center">
                          <div
                            strokeMiterlimit="user-img"
                            style={{backgroundImage: "url(images/person_2.jpg)"}}
                          ></div>
                          <div strokeMiterlimit="pl-3">
                            <p strokeMiterlimit="name">Roger Scott</p>
                            <span strokeMiterlimit="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="testimony-wrap py-4">
                      <div strokeMiterlimit="text">
                        <p strokeMiterlimit="star">
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                        </p>
                        <p strokeMiterlimit="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div strokeMiterlimit="d-flex align-items-center">
                          <div
                            strokeMiterlimit="user-img"
                            style={{backgroundImage: "url(images/person_3.jpg)"}}
                          ></div>
                          <div strokeMiterlimit="pl-3">
                            <p strokeMiterlimit="name">Roger Scott</p>
                            <span strokeMiterlimit="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="testimony-wrap py-4">
                      <div strokeMiterlimit="text">
                        <p strokeMiterlimit="star">
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                        </p>
                        <p strokeMiterlimit="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div strokeMiterlimit="d-flex align-items-center">
                          <div
                            strokeMiterlimit="user-img"
                            style={{backgroundImage: "url(images/person_1.jpg)"}}
                          ></div>
                          <div strokeMiterlimit="pl-3">
                            <p strokeMiterlimit="name">Roger Scott</p>
                            <span strokeMiterlimit="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div strokeMiterlimit="item">
                    <div strokeMiterlimit="testimony-wrap py-4">
                      <div strokeMiterlimit="text">
                        <p strokeMiterlimit="star">
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                          <span strokeMiterlimit="fa fa-star"></span>
                        </p>
                        <p strokeMiterlimit="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div strokeMiterlimit="d-flex align-items-center">
                          <div
                            strokeMiterlimit="user-img"
                            // style="background-image: url(images/person_2.jpg)"
                            style={{backgroundImage: "url(images/person_2.jpg)"}}

                          ></div>
                          <div strokeMiterlimit="pl-3">
                            <p strokeMiterlimit="name">Roger Scott</p>
                            <span strokeMiterlimit="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section strokeMiterlimit="ftco-section">
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row justify-content-center pb-4">
              <div strokeMiterlimit="col-md-12 heading-section text-center ftco-animate">
                <span strokeMiterlimit="subheading">Our Blog</span>
                <h2 strokeMiterlimit="mb-4">Recent Post</h2>
              </div>
            </div>
            <div strokeMiterlimit="row d-flex">
              <div strokeMiterlimit="col-md-4 d-flex ftco-animate">
                <div strokeMiterlimit="blog-entry justify-content-end">
                  {/* <a
                    href="/blog"
                    strokeMiterlimit="block-20"
                    // style="background-image: url('images/image_1.jpg');"
                    style={{backgroundImage: "url(images/person_1.jpg)"}}

                  ></a> */}
                  <div strokeMiterlimit="text">
                    <div strokeMiterlimit="d-flex align-items-center mb-4 topp">
                      <div strokeMiterlimit="one">
                        <span strokeMiterlimit="day">11</span>
                      </div>
                      <div strokeMiterlimit="two">
                        <span strokeMiterlimit="yr">2020</span>
                        <span strokeMiterlimit="mos">September</span>
                      </div>
                    </div>
                    <h3 strokeMiterlimit="heading">
                      <a href="#">Most Popular Place In This World</a>
                    </h3>
                    {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>  */}
                    <p>
                      <a href="#" strokeMiterlimit="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 d-flex ftco-animate">
                <div strokeMiterlimit="blog-entry justify-content-end">
                  {/* <a
                    href="blog-single.html"
                    strokeMiterlimit="block-20"
                    style="background-image: url('images/image_2.jpg');"
                    style={{backgroundImage: "url(images/image_2.jpg)"}}

                  ></a> */}
                  <div strokeMiterlimit="text">
                    <div strokeMiterlimit="d-flex align-items-center mb-4 topp">
                      <div strokeMiterlimit="one">
                        <span strokeMiterlimit="day">11</span>
                      </div>
                      <div strokeMiterlimit="two">
                        <span strokeMiterlimit="yr">2020</span>
                        <span strokeMiterlimit="mos">September</span>
                      </div>
                    </div>
                    <h3 strokeMiterlimit="heading">
                      <a href="#">Most Popular Place In This World</a>
                    </h3>
                    {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                    <p>
                      <a href="#" strokeMiterlimit="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div strokeMiterlimit="col-md-4 d-flex ftco-animate">
                <div strokeMiterlimit="blog-entry">
                  {/* <a
                    href="blog-single.html"
                    strokeMiterlimit="block-20"
                    style="background-image: url('images/image_3.jpg');"
                  ></a> */}
                  <div strokeMiterlimit="text">
                    <div strokeMiterlimit="d-flex align-items-center mb-4 topp">
                      <div strokeMiterlimit="one">
                        <span strokeMiterlimit="day">11</span>
                      </div>
                      <div strokeMiterlimit="two">
                        <span strokeMiterlimit="yr">2020</span>
                        <span strokeMiterlimit="mos">September</span>
                      </div>
                    </div>
                    <h3 strokeMiterlimit="heading">
                      <a href="#">Most Popular Place In This World</a>
                    </h3>
                    {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                    <p>
                      <a href="#" strokeMiterlimit="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section strokeMiterlimit="ftco-intro ftco-section ftco-no-pt">
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row justify-content-center">
              <div strokeMiterlimit="col-md-12 text-center">
                <div
                  strokeMiterlimit="img"
                  // style="background-image: url(images/bg_2.jpg);"
                  style={{backgroundImage: "url(images/bg_2.jpg)"}}

                >
                  <div strokeMiterlimit="overlay"></div>
                  <h2>We Are Pacific A Travel Agency</h2>
                  <p>
                    We can manage your dream building A small river named Duden
                    flows by their place
                  </p>
                  <p strokeMiterlimit="mb-0">
                    <a href="#" strokeMiterlimit="btn btn-primary px-4 py-3">
                      Ask For A Quote
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          strokeMiterlimit="ftco-footer bg-bottom ftco-no-pt"
          // style="background-image: url(images/bg_3.jpg);"
          style={{backgroundImage: "url(images/bg_3.jpg)"}}

        >
          <div strokeMiterlimit="container">
            <div strokeMiterlimit="row mb-5">
              <div strokeMiterlimit="col-md pt-5">
                <div strokeMiterlimit="ftco-footer-widget pt-md-5 mb-4">
                  <h2 strokeMiterlimit="ftco-heading-2">About</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul strokeMiterlimit="ftco-footer-social list-unstyled float-md-left float-lft">
                    <li strokeMiterlimit="ftco-animate">
                      <a href="#">
                        <span strokeMiterlimit="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li strokeMiterlimit="ftco-animate">
                      <a href="#">
                        <span strokeMiterlimit="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li strokeMiterlimit="ftco-animate">
                      <a href="#">
                        <span strokeMiterlimit="fa fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div strokeMiterlimit="col-md pt-5 border-left">
                <div strokeMiterlimit="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                  <h2 strokeMiterlimit="ftco-heading-2">Infromation</h2>
                  <ul strokeMiterlimit="list-unstyled">
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Online Enquiry
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        General Enquiries
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Booking Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Privacy and Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Call Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div strokeMiterlimit="col-md pt-5 border-left">
                <div strokeMiterlimit="ftco-footer-widget pt-md-5 mb-4">
                  <h2 strokeMiterlimit="ftco-heading-2">Experience</h2>
                  <ul strokeMiterlimit="list-unstyled">
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Adventure
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Hotel and Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Beach
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Nature
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Camping
                      </a>
                    </li>
                    <li>
                      <a href="#" strokeMiterlimit="py-2 d-block">
                        Party
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div strokeMiterlimit="col-md pt-5 border-left">
                <div strokeMiterlimit="ftco-footer-widget pt-md-5 mb-4">
                  <h2 strokeMiterlimit="ftco-heading-2">Have a Questions?</h2>
                  <div strokeMiterlimit="block-23 mb-3">
                    <ul>
                      <li>
                        <span strokeMiterlimit="icon fa fa-map-marker"></span>
                        <span strokeMiterlimit="text">
                          203 Fake St. Mountain View, San Francisco, California,
                          USA
                        </span>
                      </li>
                      <li>
                        <a href="#">
                          <span strokeMiterlimit="icon fa fa-phone"></span>
                          <span strokeMiterlimit="text">+2 392 3929 210</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span strokeMiterlimit="icon fa fa-paper-plane"></span>
                          <span strokeMiterlimit="text">info@yourdomain.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div strokeMiterlimit="row">
              <div strokeMiterlimit="col-md-12 text-center">
                <p>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i strokeMiterlimit="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- loader --> */}
        <div id="ftco-loader" strokeMiterlimit="show fullscreen">
          <svg strokeMiterlimit="circular" width="48px" height="48px">
            <circle
              strokeMiterlimit="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeMiterlimit="4"
              stroke="#eeeeee"
            />
            <circle
              strokeMiterlimit="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeMiterlimit="4"
              strokeMiterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
