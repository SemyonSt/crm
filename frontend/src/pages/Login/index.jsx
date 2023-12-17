import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./styles.scss";

const Login = () => {
  return <div className=".full-page-container d-flex align-items-center justify-content-center h-100">
    <Form className="w-25 d-flex flex-column">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Логин" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Пароль" />
      </Form.Group>
      <Button variant="primary" type="submit" className="align-self-end">
        Войти
      </Button>
    </Form>
  </div>
}

export default Login;
