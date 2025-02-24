import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageOpen(false);
    onClose();
  };

  return (
    <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <button className="close-menu" onClick={onClose}>
          <img src="/images/cancel.svg" alt="Close Menu" className="close-menu-icon" />
        </button>
      </div>
      <div className="menu-content">
        {/* Dropdown for Change Language */}
        <div className="menu-item dropdown">
          <div
            className={`dropdown-header ${languageOpen ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            <span>Change Language</span>
            <span className="arrow">{languageOpen ? '\u25B2' : '\u25BC'}</span>
          </div>
          {languageOpen && (
            <div className="dropdown-content">
              <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                English
              </button>
              <button className="dropdown-item" onClick={() => changeLanguage('pidgin')}>
                Pidgin
              </button>
            </div>
          )}
        </div>
        <div className="menu-item">
          <NavLink to="/profile" onClick={onClose}>Profile</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/" onClick={onClose}>Home</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/report" onClick={onClose}>Report</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/sos" onClick={onClose}>SOS</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/call" onClick={onClose}>Call</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/hub" onClick={onClose}>Hub</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/contact" onClick={onClose}>Contact Us</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/about" onClick={onClose}>About Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;

