import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Dashboard from './component/Dashboard/Dashboard';
import LineChart from './component/Charts/LineChart/LineChart';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Hero/>
        <Dashboard/>
          <LineChart/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
