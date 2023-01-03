import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import ProtectedInventor from '../ProtectedInventor/ProtectedInventor';
import './inventory.css';

const Inventory = () => {
  const [control, setControl] = useState(true);
  const handleControl = (event) => {
    setControl(!control);
  };
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [control]);
  // console.log(allProducts)

  return (
    <div className="container inventory mb-3">
      <div className="row">
        <h1 className="text-center text-primary">
          Our Watches {allProducts.length}
        </h1>
        {allProducts?.map((user) => (
          <ProtectedInventor
            key={user._id}
            handleControl={handleControl}
            user={user}
          ></ProtectedInventor>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
