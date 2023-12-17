import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Новая сделка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Название сделки
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Название сделки" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Имя заказчика
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Имя заказчика" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Телефон
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="tel" placeholder="Телефон" />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className="me-2 btn-secondary" variant="secondary" onClick={props.onHide}>Закрыть</Button>
                <Button className="btn-primary" variant="primary" type="submit">Добавть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal
