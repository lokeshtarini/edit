
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Compontes/Home/Index";
import Service from "./Compontes/Service/Index";
import Users from "./Compontes/Users/Index";
import Login from "./Compontes/Login/Index";
import Nav from "./Compontes/Nav/Index";

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/Home" element={<Home/>}> </Route>
          <Route path="/Service" element={<Service/>}> </Route>
          <Route path="/Users" element={<Users/>}> </Route>
          <Route path="/Login" element={<Login/>}> </Route>

        </Routes>
      </Router>
      </div>

   );
}

export default App;
