import './App.css';
import Sector1 from './sector1';
import Dashboard from './dashBoard';
import Home from './home';
import SignIn from './signIn';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/signIn" element={ <SignIn/> } />
        <Route exact path="/dashboard" element={ <Dashboard/> } />
        <Route exact path="/sector1" element={ <Sector1/> } />
      </Routes>
    </div>
  );
}

export default App;
