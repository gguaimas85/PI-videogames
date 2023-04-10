import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./views/Detail/Detail";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/videogame/:id" element={<Detail/>} />
        <Route path="/create" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
