import React from 'react';
import './bage.css'
import { Card } from 'react-bootstrap';

const Bage = (card, handleDragStart) => {

    return (
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
    )

}

export default Bage;