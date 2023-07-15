import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent ';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import EditEmployeeComponent from './components/EditEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />} />
          <Route path="/create" element={<CreateEmployeeComponent />} />
          <Route path="/edit/:id" element={<EditEmployeeComponent />} />
          <Route path="/show/:id" element={<ViewEmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
