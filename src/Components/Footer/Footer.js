import React, { useEffect, useState } from 'react';

const Footer = () => {
    useEffect(() => {
        getYear();
    }, [])

    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())
    return (
        <div className='bg-black p-4 w-100 mt-5'>
            <div className='fottercontent text-center text-white'>
                &copy;Stock Watches Created by Pobarul islam - {date}
            </div>
        </div>

    );
};

export default Footer;



