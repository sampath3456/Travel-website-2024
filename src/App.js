import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/sections/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
