import { useFormik } from 'formik';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { actions as teachersActions } from '../../slices/teacherSlice'

function NewTaskModal(props) {
    const initialTeachers = useSelector((state) => state.teacherReducer.initialMass);
    const dispatch = useDispatch();

    const id = Math.floor(Math.random() * 100)
    const click = (values) => {
        dispatch(teachersActions.addTeachers({
            id: initialTeachers.length,
            name: values.name,
            phone: values.phone,
            email: values.email,
            birthday: values.birthday,
            subject: values.subject,
            indivRate: values.indivRate,
            ansambleRate: values.ansambleRate,
            groupRate: values.groupRate,
            perLesson: values.perLesson,
        }))
    }

    const { values, errors, handleChange, handleSubmit, setSubmitting, isSubmitting, } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            birthday: '',
            subject: '',
            indivRate: '',
            ansambleRate: '',
            groupRate: '',
            perLesson: ''

        },
        onSubmit: values => {
            click(values)
            values.name = '';
            values.phone = '';
            values.email = '';
            values.subject = '';
            values.indivRate = '';
            values.ansambleRate = '';
            values.groupRate = '';
            values.perLesson = '';
            values.birthday = '';

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
                    Добавить преподавателя
                </Modal.Title>
            </Modal.Header>

            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" controlId="name">
                        <Form.Label column sm="4">
                            Имя
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={values.name}
                                placeholder="Имя преподавателя"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="phone">
                        <Form.Label column sm="4">
                            Телефон
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="phone"
                                type="text"
                                onChange={handleChange}
                                value={values.phone}
                                placeholder="Телефон"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm="4">
                            E-mail
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={values.email}
                                placeholder="E-mail"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="birthday">
                        <Form.Label column sm="4">
                            Дата рождения
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="birthday"
                                type="text"
                                onChange={handleChange}
                                value={values.birthday}
                                placeholder="Дата рождения"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="subject">
                        <Form.Label column sm="4">
                            Предмет
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="subject"
                                type="text"
                                onChange={handleChange}
                                value={values.subject}
                                placeholder="Название предмета"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="indivRate">
                        <Form.Label column sm="4">
                            Индивидуальный
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="indivRate"
                                type="text"
                                onChange={handleChange}
                                value={values.indivRate}
                                placeholder="Тип абонемента"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="ansambleRate">
                        <Form.Label column sm="4">
                            Ансамбль
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameDeals"
                                name="ansambleRate"
                                type="text"
                                onChange={handleChange}
                                value={values.ansambleRate}
                                placeholder="Тип абонемента"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="groupRate">
                        <Form.Label column sm="4">
                            Групповой
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="nameCustomer"
                                name="groupRate"
                                type="text"
                                onChange={handleChange}
                                value={values.groupRate}
                                placeholder="Тип абонемента"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="perLesson">
                        <Form.Label column sm="4">
                            За урок
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                // id="phone"
                                name="perLesson"
                                type="text"
                                onChange={handleChange}
                                value={values.perLesson}
                                placeholder="Стоимость"
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
