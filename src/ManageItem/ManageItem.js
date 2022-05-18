import React from 'react';
import useProducts from '../Components/Hooks/useProducts';

const ManageItem = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const procced = window.confirm('Are you sure?')
        if (procced) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                })

        }

    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Manage Your Products</h2>
            {
                products.map(products => <div key={products._id}>
                    <div className='w-50 mx-auto'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{products.name}</li>
                            <li class="list-group-item"><img className='w-50' src={products.img} alt="" /></li>

                        </ul>
                        <div className='w-25 mx-auto'> <button onClick={() => handleDelete(products._id)} className='btn btn-danger'>Delete</button></div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageItem;