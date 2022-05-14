import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../img/main-banner.jpg';
import UseUsers from '../../hooks/UseUsers';
import SingleProducts from '../SingleProducts/SingleProducts';
import { Link } from 'react-router-dom';

const Home = () => {
    const usersData = UseUsers('http://localhost:5000/service')
    // console.log(usersData)
    if (usersData.length) {
        usersData.length = 6;
    }
    // console.log(usersData)
    return (
        <div>

            <div className='d-flex container'>
                <div className='heading-text col-6'>
                    <h1 className=''>Choose Your <br /> Favorite Item & <br /> Collect Super <br /> Discount.</h1>

                    <p>My dear customer, I always work for the satisfaction of my <br />    <span>client and try to provide something good.</span></p>

                    <button className='btn btn-primary'>Explore Now</button>
                </div>

                <div>
                    <img className='image-heading' src={banner} alt="" />
                </div>
            </div>



            <div className='container mt-5 mb-3'>
                <h1 className='text-center'>Our Watches</h1>
                <div className='row'>
                    {
                        usersData?.map(user => <SingleProducts key={user.id} user={user}></SingleProducts>)

                    }


                </div>
                <Link className='btn btn-primary' to="/inventory/:id">Update</Link>
            </div>


        </div>



    );

};

export default Home;