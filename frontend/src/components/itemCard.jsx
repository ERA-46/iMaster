const ItemCard = ({item}) => {
    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={`http://localhost:5000${item.image}`} className="card-img-top p-2" alt={item.name} />
            <div className="card-body">
                <p className="card-text">{item.name}</p>
            </div>
        </div>       
    );
}
 
export default ItemCard;
