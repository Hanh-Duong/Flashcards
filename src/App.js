import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Menubar from './components/Menubar';
import ChangeCards from './components/Changecards';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menubar />
        <img src={logo} className="logo" alt="logo" />
        <p>
          This is a place where you feel more comfortable to study Finnish!
        </p>
        <Button />

        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      
     <div className='body'>
      <div class = "right-container">
     <ChangeCards index={0} />
     <ChangeCards index={1}/>
     <ChangeCards index={2}/>
     <ChangeCards index={3}/>
     <ChangeCards index={4}/>
     <ChangeCards index={5}/>
     </div>
     </div>
    </div>
  );
}

export default App;
