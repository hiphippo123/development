import {Card} from 'react-bootstrap';

function PlaceItem({item, addToBucketList}) {
    return (
      <Card style={{ width: '24rem' }}>
        {/* photos taken from trip advisor, national geographic, hotels.com, world atlas, britannica */}
        <img src={item.image} alt=""/>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Located in: {item.continent}</p>
        <p>Temperature group: {item.climate}</p>
        <p>Average cost of 7-day trip for solo traveller: ${item.cost}</p>
        <button onClick={() => addToBucketList(item)} >Add To Bucket List</button>
      </Card>
    )
  }

export default PlaceItem;