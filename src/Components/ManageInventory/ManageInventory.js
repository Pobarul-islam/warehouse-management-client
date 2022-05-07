import useServices from '../About/hooks2/UseService';

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
        <div className='mt-5 w-50 mx-auto'>
            <h2>This is Manage Inventory Page</h2>

            {
                service.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageInventory;