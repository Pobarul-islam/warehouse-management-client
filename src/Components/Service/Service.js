// import React from 'react';
// import './Service.css';
// import { Link, useNavigate } from 'react-router-dom';


// const Service = ({ service }) => {
//     const { id, name, img, price, description, quantity, suppllyer } = service;
//     const navigate = useNavigate();
//     const navigateToCheckOutPage = id => {
//         navigate(`/checkout/ ${id}`)
//     }

//     return (
//         <div className='watches'>
//             <img className='w-50' src={img} alt="" />
//             <h2>{name}</h2>
//             <p>Price: {price}</p>
//             <p>Quantity: {quantity}</p>
//             <p>Supplayer: {suppllyer}</p>

//             <p className=''><small>{description}</small></p>

//             {/* <button onClick={() => navigateToCheckOutPage(id)} className='btn btn-primary'>Stock Available</button> */}
//             <Link to="/services">
//                 <button className='btn btn-primary'>Update</button>
//             </Link>

//         </div>


//     );
// };

// export default Service;