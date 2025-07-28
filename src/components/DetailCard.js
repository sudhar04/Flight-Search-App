import React from 'react'
import { Card } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const DetailCard = ({flight}) => {
  return (
    <div>
        <Card className="mx-2">
        <Card.Body>
            <div className='d-flex justify-content-between align-items-center mb-2'>
               <Card.Title className='text-primary fs-6 mb-0'><time>{flight.departure.time}</time> - <time>{flight.arrival.time}</time></Card.Title>
               <span><BsThreeDots className='fs-6' /></span>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-3'>
                    <img src="https://img.favpng.com/6/1/6/airplane-flight-cartoon-png-favpng-t8m0xtgJKhB9yxJBFR12mEVyc.jpg" alt="Flight" width={50} className='rounded-circle'/>
                    <div>
                        <h6 className='mb-1'>{flight.airline}</h6>
                        <p className="mb-1 text-success">{flight.flight_id} . {flight.flight_duration} . {flight.cabin_class}</p>
                    </div>
                </div>
                    <div className='text-end'>
                        <h6 className='mb-1'>{flight.price.currency}{flight.price.amount}</h6>
                        <p className="mb-1 text-secondary fs-6">Price</p>
                    </div>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DetailCard