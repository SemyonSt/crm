import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import './bage.css'


const Bage = (card, handleDragStart) => {

  return (
    <Link to={`/orders/${card.id}`}>
      <Card
            onDragStart={(e) => handleDragStart(e, card.id)}
            draggable={true}
            className='bage unassembled'
            key={card.id}
            style={{ padding: 0 }
            }>
            <div className='body'>
                <div className='orderName'>
                    {card.orderName}
                </div>
                <div className='clientName'>
                    {card.clientName}
                </div>
                <div className='phone'>
                    {card.phone}
                </div>
            </div>
        </Card>
    </Link>
  )
}

export default Bage;
