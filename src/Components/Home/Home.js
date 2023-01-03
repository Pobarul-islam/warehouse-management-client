import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../img/slider-2.jpg';
import UseUsers from '../../hooks/UseUsers';
import SingleProducts from '../SingleProducts/SingleProducts';
import Footer from '../Footer/Footer';
import { Link, Navigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import Progress from '../Progress/Progress';

const Home = ({ user }) => {
  const usersData = UseUsers('http://localhost:5000/service');
  // console.log(usersData)
  if (usersData.length) {
    usersData.length = 6;
  }

  // console.log(usersData)
  return (
    <div>
      <div className="mt-5">
        <Slider></Slider>
      </div>

      <section className="container">
        <h2 className="text-center text-primary">Watches About</h2>

        <div className="homesection container mt-5 row ">
          <div className="heading-text col-12 col-lg-6 ">
            <h3 className="">
              Choose Your <br /> Favorite Item & <br /> Collect Super <br />{' '}
              Discount.
            </h3>

            <p>
              The important characteristics of a good quality watch MATERIAL OF
              A WATCH. A quality watch is at least made of Stainless Steel. ...
              KIND OF WATCH GLASS. ... THE WATCH MOVEMENT. ... WATER RESISTANCE
              OF A WATCH. ... ALSO AN AFFORDABLE WATCH HAS A BEAUTIFUL FINISH.
              ... THE NAME AND HERITAGE OF A WATCH BRAND.
            </p>

            <button className="btn btn-primary mb-3">Explore Now</button>
          </div>

          <div className="col-12 col-lg-6">
            <img className="image-heading img-fluid" src={banner} alt="" />
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-3">
        <h1 className="text-center">Our Watches</h1>
        <div className="row container">
          {usersData?.map((user) => (
            <SingleProducts key={user.id} user={user}></SingleProducts>
          ))}
        </div>
      </div>
      <Progress></Progress>
      <Footer></Footer>
    </div>
  );
};

export default Home;
