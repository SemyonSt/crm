import { useFormik } from 'formik';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'


function PayAbonementModal(props) {

    const { values, errors, handleChange, handleSubmit, setSubmitting, isSubmitting, } = useFormik({
        initialValues: {
            abonement: '',
        },
        onSubmit: values => {
            values.abonement = '';

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
                        Продажа абонемента
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-1" controlId="abonement">
                        <Form.Label column sm="3">
                            Абонемент
                        </Form.Label>
                        <Col sm="">
                            <Form.Control
                                // id="nameDeals"
                                name="abonement"
                                type="number"
                                onChange={handleChange}
                                value={values.abonement}
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

export default PayAbonementModal;
