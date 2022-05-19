import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../img/main-banner.jpg';
import UseUsers from '../../hooks/UseUsers';
import SingleProducts from '../SingleProducts/SingleProducts';
import Footer from '../Footer/Footer';
import { Link, Navigate } from 'react-router-dom';

const Home = ({ user }) => {
    const usersData = UseUsers('http://localhost:5000/service')
    // console.log(usersData)
    if (usersData.length) {
        usersData.length = 6;
    }


    // console.log(usersData)
    return (
        <div className=''>

            <div className='homesection d-flex container ml-5 row '>
                <div className='heading-text col-12 col-lg-6 '>
                    <h1 className=''>Choose Your <br /> Favorite Item & <br /> Collect Super <br /> Discount.</h1>

                    <p>My dear customer, I always work for the satisfaction of my <br />    <span>client and try to provide something good.</span></p>

                    <button className='btn btn-primary'>Explore Now</button>
                </div>

                <div className='col-12 col-lg-6'>
                    <img className='image-heading img-fluid w-100' src={banner} alt="" />
                </div>
            </div>



            <div className='container mt-5 mb-3'>
                <h1 className='text-center'>Our Watches</h1>
                <div className='row container'>
                    {
                        usersData?.map(user => <SingleProducts key={user.id} user={user}></SingleProducts>)


                    }


                </div>


            </div>
            <Footer></Footer>

        </div>



    );

};

export default Home;