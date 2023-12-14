import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Bage from './Card/Bage';
import MyVerticallyCenteredModal from './Modal/NewTask'

const unassignedCards = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано' },
    { id: 2, name: 'Марья', phone: '+7 925 123 25', status: true, description: 'Гитара' },
    { id: 3, name: 'Школа музыки и рок-н-ролла', phone: '+7 925 123 25', status: true, description: 'Вокал' },
];
const scheduleMeetingCards = [
    { id: 3, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал' },

];
const meetingScheduledCards = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано' },
    { id: 2, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Гитара' },
    { id: 3, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал' },
    { id: 4, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал' },

];
const meetingDoneCards = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано' },

];
const reservedCards = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано' },

];


const DealBoard = () => {

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
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Неразобранные</h3>
                    {renderCards(unassignedCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Назначить встречу</h3>
                    {renderCards(scheduleMeetingCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча назначена</h3>
                    {renderCards(meetingScheduledCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Встреча состоялась</h3>
                    {renderCards(meetingDoneCards)}
                </Col>
                <Col>
                    <h3 style={{ height: '50px', textAlign: 'center', fontSize: '20px', padding: '5px' }}>Резерв</h3>
                    {renderCards(reservedCards)}
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: '5px' }}>
                        + Новая сделка
                    </Button></Col>

            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );
}

export default DealBoard
