import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {CashStack} from 'react-bootstrap-icons';
import { teachers } from "../Teachers/data";


const TeacherList = () => {
  return <Container className="fluid mt-3">
    <Row className="mb-3">
      <Col>
        <Button variant="primary">
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
            {teachers.map(teacher => <tr>
              <td>{teacher.id + 1}</td>
              <td>{`${teacher.first_name} ${teacher.last_name}`}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.subject_id}</td>
            </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
};

export default TeacherList;
