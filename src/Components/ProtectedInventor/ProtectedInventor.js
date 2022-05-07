import React, { useState } from 'react';

const ProtectedInventor = () => {
    const [user, setUser] = useState();
    const handleLogin = () => setUser({ id: '1', name: 'robin' });
    const handleLogout = () => setUser();
    return (
        <div className='mt-5'>
            <h2>This is Protected Inventor</h2>
        </div>
    );
};

export default ProtectedInventor;