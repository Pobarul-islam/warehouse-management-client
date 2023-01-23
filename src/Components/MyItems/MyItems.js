import React from 'react';
import './Myitems.css';
import FilipBox from '../../FilibBox/FilipBox';
import Package from '../../Package/Package';
import Footer from '../Footer/Footer';

const MyItems = () => {
  return (
    <div>
      <div className="myitems">
        <FilipBox />
        <Package />
        <Footer />
      </div>
    </div>
  );
};

export default MyItems;
