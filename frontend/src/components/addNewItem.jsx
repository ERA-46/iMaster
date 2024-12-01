import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const AddNewItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);
    const[error, setError] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('quantity', stock);
        formData.append('image', image); // Assuming `image` is a file object
    
        const response = await fetch('/api/items', {
            method: 'POST',
            body: formData, // No need to set `Content-Type` for FormData; it's handled automatically
        });
    
        const json = await response.json();
    
        if (!response.ok) {
            setError(json.error);
        } else {
            setError(null);
            alert('Item added successfully!');
            setName('');
            setPrice('');
            setDescription('');
            setStock('');
            setImage(null);
            
            navigate('/items');
        }
    };

    return (
        <div className="m-5">
            <h1 className="mb-4">Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setStock(e.target.value)}
                        value={stock}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Item Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <button className="btn btn-primary mt-3">Add Item</button>
                
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default AddNewItem;
