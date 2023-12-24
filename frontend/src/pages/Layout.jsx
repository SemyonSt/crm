import { Col } from "react-bootstrap";
import Menu from "../components/menu";
import { Outlet, Navigate } from "react-router-dom";

const Layout = ({ user }) => {
  return user.login ? (<div className="row">
    <Col className="col-1">
      <Menu/>
    </Col>
    <Col className="col-11">
      <Outlet/>
    </Col>
  </div>) : (
    <Navigate to="/login" />
  )
};

export default Layout;
