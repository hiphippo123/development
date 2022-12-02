import './App.css';
import { useState } from "react";
import { Row, Col, Container, Form} from 'react-bootstrap';
import placesData from "./assets/places.json";
import PlaceItem from "./components/PlaceItem.js";
import BucketList from "./components/BucketList.js";
import FilterItem from "./components/FilterItem.js";
import 'bootstrap/dist/css/bootstrap.min.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
placesData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])
  const [filters, setFilters] = useState(["North America", "South America", "Europe", "Asia", "Australia", "Antarctica", "Africa", "Oceania"])
  const [tempFilters, setTempFilters] = useState(["Really Cold", "Cold", "Mild", "Warm", "Really Warm"])
  const [selectedFilters, setSelectedFilters] = useState(0)
  const [selectedTempFilters, setSelectedTempFilters] = useState(0)
  const [placeItems, setPlaceItems] = useState([...placesData])
  const [sortFunction, setSortFunction] = useState(()=>(a, b)=>0)

  const allFilters = ["North America", "South America", "Europe", "Asia", "Australia", "Antarctica", "Africa", "Oceania"]
  const allTempFilters = ["Really Cold", "Cold", "Mild", "Warm", "Really Warm"]
  
  function AddToBucketList(item) {
    if (!cart.includes(item)) {
      setCart([...cart, item])
      setTotal(total + parseInt(item.cost))
    }
  }

  function RemoveFromBucketList(item) {
    if (cart.includes(item)) {
      let index = cart.indexOf(item)
      let tempCart = cart
      tempCart.splice(index, 1)
      setCart(tempCart)
      setTotal(total - parseInt(item.cost))
    }
  }

  function sortItems(val) {
    if (val == 0) {
      setPlaceItems([...placesData])
      setSortFunction(()=>(a,b)=>0)
    } else if (val == -1) {
      setSortFunction(()=>(a,b)=>b.cost - a.cost)
    } else if (val == 1) {
      setSortFunction(()=>(a,b)=>a.cost - b.cost)
    }
  }

  function FilterItems(filter) {
    let currFilters = filters
    let currSelected = selectedFilters
    if (currSelected == 0) {
      currFilters = []
    }
    if (!currFilters.includes(filter)) {
      currFilters = [...currFilters, filter]
      currSelected += 1
    } else {
      let index = currFilters.indexOf(filter)
      currFilters.splice(index, 1)
      currSelected -= 1
    }
    if (currSelected == 0) {
      currFilters = [...allFilters]
    }
    setSelectedFilters(currSelected)
    setFilters(currFilters)
  }

  function FilterTemp(filter) {
    let currFilters = tempFilters
    let currSelected = selectedTempFilters
    if (currSelected == 0) {
      currFilters = []
    }
    if (!currFilters.includes(filter)) {
      currFilters = [...currFilters, filter]
      currSelected += 1
    } else {
      let index = currFilters.indexOf(filter)
      currFilters.splice(index, 1)
      currSelected -= 1
    }
    if (currSelected == 0) {
      currFilters = [...allTempFilters]
    }
    setSelectedTempFilters(currSelected)
    setTempFilters(currFilters)
  }

  return (
    <div className="App">
      <h1>Places to travel</h1>
      <Container>
        <Row>
          <Col lg={2}>
          <h4>Filter by Continent</h4>
          <FilterItem filters={allFilters} filterFunction={FilterItems} />

          <h4>Filter by Temp</h4>
          <FilterItem filters={allTempFilters} filterFunction={FilterTemp} />

          <h4>Sort by cost</h4>
          <Form>
            <Form.Check
              defaultChecked
              type='radio'
              name='same'
              id={'default'}
              label={'default'}
              onChange={() => sortItems(0)}
            />

            <Form.Check
              type='radio'
              name='same'
              id={'sort-low'}
              label={'sort by lowest cost'}
              onChange={() => sortItems(1)}
            />

            <Form.Check
              type='radio'
              name='same'
              id={'sort-high'}
              label={'sort by highest cost'}
              onChange={() => sortItems(-1)}
            />
          </Form>
          </Col>
          <Col lg={8}>
            <Row>
            {placeItems.filter(function(item){return filters.includes(item.continent) && tempFilters.includes(item.climate)}).sort(sortFunction).map((item) => (
            <PlaceItem item={item} addToBucketList={AddToBucketList} />
            ))}
            </Row>
          </Col>
          <Col lg={2}>
            <BucketList items={cart} total={total} removeFromBucketList={RemoveFromBucketList} />
          </Col>
        </Row>
        </Container>      
    </div>
  );
}

export default App;
