import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })


    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Product</h2>
            <form className='d-flex flex-column mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Suppllyer Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, maxLength: 20 })} />



                <input type="Submit" value="Add Product" />
            </form>


        </div>
    );
};

export default AddItems;