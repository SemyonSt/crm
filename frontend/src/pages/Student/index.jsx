import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const logs = [
  {id: 0, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 1, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"},
  {id: 2, status: 'task', date: '13.12.2023 18:59', createdBy: "user", 'message': "First task"},
  {id: 3, status: 'comment', date: '13.12.2023 19:59', createdBy: "user", 'message': "First task"}
]

 const abunements = [
  {
    id: 0,
    number_of_lessons: 2,
    type: 0,
    begin: "13.12.2023",
    expire: "03.01.2024",
    status: "active"
  },
  {
    id: 1,
    number_of_lessons: 2,
    type: 0,
    begin: "13.12.2023",
    expire: "03.01.2024",
    status: "deactive"
  }
 ]

const Student = () => {
  const show = true;

  return (
    <>
      <Modal show={show} size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={4}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Имя Фамиля</Form.Label>
                    <Form.Control type="text" placeholder="Имя Фамиля" value="Иван Петрович"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tel</Form.Label>
                    <Form.Control type="text" placeholder="+7 911 934 43 32" value="+7 911 934 43 32"/>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex justify-content-between  ">
                    <Form.Label>Баланс</Form.Label>
                    <p>200 рубл</p>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Абунамент</Form.Label>
                    <p>
                       {
                        abunements.map((abunement) => <p>
                          <span className="d-inline-block mx-1">
                            {abunement.type}
                          </span>
                          с
                          <span className="d-inline-block mx-1">
                            {abunement.begin}
                          </span>
                          до
                          <span className="d-inline-block mx-1">
                            {abunement.expire}
                          </span>
                          <span className="d-inline-block mx-1">
                            {abunement.number_of_lessons}
                          </span>
                          урока 1 месяц,
                          <span className="d-inline-block mx-1">
                            {abunement.number_of_lessons}
                          </span>
                          зан.
                        </p>)
                       }
                    </p>
                  </Form.Group>
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

export default Student;
