import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Report from "./pages/Report";
import SOS from "./pages/SOS";
import Call from "./pages/Call";
import Hub from "./pages/Hub";
import Chat from "./pages/Chat";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/call" element={<Call />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
