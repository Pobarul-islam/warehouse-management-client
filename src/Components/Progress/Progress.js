import React from 'react';

const Progress = () => {
    return (
        <div>
            <h2 className='text-center'>Progress Info</h2>
          
            <div className=' container mt-5'>
                <div className='row'>
                    <div className='col-3 card text-center '><h4>Total Watches</h4>
                        <h6>504738+</h6>
                    </div>
                    <div className='col-3 card text-center'><h4></h4>
                        <h4>Ourt Client</h4>
                        <h6>89680+</h6>
                    </div>
                    <div className='col-3 card text-center'><h4>Service Point</h4>
                        <h6>7860+</h6>
                        
                    </div>
                    <div className='col-3 card text-center'><h4>Warranty Service</h4>
                        <h6>78987+</h6>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Progress;