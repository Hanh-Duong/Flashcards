import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Lessons from './components/Lessons';
import Menubar from './components/Menubar';
import Button from './components/Button';


function App() {
  return (
    <div>
      <Router>
        <Menubar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
            <p>
              This is a place where you feel more comfortable to study Finnish!
            </p>
            <Button />
          </header>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Lessons" element={<Lessons />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
