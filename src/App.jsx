import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reports from './Pages/Reports/Reports';
import Settings from './Pages/Settings/Settings.jsx';
import Adimition from './Pages/Adimition/Adimition';
import MasterLogin from './Pages/Authentication/MasterLogin.jsx';
import Master from './Pages/Master/master';
import Finance from './Pages/Finance/Finance';
import StudenRegistation from './Pages/Registation/StudentRegistation/StudenRegistation';
import Parent from './Pages/Parent/Parent';
import ParentList from './Pages/Parent/ParentList';
import TeacherRegistation from './Pages/Registation/StudentRegistation/TeacherRegistation.jsx';
import StudentList from './Pages/Student/StudentsList.jsx';
import  AttendenceList  from './Pages/AttendenceList/AttendenceList.jsx';
import TeacherList from './Pages/Teacher/TeacherList.jsx'
import { useState, useEffect } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Load authentication state from localStorage
  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authState);
  }, []);

  // Update localStorage whenever the authentication state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/attandance' element={<AttendenceList/>}/>
          <Route path='/adimition' element={<Adimition/>}/>
          <Route path='/StudentList' element={<StudentList/>}/>
          <Route path='/TeachertList' element={<TeacherList/>}/>
          <Route path='/teacher-registration' element={<TeacherRegistation/>}/>
          <Route path='/student-registration' element={<StudenRegistation/>}/>
          <Route path='/Parents' element={<Parent/>}/>
          <Route path='/ParentList' element={<ParentList/>}/>
          <Route path='/finance' element={<Finance/>}/>
          {/* Login Page */}
        <Route
          path="/MasterLogin"
          element={<MasterLogin setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Master Dashboard (Protected Route) */}
        <Route
          path="/master"
          element={
            isAuthenticated ? (
              <Master />
            ) : (
              <Navigate to="/MasterLogin" replace />
            )
          }
        />
          
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
