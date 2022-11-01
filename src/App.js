
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Lessons from './components/Lessons';
import Menubar from './components/Menubar';


function App() {
  return (
    <div>
      
      <Router>
      <Menubar />
      <Home />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Lessons" element={<Lessons />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
