import { Routes, Route } from 'react-router-dom';

import './index.scss';

import Lessons from './Lessons';
import Group from './Group';
import Attendance from './Attendance';
import Exam from './Exam';
import Result from './Result';

const TeacherMain = () => {
  return (
    <Routes>
      <Route path="/teacher-lessons" element={<Lessons />} />
      <Route path="/teacher-group" element={<Group />} />
      <Route path="/teacher-attendance" element={<Attendance />} />
      <Route path="/teacher-exam" element={<Exam />} />
      <Route path="/teacher-result" element={<Result />} />
    </Routes>
  );
};

export default TeacherMain;
