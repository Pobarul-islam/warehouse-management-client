// import React, { useEffect, useState } from 'react';
// import { Button, FormControl, InputGroup } from 'react-bootstrap';
// import Service from '../../Service/Service';
// import './Services.css';

// const Services = () => {
//     // const [service, setService] = useProducts();
//     const [service, setService] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/service')
//             .then(res => res.json())
//             .then(data => setService(data))
//     }, [])




//     return (
//         <div className='services-section'>
//             < h2 className='text-title' > Our Watches</ h2>


//             <div className='d-flex'>




//                 <div className='services-container container col-10'>
//                     {
//                         service.map(service => <Service
//                             key={service._id}
//                             service={service}

//                         ></Service>)
//                     }
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Services;