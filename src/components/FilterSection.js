import React from 'react'
import { Card, Form ,Button } from 'react-bootstrap';

const FilterSection = ({getData ,handleChanges,cabin_class,airline,min_price,resetFilters}) => {
  return (
    <div className='h-100'>
        <Card className='card-design mt-3 h-100'>
            <Card.Body>
                <div className='row'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5>Filter</h5>
                        <Button variant="primary" size='sm' type="button" onClick={resetFilters}>
                            Reset
                        </Button>
                    </div> 
                        <Form >
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Cabin Class</Form.Label>
                                <select className="form-select" onChange={handleChanges} value={cabin_class} name='cabin_class' aria-label="Default select example">
                                    <option >Select Cabin Class</option>
                                    <option value="First Class">First Class</option>
                                    <option value="Economy">Economy</option>
                                    <option value="Business">Business</option>
                                </select>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price" name='min_price' onChange={handleChanges} value={min_price}  />
                            </Form.Group>
                            
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Airline</Form.Label>
                                <select className="form-select" aria-label="Default select example"  name='airline' onChange={handleChanges} value={airline} >
                                    <option >Select Airline</option>
                                    <option value="Air India">Air India</option>
                                    <option value="IndiGo">IndiGo</option>
                                    <option value="GoAir">GoAir</option>
                                </select>
                            </Form.Group>
                            
                            
                        </Form>
                    
                </div>
                
            </Card.Body>
            {/* <CardFooter>

                <Button variant="success" className='w-100 btn-color my-4' type="submit">
                    Apply Filter
                </Button>
            </CardFooter> */}
        </Card>
    </div>
  )
}

export default FilterSection