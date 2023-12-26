import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { useSelector } from 'react-redux';
import NewTeacherModal from '../Modal/NewTeacher'


const TeacherList = () => {
  const initialTeachers = useSelector((state) => state.teacherReducer.initialMass);
  // const [mass, setMass] = useState(initialTeachers);
  const [modalShow, setModalShow] = useState(false)

  return <Container className="fluid mt-3">
    <Row className="mb-3">
      <Col>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Добавить преподавателя
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>№</th>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Предмет</th>
            </tr>
          </thead>
          <tbody>
            {initialTeachers.map(teacher => <tr>
              <td>{teacher.id + 1}</td>
              <td>{`${teacher.name}`}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.subject}</td>
            </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>

    <NewTeacherModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </Container>
};

export default TeacherList;
