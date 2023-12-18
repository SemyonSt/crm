import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './board.scss'

import Bage from './Bage';
import MyVerticallyCenteredModal from '../Modal/NewDeal'


const initialMass = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', description: 'Фортепиано', status: 'Неразобранные' },
    { id: 2, name: 'Школа музыки', phone: '+7 925 123 25', description: 'Гитара', status: 'Назначить встречу' },
    { id: 3, name: 'Людмила', phone: '+7 925 123 25', description: 'Вокал', status: 'Встреча назначена' },
    { id: 4, name: 'Саша', phone: '+7 925 123 25', description: 'Вокал', status: 'Встреча состоялась' },
    { id: 5, name: 'Марина', phone: '+7 925 123 25', description: 'Вокал', status: 'Резерв' },
    { id: 6, name: 'Никола', phone: '+7 925 123 25', description: 'Вокал', status: 'Встреча состоялась' },
    { id: 7, name: 'Никола', phone: '+7 925 123 25', description: 'Вокал', status: 'Встреча состоялась' },
];

const DealBoard = () => {

    const [modalShow, setModalShow] = useState(false)

    const [mass, setMass] = useState(initialMass);
    const [draggedId, setDraggedId] = useState(null);

    const [dragOverColumn, setDragOverColumn] = useState(null);

    const handleDragOver = (e, column) => {
        e.preventDefault();
        setDragOverColumn(column);
    };

    const handleDragLeave = () => {
        setDragOverColumn(null);
    };

    const updateStatusInArray = (id, newStatus) => {
        setMass((prevMass) =>
            prevMass.map((item) =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    };

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ id }));
        setDraggedId(id);
    };

    const handleDrop = (e, newStatus) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));

        if (data && data.id === draggedId) {
            const draggedCard = mass.find((item) => item.id === parseInt(data.id));
            if (draggedCard) {
                updateStatusInArray(draggedCard.id, newStatus);
                setDraggedId(null); 
                setDragOverColumn(null); 
            }
        }
    };

    const renderCards = (cards) => {
        return cards.map((card) => (
            Bage(card, handleDragStart)
        ));
    };

    const render = () => {
        const unassignedCards = [];
        const scheduleMeetingCards = [];
        const meetingScheduledCards = [];
        const meetingDoneCards = [];
        const reservedCards = [];

        mass.forEach(task => {
            if (task.status === 'Неразобранные') {
                unassignedCards.push(task)
            }
            if (task.status === 'Назначить встречу') {
                scheduleMeetingCards.push(task)
            }
            if (task.status === 'Встреча назначена') {
                meetingScheduledCards.push(task)
            }
            if (task.status === 'Встреча состоялась') {
                meetingDoneCards.push(task)
            }
            if (task.status === 'Резерв') {
                reservedCards.push(task)
            }
        })

        return (
            <Row>
                <Col
                    className={dragOverColumn === 'Неразобранные' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'Неразобранные')}
                    onDragOver={(e) => handleDragOver(e, 'Неразобранные')}
                    onDragLeave={() => handleDragLeave()}
                    style={{height: '100vh', borderRadius: '20px'}}
                >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Неразобранные</h3>
                    {renderCards(unassignedCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'Назначить встречу' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'Назначить встречу')}
                    onDragOver={(e) => handleDragOver(e, 'Назначить встречу')}
                    onDragLeave={() => handleDragLeave()}
                    style={{height: '100vh', borderRadius: '20px'}}
                    >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Назначить встречу</h3>
                    {renderCards(scheduleMeetingCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'Встреча назначена' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'Встреча назначена')}
                    onDragOver={(e) => handleDragOver(e, 'Встреча назначена')}
                    onDragLeave={() => handleDragLeave()}
                    style={{height: '100vh', borderRadius: '20px'}}
                    >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча назначена</h3>
                    {renderCards(meetingScheduledCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'Встреча состоялась' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'Встреча состоялась')}
                    onDragOver={(e) => handleDragOver(e, 'Встреча состоялась')}
                    onDragLeave={() => handleDragLeave()}
                    style={{height: '100vh', borderRadius: '20px'}}
                    >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча состоялась</h3>
                    {renderCards(meetingDoneCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'Резерв' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'Резерв')}
                    onDragOver={(e) => handleDragOver(e, 'Резерв')}
                    onDragLeave={() => handleDragLeave()}
                    style={{height: '100vh', borderRadius: '20px'}}
                    >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Резерв</h3>
                    {renderCards(reservedCards)}
                </Col>

            </Row>
        )
    }

    return (
        <Container>
            <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: '5px' }}>
                + Новая сделка
            </Button>
            {render()}

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container >

    );
}

export default DealBoard
