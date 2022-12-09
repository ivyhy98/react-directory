import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import EmployeePage from './components/EmployeePage';

import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage data={data} />} />
        <Route exact path="/:id" element={<EmployeePage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
