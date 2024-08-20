import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplashScreen from "./shared/SplashScreen";

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <SplashScreen />
      </AnimatePresence>
      <ActiveSectionProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ActiveSectionProvider>
    </Router>
  );
};

export default App;
