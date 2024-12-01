import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { itemId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
  

    // Handle missing state
    useEffect(() => {
        if (state?.item) {
            // If item data is passed in state, populate the form
            const { name, price, quantity } = state.item;
            setName(name);
            setPrice(price);
            setQuantity(quantity);
        } else {
            // Fetch item details from backend if state is not available
            fetch(`/api/items/${itemId}`)
                .then((res) => res.json())
                .then((data) => {
                    setName(data.name);
                    setPrice(data.price);
                    setQuantity(data.quantity);
                })
                .catch((error) => console.error('Error fetching item:', error));
        }
    }, [state, itemId]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedItem = { name, price, quantity };
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedItem),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Item updated successfully!');
            navigate('/items'); // Redirect to items page
        } else {
            alert('Failed to update item.');
        }
    };

    return (
        <div className="m-5">
            <h1 className="mb-4">Update - {name}</h1>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                    />
                </div>
                <button className="btn btn-primary mt-3">Add Item</button>
                
            </form>
        </div>
    );
};


export default UpdateItem;
