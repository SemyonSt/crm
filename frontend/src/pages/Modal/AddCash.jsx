import { useFormik } from 'formik';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'


function AddCashModal(props) {

    const { values, errors, handleChange, handleSubmit, setSubmitting, isSubmitting, } = useFormik({
        initialValues: {
            cash: '',

        },
        onSubmit: values => {
            values.cash = '';
            props.onHide(); 
        },
    })

    return (
        
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"

                centered
            >
               
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Пополнения баланса
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-1" controlId="cash">
                        <Form.Label column sm="2">
                            Сумма
                        </Form.Label>
                        <Col sm="">
                            <Form.Control
                                name="cash"
                                type="number"
                                onChange={handleChange}
                                value={values.cash}
                                placeholder="Сумма"
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="me-2 btn-secondary" variant="secondary" onClick={props.onHide}>Закрыть</Button>
                    <Button className="btn-primary" variant="primary" type="submit">Пополнить</Button>
                </Modal.Footer>
                </form>
            </Modal>
        
    );
}

export default AddCashModal
