import {Form} from "react-bootstrap";

function FilterItem({filters, filterFunction}) {
    return (
        <Form>
            {filters.map((filter) => (
                <Form.Check 
                    type='checkbox'
                    id={filter}
                    label={filter}
                    onChange={()=>filterFunction(filter)}
                />
            ))}
        </Form> 
    )
  }

export default FilterItem;