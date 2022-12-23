import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import { Login } from "./Login/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='register' element={<Register/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
