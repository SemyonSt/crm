import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Error from './Error';
import Order from "./Order";
import Student from "./Student";
import DealBoard from "./DealBoard";
import Login from "./Login";
import StudentList from "./Students";
import TeacherList from "./Teachers";
import TaskManager from "./TaskManager";
import ScheduleCalendar from "./ScheduleCalendar";
import Reports from "./Reports";
import Menu from "../components/menu";
import Layout from "./Layout";

const Main = () => {
  const [user, setUser] = useState({login: "", password: ""});

  return (
      <Routes>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        {<Route path="/" element={<Layout user={user}/>}>
          <Route path='/deal-board' element={<DealBoard/>} />
          <Route path='/order' element={<Order />} />
          <Route path='/student' element={<Student />} />
          <Route path='/task-manager' element={<TaskManager />} />
          <Route path='/calendar' element={<ScheduleCalendar />} />
          <Route path='/students' element={<StudentList />} />
          <Route path='/teachers' element={<TeacherList />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='*' element={<Error />} />
        </Route>}
      </Routes>
  );
}

export default Main;
