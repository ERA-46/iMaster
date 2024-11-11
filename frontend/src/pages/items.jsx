import { useEffect, useState } from "react";
import ItemCard from "../components/itemCard";

const Items = () => {

    const [items, setItems] = useState(null);

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
    
    return (
        <div className="container mt-4">
            <div className="row">
            {items && items.map((item) => <ItemCard key={item._id} item={item}/>)}
            </div>
        </div>
    );
}
 
export default Items;