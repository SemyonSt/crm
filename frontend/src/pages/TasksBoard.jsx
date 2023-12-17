import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Bage from './CardNewTask/BageNewTask';
import MyVerticallyCenteredModal from './Modal/NewDeal'

const unassignedCards = [
    { id: 1, name: 'Муратова Диана 15/Наталья', status: 'Действующая задача', description: 'Фортепиано123', endDateTime:  '14.09.2023'},
    { id: 2, name: '...', status: 'Задача просрочена', description: 'Вокал', endDateTime:  '1.09.2023'},
    { id: 3, name: 'Жанна Винтерголлер/Давид Салия', status: 'Задача выполнена', description: 'Фортепиано123', endDateTime:  '14.09.2023'},
];
const scheduleMeetingCards = [
    { id: 1, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал' },

];
const meetingScheduledCards = [
    { id: 1, name: 'Муратова Диана 15/Наталья', status: 'Действующая задача', description: 'Фортепиано123', endDateTime:  '14.09.2023'},
    

];
const meetingDoneCards = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано' },

];



const TasksBoard = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const renderCards = (cards) => {
        return cards.map((card) => (
            Bage(card)
        ));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Задачи на сегодня</h3>
                    {renderCards(unassignedCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Задачи на завтра</h3>
                    {renderCards(scheduleMeetingCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Задачи на эту неделю</h3>
                    {renderCards(meetingScheduledCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Задачи на месяц</h3>
                    {renderCards(meetingDoneCards)}
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: '5px' }}>
                        + Новая задача
                    </Button></Col>

            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );
}

export default TasksBoard