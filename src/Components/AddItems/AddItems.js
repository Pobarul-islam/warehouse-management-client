import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import './Additem.css';

const AddItems = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myitem';

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = `https://rocky-reef-06077.herokuapp.com/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // const name = data.name
            // const price = data.price 
            // const img = data.img 
            // const quantity
            body: JSON.stringify(data)

        })
            .then(res => {
                console.log(res)
                reset()
                toast('New Item Added')
            })



    };


    return (
        <div>
            <div className='w-50 mx-auto additem'>
                <h2 className='text-center text-primary'>Add Product</h2>
                <form className='d-flex flex-column mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2' placeholder='Name' {...register("name")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='Suppllyer Name' {...register("suppllyer")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, maxLength: 20 })} />



                    <input className='btn btn-primary w-25 mx-auto mt-3' type="Submit" value="Add Product" />
                </form>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;