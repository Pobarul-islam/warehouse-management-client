import useServices from '../About/hooks2/UseService';
import './ManageInventory.css';

const ManageInventory = () => {


    const [service, setService] = useServices([]);

    const handleDelete = id => {
        const proced = window.confirm('Are You Sure ?');
        if (proced) {
            const url = `http://localhost:5000/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = service.filter(service => service._id !== id)
                    setService(remaining);
                })
        }
    }




    return (


        <div className='mt-5 container  productDelete'>


            {

                service.map(service => <div key={service._id}>
                    <div className=''>

                        <div className=' p-5 col-10 '>

                            <img className='w-50' src={service.img} alt="" />
                            <h2>{service.name}</h2>
                            <p>Price: {service.price}</p>
                            <p>Quantity: {service.quantity}</p>
                            <p>Supplayer: {service.suppllyer}</p>

                        </div>
                        {/* <div className='col-2 deletebtn'>
                            <button className='btn btn-primary'>Delete</button>
                        </div> */}

                        <div>
                            <h5 className='btn btn-primary'>{ } <button className='btn text-white' onClick={() => handleDelete(service._id)}>Delete</button></h5>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ManageInventory;