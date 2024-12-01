import '../css/itemCard.css';
const ItemCard = ({item, handleUpdate, handleDelete}) => {
    return (
        <div className="item-card d-flex align-items-center border rounded p-3 mb-3">
            <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="item-image me-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="item-details flex-grow-1">
                <h3>{item.name}</h3>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Stock:</strong> {item.quantity}</p>
            </div>
            <div className="item-actions text-center">
                <button className="btn btn-primary mb-2" onClick={() => handleUpdate(item)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
        </div>
     
    );
}

export default ItemCard;