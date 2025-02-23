import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Menu from './Menu';

const Header = () => {
  const [activeButton, setActiveButton] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const buttons = [
    { name: "Exit", icon: "exit.svg", activeIcon: "exit-active.svg", action: handleExit },
    { name: "Chat", icon: "message.svg", activeIcon: "message-active.svg", action: () => navigate("/chat") },
    { name: "Menu", icon: "menu.svg", activeIcon: "menu-active.svg", action: toggleMenu }
  ];

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="/images/logo.svg" alt="Prefem Logo" className="logo" />
        </Link>
        <div className="nav-buttons">
          {buttons.map(({ name, icon, activeIcon, action }) => (
            <button
              key={name}
              className={`nav-btn ${activeButton === name ? "active" : ""}`}
              onClick={() => {
                setActiveButton(name);
                action();
              }}
            >
              <img src={`/images/${activeButton === name ? activeIcon : icon}`} alt={name} />
              <span className="nav-text">{name}</span>
            </button>
          ))}
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
                
