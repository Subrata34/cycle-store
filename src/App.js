import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='home' element={<Home/>} />
            <Route path='register' element={<Register/>} />
            <Route path='banner' element={<Banner/>} />
            <Route path='header' element={<Header/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
