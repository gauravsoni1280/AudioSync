import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import Async from "./Pages/Async";
import ProtectedRoute from "./auth/ProtectedRoute";
import store from "./store";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/async" element={<ProtectedRoute element={Async} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
