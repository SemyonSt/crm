import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './board.scss'

import Bage from './Bage';
import NewDealModal from '../Modal/NewDeal'
import { useSelector } from 'react-redux';

import axios from 'axios';


const DealBoard = () => {
    const initialDeals = useSelector((state) => state.dealsReducer.initialMass);
    const [mass, setMass] = useState(initialDeals);

    const [modalShow, setModalShow] = useState(false)
    const [draggedId, setDraggedId] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);

    useEffect(() => {
        const sortedByDateTime = [...initialDeals].sort((a, b) => {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        });
        setMass(sortedByDateTime);
    }, [initialDeals]);



    const handleDragOver = (e, column) => {
        e.preventDefault();
        setDragOverColumn(column);
    };

    const handleDragLeave = () => {
        setDragOverColumn(null);
    };

    const updateStatusInArray = (id, newStatus) => {
        console.log(id)
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
            if (task.status === 'UNPROCESSED') {
                unassignedCards.push(task)
            }
            if (task.status === 'SUCCESSFULLY_COMPLETED') {
                scheduleMeetingCards.push(task)
            }
            if (task.status === 'APPOINTMENT_SCHEDULED') {
                meetingScheduledCards.push(task)
            }
            if (task.status === 'APPOINTMENT_COMPLETED') {
                meetingDoneCards.push(task)
            }
            if (task.status === 'RESERVED') {
                reservedCards.push(task)
            }
        })

        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get('http://91.239.148.58:8080/api/v1/orders');
        //       console.log('Успешно получено:', response.data);
        //     } catch (error) {
        //       console.error('Ошибка при отправке запроса!!!!', error);
        //     }
        //   };



        return (
            <Row>
                {/* <div>
                    <button onClick={fetchData}>Запросить данные</button>
                </div> */}
                <Col
                    className={dragOverColumn === 'UNPROCESSED' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'UNPROCESSED')}
                    onDragOver={(e) => handleDragOver(e, 'UNPROCESSED')}
                    onDragLeave={() => handleDragLeave()}
                    style={{ height: '100vh', borderRadius: '20px' }}
                >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Неразобранные</h3>
                    {renderCards(unassignedCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'SUCCESSFULLY_COMPLETED' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'SUCCESSFULLY_COMPLETED')}
                    onDragOver={(e) => handleDragOver(e, 'SUCCESSFULLY_COMPLETED')}
                    onDragLeave={() => handleDragLeave()}
                    style={{ height: '100vh', borderRadius: '20px' }}
                >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Назначить встречу</h3>
                    {renderCards(scheduleMeetingCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'APPOINTMENT_SCHEDULED' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'APPOINTMENT_SCHEDULED')}
                    onDragOver={(e) => handleDragOver(e, 'APPOINTMENT_SCHEDULED')}
                    onDragLeave={() => handleDragLeave()}
                    style={{ height: '100vh', borderRadius: '20px' }}
                >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча назначена</h3>
                    {renderCards(meetingScheduledCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'APPOINTMENT_COMPLETED' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'APPOINTMENT_COMPLETED')}
                    onDragOver={(e) => handleDragOver(e, 'APPOINTMENT_COMPLETED')}
                    onDragLeave={() => handleDragLeave()}
                    style={{ height: '100vh', borderRadius: '20px' }}
                >
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча состоялась</h3>
                    {renderCards(meetingDoneCards)}
                </Col>
                <Col
                    className={dragOverColumn === 'RESERVED' ? 'drag-over' : ''}
                    onDrop={(e) => handleDrop(e, 'RESERVED')}
                    onDragOver={(e) => handleDragOver(e, 'RESERVED')}
                    onDragLeave={() => handleDragLeave()}
                    style={{ height: '100vh', borderRadius: '20px' }}
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

            <NewDealModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container >

    );
}

export default DealBoard
