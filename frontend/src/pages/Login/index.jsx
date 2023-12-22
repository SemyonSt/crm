import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import "./styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({login: "", password: ""});
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Login :${user.login}, Password :${user.password}`);

    if (user.login !== "admin" || user.password !== "admin") {
      setShow(true);
    }

    navigate("/deal-board");
  };

  return <div className=".full-page-container d-flex align-items-center justify-content-center h-100">
    <Form className="w-25 d-flex flex-column" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Логин" value={user.login} onChange={(e) => setUser(prevUser => ({...prevUser, login: e.target.value}))} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Пароль" value={user.password} onChange={(e) => setUser(prevUser => ({...prevUser, password: e.target.value}))} required/>
      </Form.Group>
      <Button variant="primary" type="submit" className="align-self-end">
        Войти
      </Button>

      {show && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Неверное имя пользователя или пароль.
          </Alert>
        )}
    </Form>
  </div>
}

export default Login;
