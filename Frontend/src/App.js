import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import img from "./Images/indiapost.svg";
import wall from "./Images/wall2.svg";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <Router>
      <div
        className=" p-5"
        style={{
          backgroundImage: `url(${wall})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={img} className=" h-28 w-screen "></img>
        <h1 className="p-5 text-center text-5xl ">SMART POST</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
