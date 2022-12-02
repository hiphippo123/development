function BucketList({items, total, removeFromBucketList}) {
    return (
        <div>
            <h2>My Travel Bucket List</h2>
            {items.map((item) => ( // TODO: map bakeryData to BakeryItem components
                <div>
                    <img src={item.image} alt=""/>
                    <h3>{item.name}</h3>
                    <p>Average cost: ${item.cost}</p>
                    <button onClick={() => removeFromBucketList(item)} >Remove From Bucket List</button>
                </div>
                    
            ))}
            <p>Amount needed to save up for all these trips: ${total}</p>       
        </div>
      
    )
  }

export default BucketList;