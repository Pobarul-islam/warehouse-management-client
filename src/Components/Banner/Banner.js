import React from 'react';
import './Banner.css';
import banner from '../../img/main-banner.jpg';

const Banner = () => {
    return (
        <div className='container d-flex text-banner'>

            <div className='heading-text col-6'>
                <h1 className=''>Choose Your <br /> Favorite Item & <br /> Collect Super <br /> Discount.</h1>

                <p>My dear customer, I always work for the satisfaction of my <br />    <span>client and try to provide something good.</span></p>

                <button className='btn btn-primary'>Explore Now</button>
            </div>

            <div>
                <img className='image-heading' src={banner} alt="" />
           </div>
        </div>

    );
};

export default Banner;