import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import './Loading.css';
const Loading = () => {
    return (
        <div className='loading-page w-100 mx-auto text-center'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    )
}

export default Loading