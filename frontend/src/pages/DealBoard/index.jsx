import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Bage from './Bage';
import MyVerticallyCenteredModal from '../Modal/NewDeal'


const mass = [
    { id: 1, name: 'Иван', phone: '+7 925 123 25',  description: 'Фортепиано', status: 'Неразобранные' },
    { id: 2, name: 'Школа музыки', phone: '+7 925 123 25',  description: 'Гитара', status: 'Назначить встречу' },
    { id: 3, name: 'Школа музыки', phone: '+7 925 123 25',  description: 'Вокал', status: 'Встреча назначена' },
    { id: 4, name: 'Школа музыки', phone: '+7 925 123 25',  description: 'Вокал', status: 'Встреча состоялась' },
    { id: 5, name: 'Школа музыки', phone: '+7 925 123 25',  description: 'Вокал', status: 'Резерв' },
    { id: 4, name: 'Школа музыки', phone: '+7 925 123 25',  description: 'Вокал', status: 'Встреча состоялась' },
];

const DealBoard = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const renderCards = (cards) => {
        return cards.map((card) => (
            Bage(card)
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
