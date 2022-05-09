import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const AddItems = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        // send data to the server

        fetch('', {
            method: 'POST',
            headers: {
                    'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data =>
                console.log('success' , data)
            )
    }
    return (
        <div className='mt-5'>
            <h2>This is Add Items</h2>

            <div className='col-2 container'>
                <form onSubmit={handleAddItem}>

                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="submit" value='submit' />
                </form>
                {/* 
                <Button className='container btn-primary' variant="outline-white" id="button-addon2">
                    Delevered
                </Button> */}
            </div>

        </div>
    );
};

export default AddItems;