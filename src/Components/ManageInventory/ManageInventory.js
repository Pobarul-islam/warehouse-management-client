import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import ProtectedInventor from '../ProtectedInventor/ProtectedInventor';

const ManageInventory = () => {
  const [control, setControl] = useState(true);
  const handleControl = (event) => {
    setControl(!control);
  };
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch('https://warehouseserver.onrender.com/service')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [control]);
  // console.log(allProducts)

  return (
    <div className="container manageinventory mb-3">
      <h1 className="text-center">Our Watches {allProducts.length}</h1>
      <div className="row">
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

export default ManageInventory;
