import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bage from './Card/Bage';


const DealBoard = () => {
    const unassignedCards = [
        { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано'},
        { id: 2, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Гитара'},
        { id: 3, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал'},
      ];
      const scheduleMeetingCards = [
        { id: 3, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал'},
    
      ];
      const meetingScheduledCards = [
        { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано'},
        { id: 2, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Гитара'},
        { id: 3, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал'},
        { id: 4, name: 'Школа музыки', phone: '+7 925 123 25', status: true, description: 'Вокал'},
    
      ];
      const meetingDoneCards = [
        { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано'},
    
      ];
      const reservedCards = [
        { id: 1, name: 'Иван', phone: '+7 925 123 25', status: false, description: 'Фортепиано'},
    
      ];
    
      // Функция для рендеринга карточек
      const renderCards = (cards) => {
        return cards.map((card) => (
          Bage(card)
        ));
      };
    
      return (
        <Container>
          <Row>
            <Col>
              <h3 style={{height: '50px', textAlign: 'center', fontSize: '20px'}}>Неразобранные</h3>
              {renderCards(unassignedCards)}
            </Col>
            <Col>
              <h3 style={{height: '50px', textAlign: 'center', fontSize: '20px'}}>Назначить встречу</h3>
              {renderCards(scheduleMeetingCards)}
            </Col>
            <Col>
              <h3  style={{height: '50px', textAlign: 'center', fontSize: '20px'}}>Встреча назначена</h3>
              {renderCards(meetingScheduledCards)}
            </Col>
            <Col>
              <h3 style={{height: '50px', textAlign: 'center', fontSize: '20px'}}>Встреча состоялась</h3>
              {renderCards(meetingDoneCards)}
            </Col>
            <Col>
              <h3 style={{height: '50px', textAlign: 'center', fontSize: '20px'}}>Резерв</h3>
              {renderCards(reservedCards)}
            </Col>
          </Row>
        </Container>
      );
}

export default DealBoard