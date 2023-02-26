import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "../screens/signup"
import Signin from "../screens/signin"
import Dashboard from "../screens/dashboard";
import HomeScreen from "../screens/home";



export default function AppRouting() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <>
              <h1>404 Page Not Found</h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

