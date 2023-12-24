import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const orderStatuses = [
  {id: 0, status: "Первичный контакт"},
  {id: 1, status: "Переговоры"},
  {id: 2, status: "Принимают решение"},
  {id: 3, status: "Согласование договора"},
  {id: 4, status: "Успешно реализовано"},
  {id: 5,   status: "Закрыто и не реализовано"},
]

const logs = [
  {id: 0, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 1, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"},
  {id: 2, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 3, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"}
]

const Order = () => {
  const show = true;

  return (
    <>
      <Modal show={show} size="xl">
        <Modal.Header closeButton>
          <h1>Изменить сделку</h1>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={4}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Сделка" value="Сделка 1"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="+7 911 934 43 32" value="+7 911 934 43 32"/>
                  </Form.Group>
                  <Form.Select aria-label="Transaction status">
                    {orderStatuses.map((item) => <option value={item.status}>{item.status}</option>)}
                  </Form.Select>
                  <Button variant="primary" type="button" className="mt-3">
                    Добавить в ученики
                  </Button>
                </Form>
              </Col>
              <Col md={8}>
                <Button variant="primary" type="button">
                  Добавить задучу
                </Button>
                <div className="card mt-3 p-2">
                  {logs.map((item) => <p key={item.id}>
                    <span className="mx-1 d-inline-block">{item.date}</span>
                    <span className="mx-1 d-inline-block">{item.createdBy}</span>
                    <span className="mx-1 d-inline-block">{item.message}</span>
                  </p>)}
                </div>
                <Form>
                  <Form.Group className="mt-3">
                    <Form.Control as="textarea" />
                    <Button variant="primary" type="button" className="mt-3">
                      Добавить комментарии
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
