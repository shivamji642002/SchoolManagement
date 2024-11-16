import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reports from './Pages/Reports/Reports';
import Settings from './Pages/Settings/Settings.jsx';
import Adimition from './Pages/Adimition/Adimition';
import Master from './Pages/Master/master';
import Finance from './Pages/Finance/Finance';
import StudenRegistation from './Pages/Registation/StudentRegistation/StudenRegistation';
import Parent from './Pages/Parent/Parent';
import ParentList from './Pages/Parent/ParentList';
import TeacherRegistation from './Pages/Registation/StudentRegistation/TeacherRegistation.jsx';
import StudentList from './Pages/Student/StudentsList.jsx';
import TeacherList from './Pages/Teacher/TeacherList.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/adimition' element={<Adimition/>}/>
          <Route path='/StudentList' element={<StudentList/>}/>
          <Route path='/TeachertList' element={<TeacherList/>}/>
          <Route path='/teacher-registration' element={<TeacherRegistation/>}/>
          <Route path='/student-registration' element={<StudenRegistation/>}/>
          <Route path='/Parents' element={<Parent/>}/>
          <Route path='/ParentList' element={<ParentList/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/master' element={<Master/>}/>
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
