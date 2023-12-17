import React from 'react';
import './bage.css'
import { Card } from 'react-bootstrap';

const Bage = (card) => {

    let statusClass = '';

    if (card.status === 'Действующая задача') {
        statusClass = 'text-primary';
    } else if (card.status === 'Задача просрочена') {
        statusClass = 'text-danger';
    } else if (card.status === 'Задача выполнена') {
        statusClass = 'text-success';
    }
    
    return (
        <Card className='bage unassembled' key={card.id} style={{ padding: 0 }}>
            <div className='body'>
                <div className='name'>{card.name}</div>
                <div className='phone'>
                    {card.phone}
                </div>
                <div className='description'>
                    {card.description}
                </div>
                <div className='date'>
                    {card.endDateTime}
                </div>
                <div className={`status ${statusClass}`}>
                    {/* Сейчас реализовано неправильно. Есть задачи или нет - узнаем в карточке ученика */}
                    Статус: {card.status}
                </div>
            </div>
        </Card>
    )

}

export default Bage;