import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Error from './Error';
import Order from "./Order";
import Student from "./Student";
import DealBoard from "./DealBoard";
import Login from "./Login";
import StudentList from "./StudentList";
import EmployeeList from "./EmployeeList";
import TaskManager from "./TaskManager";
import ScheduleCalendar from "./ScheduleCalendar";
import Reports from "./Reports";
import Menu from "../components/menu";

const Main = () => {

  return (
    <div className="h-100">
        {/* <aside className="col-md-2">
          <Menu/>
        </aside> */}

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/deal-board' element={<DealBoard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/student' element={<Student />} />
          <Route path='/task-manager' element={<TaskManager />} />
          <Route path='/calendar' element={<ScheduleCalendar />} />
          <Route path='/students' element={<StudentList />} />
          <Route path='/employees' element={<EmployeeList />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='*' element={<Error />} />
        </Routes>

    </div>
  );
}

export default Main;
