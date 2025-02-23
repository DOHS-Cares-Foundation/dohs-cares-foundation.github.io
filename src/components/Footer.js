import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/", icon: "home.svg", activeIcon: "home-active.svg" },
    { name: "Report", path: "/report", icon: "report.svg", activeIcon: "report-active.svg" },
    { name: "SOS", path: "/sos", icon: "sos.svg" },
    { name: "Call", path: "/call", icon: "call.svg", activeIcon: "call-active.svg" },
    { name: "Hub", path: "/hub", icon: "hub.svg", activeIcon: "hub-active.svg" },
  ];

  return (
    <footer className="footer">
      {pages.map((page) => {
        const isActive = location.pathname === page.path;
        if (page.name === "SOS") {
          return (
            <Link
              key={page.name}
              to={page.path}
              className={`footer-link sos ${isActive ? "active" : ""}`}
            >
              <img src={`/images/${page.icon}`} alt={page.name} />
              <span>{page.name}</span>
            </Link>
          );
        }
        return (
          <Link
            key={page.name}
            to={page.path}
            className={`footer-link ${isActive ? "active" : ""}`}
          >
            <img src={`/images/${isActive ? page.activeIcon : page.icon}`} alt={page.name} />
            <span>{page.name}</span>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
