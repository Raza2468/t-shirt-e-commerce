import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css"
import bannerImg from './banner-img.png'
import Svg from './header-logo-1.svg'
import TShirt from './trending-product-1.png'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Carousel from "react-elastic-carousel";


export default function NavBar() {

  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };
  const styles = {
    button: {

      background: "transparent",
      outline: "none",
      color: "black",
      border: "none",
      fontSize: 26
    },
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container -d-flx aling-item-center">
          <h3 class="teck-header-text"> Spend $50 for free shipping </h3>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light" id="navbarLogo">
          <div class="container-fluid">
            <nav>
              <Button shape="circle" style={styles.button} onClick={showDrawer}>
                <MenuOutlined style={{ color: "white" }} />
              </Button>
            </nav>
            <span class-="text-center"><img src={Svg} /></span>

            <div class="d-flex align-items-center">
              <a class="text-reset me-3" href="#" >
                <ShoppingCartOutlined style={{ fontSize: "33px" }} />
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>

              {/* <!-- Avatar --> */}

              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    class="rounded-circle"
                    height="45"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </header>

      {/* <!-- Navbar --> */}
      <Drawer
        visible={isVisible}
        placement="left"
        onClose={closeDrawer}
        title="My Drawer"

      >
        {/* <button type="button" class="btn-close text-reset" onClick={closeDrawer} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

        {/* <Divider /> */}
        <p id="nav-item">Home</p>
        <Divider />
        <p id="nav-item">About Us</p>
        <Divider />
        <p id="nav-item">Collection</p>
        <Divider />
        <p id="nav-item">Subcription</p>
        <Divider />
        <p id="nav-item">Contact Us</p>
      </Drawer>

      <div>
        <section id="hero" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row gy-4 d-flex justify-content-between">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 data-aos="fade-up">Do Well, Live Well & Dress Really Well</h2>
                <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien,
                  mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                <a class="teck-banner-btn" href="collection.html" role="button">SHOP NOW!</a>
              </div>

              <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src={bannerImg} class="img-fluid mb-3 mb-lg-0" alt="" />
              </div>
            </div>
          </div>
        </section>


        <br />
        <br />
        <br />
        <br />

        <div className="">
          <h1 class="text-center">Best Selling Product </h1>
         <br />
         <br />
          <div class="selling-product-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin a tempus augue, id convallis est. Nulla neque sapien,
              mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet
              luctus erat, at ullamcorper neque feugiat id.
            </p>
          </div>

         <br />
          <Carousel breakPoints={breakPoints}>

            <div id=""> <div class="content-with-image">

              <div class="image">
                <img src={TShirt} class="carousal-img img-fluid" />
              </div>

              <div class="desc text-center">
                <h2 >Menace Shirt Design</h2>
              </div>

            </div>

              <div class="member-text text-center">
                <h4>Menace Shirt Design</h4>
                <p class="over-line">Retail: $90.00</p>
                <p>3 For $30 (B1G2)</p>
              </div>

              <div class="member-link text-center">
                <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
              </div>
            </div>

            <div id="tShirtCart">Two</div>
            <div id="tShirtCart">Three</div>
            <div id="tShirtCart">Four</div>
            <div id="tShirtCart">Five</div>
            <div id="tShirtCart">Six</div>
            <div id="tShirtCart">Seven</div>
            <div id="tShirtCart">Eight</div>
          </Carousel>
        </div>

      </div>
    </>
  );
}
