import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Bage from './BageNewTask';
import MyVerticallyCenteredModal from '../Modal/NewDeal'

const mass = [
  { id: 1, name: 'Муратова Диана 15/Наталья', status: 'На сегодня', description: 'Фортепиано123', endDateTime: '14.09.2023' },
  { id: 2, name: '...', status: 'На завтра', description: 'Фортепиано123', endDateTime: '1.09.2023' },
  { id: 3, name: 'Жанна Винтерголлер/Давид Салия', status: 'На эту неделю', description: 'Фортепиано123', endDateTime: '14.09.2023' },
  { id: 4, name: 'Жанна Винтерголлер/Давид Салия', status: 'На месяц', description: 'Сольфеджио', endDateTime: '14.09.2023' },
  { id: 5, name: 'Жанна Винтерголлер/Давид Салия', status: 'На месяц', description: 'Сольфеджио', endDateTime: '14.09.2023' },
  { id: 6, name: '...', status: 'На сегодня', description: 'Фортепиано123', endDateTime: '1.09.2023' },
  { id: 7, name: 'Муратова Диана 15/Наталья', status: 'На завтра', description: 'Фортепиано123', endDateTime: '1.09.2023' },
];

const TasksBoard = () => {

  const [modalShow, setModalShow] = React.useState(false);

  const renderCards = (cards) => {
    return cards.map((card) => (
      Bage(card)
    ));
  };

  const render = () => {
    const unassignedCards = []
    const scheduleMeetingCards = []
    const meetingScheduledCards = []
    const meetingDoneCards = []

    mass.forEach(task => {
      if (task.status === 'На сегодня') {
        unassignedCards.push(task)
      }
      if (task.status === 'На завтра') {
        scheduleMeetingCards.push(task)
      }
      if (task.status === 'На эту неделю') {
        meetingScheduledCards.push(task)
      }
      if (task.status === 'На месяц') {
        meetingDoneCards.push(task)
      }
    })

    return (
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

      </Row>
    )
  }

  return (

    < Container >
      <Col>
        <Button variant="primary" onClick={() => setModalShow(true)} style={{ margin: '5px' }}>
          + Новая задача
        </Button>
      </Col>
      {render()}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container >

  );
}

export default TasksBoard