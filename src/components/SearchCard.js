import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from "lottie-react";
import flightAnimation from './../assets/Animation.json'

const SearchCard = ({getData ,handleChanges,from,to,date}) => {



const handleSubmit = (e) => {
    e.preventDefault();
    getData();
}

  return (
    <div>
        <Card className='card-design my-3'>
            <Card.Body>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <Card.Subtitle className="mb-2 ">where would you want to go ?</Card.Subtitle>
                       {/*  <Card.Title className='fs-1'>Book a Flight</Card.Title> */}
                        {/* <img src="https://i.insider.com/670d6abd3f2165d716e0ae11?width=700" className='flight-image' /> */}
                        < Lottie animationData={flightAnimation} style={{height:"300px"}} />
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-2" controlId="fromInput">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="text" placeholder="Chennai" onChange={handleChanges} value={from} name='from' />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="toInput">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="text" placeholder="Bangalore" onChange={handleChanges} value={to} name='to'  />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="dateInput">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" onChange={handleChanges} value={date} name='date'  />
                            </Form.Group>
                            
                            <Button variant="success" className='w-100 btn-color my-4' type="submit">
                                Search
                            </Button>
                        </Form>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default SearchCard