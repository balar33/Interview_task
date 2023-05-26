import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./component/login/Login";
import Header from "./component/header/Header";
import Register from "./component/Register/Register";
import Dashboard from "./component/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
