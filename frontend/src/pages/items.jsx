import { useEffect, useState } from "react";
import ItemCard from "../components/itemCard";
import { useNavigate } from 'react-router-dom';

const Items = () => {

    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchItems = async() => {
            const response = await fetch('/api/items');
            const json = await response.json();

            if(response.ok){
                setItems(json.items);
            }
        }
        fetchItems();
        
    },[]);

    const handleAddNewItem = () => {
        navigate('/items/add-new-item');
    }

    const handleUpdate = (item) => {
        navigate(`/items/${item._id}/update-item`, {state: {item} });
    }

    const handleDelete = async(id) => {
        const confirmDel = window.confirm('Are you sure you want to delete this item?');
        if(confirmDel){
            const response = await fetch(`/api/items/${id}`, {method: 'DELETE'});

            if(response.ok){
                alert('Item deleted!')
                setItems(items.filter(item => item._id!== id));
            }else{
                alert('Failed to delete item.')
            }
        }
    };
    
    return (
        <div className="container mt-4">
            <div className="item-actions text-center mt-5 mb-5">
                <button className="btn btn-info" onClick={handleAddNewItem}>Add Item</button>
            </div>

            <div className="row">
            {items && items.map((item) => <ItemCard key={item._id} item={item} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)}
            </div>
        </div>
    );
};
 
export default Items;