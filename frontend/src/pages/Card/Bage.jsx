import React from 'react';
import './bage.css'
import { Card } from 'react-bootstrap';

const Bage = (card) => {
    return (
        <Card className='bage unassembled' key={card.id} style={{ padding: 0 }}>
            <div className='body'>
                <div className='name'>от: {card.name}</div>
                <div className='phone'>
                    {card.phone}
                </div>
                <div className='status'>
                    {card.description}
                </div>
                <div className='status'>
                    {/* Сейчас реализовано неправильно. Есть задачи или нет - узнаем в карточке ученика */}
                    Статус: {card.status ? "Есть задачи" : "Нет задач"}
                </div>
            </div>
        </Card>
    )

}

export default Bage;