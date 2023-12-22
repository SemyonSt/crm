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
                <div className='name'>от: {card.name}</div>
                <div className='phone'>
                    {card.phone}
                </div>
                <div className='status'>
                    {card.description}
                </div>
                {/* <div className='status'>
                 
                    Статус: {card.status ? "Есть задачи" : "Нет задач"}
                </div> */}
            </div>
        </Card>
    )

}

export default Bage;