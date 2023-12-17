import React from 'react';
import './bage.scss'
import { Card } from 'react-bootstrap';

const Bage = (card) => {


    function dragStartHandler(e, card) {
        console.log('drag', card.name)
    }

    function dragEndhendler(e) {

    }

    function dragEndhendler(e) {

    }

    function dragOverhandler(e) {
        e.preventDefault()
    }

    function dropHandler(e, card) {
        e.preventDefault()
        console.log('drop', card.name)

    }
    return (
        <Card
            onDragStart={(e) => dragStartHandler(e, card) }
            onDragLeave={(e) =>  dragEndhendler(e)}
            onDragEnd={(e) =>  dragEndhendler(e)}
            onDragOver={(e) =>  dragOverhandler(e)}
            onDrop={(e) =>  dropHandler(e, card)}
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