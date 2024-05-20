import './App.css';
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import { HashRouter, Link, Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/assignment1" Component={Assignment1} />
        <Route path="/assignment2" Component={Assignment2} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
