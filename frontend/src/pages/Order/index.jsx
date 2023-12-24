import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { order } from "./data";
import { formatDate } from "../../helpers";

const statusObj = {
  UNPROCESSED: "Неразобранное",
  SCHEDULE_APPOINTMENT: "Назначить встречу",
  APPOINTMENT_SCHEDULED: "Встреча назначена",
  APPOINTMENT_COMPLETED: "Встреча состоялась",
  SUCCESSFULLY_COMPLETED: "Успешно реализована",
  POOR_LEAD: "Плохая заявка",
  REFUSED_TO_PURCHASE: "Отказался покупать",
  RESERVED: "Резерв"
}

const options = [
  {id: 0, status: "UNPROCESSED"},
  {id: 1, status: "SCHEDULE_APPOINTMENT"},
  {id: 2, status: "APPOINTMENT_SCHEDULED"},
  {id: 3, status: "APPOINTMENT_COMPLETED"},
  {id: 4, status: "SUCCESSFULLY_COMPLETED"},
  {id: 5, status: "POOR_LEAD"},
  {id: 6, status: "REFUSED_TO_PURCHASE"},
  {id: 7, status: "RESERVED"},
]

const logs = [
  {id: 0, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 1, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"},
  {id: 2, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 3, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"}
]

const Order = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(prevState => !prevState);
    navigate("/orders")
  }

  const { orderName, clientName, phone, requestSource, status, created_at, logInfo} = order;

  return (
    <>
      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Изменить сделку</h1>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={4}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Сделка" value={orderName}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder={phone} value={phone}/>
                  </Form.Group>
                  <Form.Select aria-label="Transaction status" value={status} className="mb-3">
                    {options.map((item) => <option value={item.status}>{statusObj[item.status]}</option>)}
                  </Form.Select>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Клиент" value={clientName}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Откуда у нас узнали?" value={requestSource}/>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex justify-content-end">
                    <Button variant="primary" type="button" className="mt-3 mx-2">
                      Сохранить
                    </Button>
                    <Button variant="primary" type="button" className="mt-3">
                      Отменить
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={8}>
                <div className="card p-2">
                  {logInfo.map((item) => <p key={item.id}>
                    <span className="mx-1 d-inline-block">{formatDate(item.createDateTime)} - </span>
                    <span className="mx-1 d-inline-block">{item.adminName} - </span>
                    <span className="mx-1 d-inline-block">{item.description}</span>
                  </p>)}
                </div>
                <Form>
                  <Form.Group className="mt-3">
                    <Form.Control as="textarea" placeholder="Комментарии"/>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Button variant="primary" type="button" className="mt-3">
                      Добавить комментарии
                    </Button>
                    <Button variant="primary" type="button" className="mt-3 mx-2">
                      Добавить задачу
                    </Button>
                    <Button variant="primary" type="button" className="mt-3">
                      Добавить в ученики
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Order;
