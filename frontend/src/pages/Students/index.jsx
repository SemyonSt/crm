import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CashStack } from 'react-bootstrap-icons';
import { teachers } from "../Teachers/data";
import { Link } from "react-router-dom";

import "./styles.scss"
import { useSelector } from 'react-redux';
import AddCashModal from '../Modal/AddCash';
import PayAbonementModal from '../Modal/PayAbonement';


const StudentList = () => {
  const initialStudents = useSelector((state) => state.studentsReducer.initialMass);

  const [modalShowCash, setModalShowCash] = useState(false)
  const [modalShowPay, setModalShowPay] = useState(false)

  return <Container className="fluid mt-3">
    <Row className="mb-3">
      <Col>
        <InputGroup>
          <Form.Control
            placeholder="Поиск по имени и фамилии"
          />
          <Button variant="outline-secondary">
            Search
          </Button>
        </InputGroup>
      </Col>
      <Col>
        <Form.Select>
          <option>Выбирай</option>
          {teachers.map(teacher => <option value={`${teacher.first_name} ${teacher.last_name}`}>{`${teacher.first_name} ${teacher.last_name}`}</option>)}
        </Form.Select>
      </Col>
      <Col>
        <Button variant="primary">
          Добавить ученика
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
              <th>Баланс</th>
              <th>Абонемент</th>
              <th>Телефон</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {initialStudents.map(student => <tr>
              <td>{student.id + 1}</td>
              <td><Link to={`/students/${student.id}`}>{`${student.first_name} ${student.last_name}`}</Link></td>
              <td>{student.balance}</td>
              <td>{student.abonement_id}</td>
              <td>{student.phone}</td>
              <td>
                <Button variant="outline-secondary" className="mx-1" onClick={() => setModalShowCash(true)}>
                  <CashStack />
                </Button>
                <Button variant="outline-secondary" onClick={() => setModalShowPay(true)}>
                  A
                </Button>
              </td>
            </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>
    <AddCashModal
      show={modalShowCash}
      onHide={() => setModalShowCash(false)}
    />

    <PayAbonementModal
      show={modalShowPay}
      onHide={() => setModalShowPay(false)}
    />
  </Container>
}

export default StudentList;
