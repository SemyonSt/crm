import { Col } from "react-bootstrap";
import Menu from "../components/menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return <div className="row">
    <Col className="col-1">
      <Menu/>
    </Col>
    <Col className="col-11">
      <Outlet/>
    </Col>
  </div>
};

export default Layout;
