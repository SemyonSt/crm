import { Calendar3, CardList, Coin, FileEarmark, PersonCircle, PersonFill, Person } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
const menu = [
  {
    id: 1,
    name: "Аккаунт",
    icon: <PersonCircle/>,
    to: "/"
  },
  {
    id: 2,
    name: "Сделки",
    icon: <Coin/>,
    to: "/deal-board"
  },
  {
    id: 3,
    name: "Списки",
    icon: <CardList/>,
    to: "/task-manager"
  },
  {
    id: 4,
    name: "Расписание",
    icon: <Calendar3/>,
    to: "/calendar"
  },
  {
    id: 5,
    name: "Ученики",
    icon: <PersonFill/>,
    to: "/students",
  },
  {
    id: 6,
    name: "Сотрудники",
    icon: <Person/>,
    to: "/employees",
  },
  {
    id: 7,
    name: "Отчеты",
    icon: <FileEarmark/>,
    to: "/reports"
  }
]

const Menu = () => {
  return <Nav className="d-flex flex-column align-items-center">
    {menu.map(menuItem => <Nav.Item key={menuItem.id}>
      <Nav.Link as={Link} to={menuItem.to} className="d-flex flex-column align-items-center">
        <span>{menuItem.icon}</span>
        <span>{menuItem.name}</span>
      </Nav.Link>
    </Nav.Item>)}
  </Nav>
};

export default Menu;
