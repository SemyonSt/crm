import { useFormik } from 'formik';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { actions as dealsActions } from '../../slices/dealsSlice';

function NewTaskModal(props) {
    // const initialDeals = useSelector((state) => state.dealsReducer.initialMass);
    const dispatch = useDispatch();

    const id = Math.floor(Math.random() * 100)
    const click = (values) => {
        dispatch(dealsActions.addDeals({ id: id, orderName: values.nameDeals, clientName: values.nameCustomer, phone: values.phone, status: 'UNPROCESSED', created_at: '2023-12-18T14:45:00' }))
    }

    const { values, errors, handleChange, handleSubmit, setSubmitting, isSubmitting, } = useFormik({
        initialValues: {
            nameDeals: '',
            nameCustomer: '',
            phone: '',
        },
        onSubmit: values => {
            console.log(props)
            click(values)
            values.nameDeals = '';
            values.nameCustomer = '';
            values.phone = '';
            console.log(props.onHide())
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
                        Новая задача
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" controlId="nameDeals">
                        <Form.Label column sm="4">
                            Название задачи
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="nameDeals"
                                type="text"
                                onChange={handleChange}
                                value={values.nameDeals}
                                placeholder="Название задачи"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="nameCustomer">
                        <Form.Label column sm="4">
                            Имя заказчика
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control 
                            // id="nameCustomer"
                                name="nameCustomer"
                                type="text"
                                onChange={handleChange}
                                value={values.nameCustomer}
                                placeholder="Имя заказчика"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="phone">
                        <Form.Label column sm="4">
                            Телефон
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="phone"
                                name="phone"
                                type="text"
                                onChange={handleChange}
                                value={values.phone} placeholder="Телефон"
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="me-2 btn-secondary" variant="secondary" onClick={props.onHide}>Закрыть</Button>
                    <Button className="btn-primary" variant="primary" type="submit">Добавть</Button>
                </Modal.Footer>
                </form>
            </Modal>
        
    );
}

export default NewTaskModal
