import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Longin";
import Home from "./Pages/Home/Home"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
