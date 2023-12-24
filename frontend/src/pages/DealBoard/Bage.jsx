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
    </Link>
  )

}

export default Bage;
