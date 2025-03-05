import React, { useState, useEffect } from "react";
import '../styles/Call.css';

const Call = () => {
  const [activeTab, setActiveTab] = useState("volunteers");
  const [volunteers, setVolunteers] = useState([]);
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxfoi9Hc1StyEG4uT6ZeEWMRhMi06E8PdjERaBLUvKCmpx4GcZmwDhGf7O2PGqBDvwA/exec?sheet=volunteers")
      .then(response => response.json())
      .then(data => setVolunteers(data));

    fetch("https://script.google.com/macros/s/AKfycbxfoi9Hc1StyEG4uT6ZeEWMRhMi06E8PdjERaBLUvKCmpx4GcZmwDhGf7O2PGqBDvwA/exec?sheet=ngos")
      .then(response => response.json())
      .then(data => setNgos(data));
  }, []);

  return (
    <div className="mini-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "volunteers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("volunteers")}
        >
          <img src="/images/call.svg" alt="Call Volunteers" className="tab-icon" />
          Our Volunteers
        </button>
        <button
          className={activeTab === "ngos" ? "tab active" : "tab"}
          onClick={() => setActiveTab("ngos")}
        >
          <img src="/images/ngo.svg" alt="Relevant NGOs" className="tab-icon" />
          Relevant NGOs
        </button>
      </div>

      {/* Volunteer Contacts */}
      {activeTab === "volunteers" && (
        <div className="contacts">
          {volunteers.map((volunteer, index) => (
            <div className="contact-card" key={index}>
              <div className="icon-box">
                <img src="/images/volunteer-contact.svg" alt="Volunteer" />
              </div>
              <div className="contact-info">
                <strong className="contact-name">{volunteer.Name}</strong>
                <div className="contact-detail">
                  {volunteer["Phone Number"].split(",").map((phone, i) => (
                    <a key={i} href={`tel:${phone.trim()}`} className="phone">
                      <img src="/images/call.svg" alt="Call" />
                      {phone.trim()}
                    </a>
                  ))}
                </div>
                <div className="contact-detail">
                  <img src="/images/location.svg" alt="Location" />
                  {volunteer.Location}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* NGO Contacts */}
      {activeTab === "ngos" && (
        <div className="contacts">
          {ngos.map((ngo, index) => (
            <div className="contact-card" key={index}>
              <div className="icon-box">
                <img src="/images/ngo-contact.svg" alt="NGO" />
              </div>
              <div className="contact-info">
                <a href={ngo.Website} className="contact-name" target="_blank" rel="noopener noreferrer">
                  {ngo.Name}
                </a>
                <p className="contact-purpose">{ngo.Purpose}</p>
                <div className="contact-detail">
                  <img src="/images/location.svg" alt="Location" />
                  {ngo.Location}
                </div>
                <div className="contact-detail">
                  {ngo["Phone Number"].split(",").map((phone, i) => (
                    <a key={i} href={`tel:${phone.trim()}`} className="phone">
                      <img src="/images/call.svg" alt="Call" />
                      {phone.trim()}
                    </a>
                  ))}
                </div>
                <div className="contact-detail">
                  <a href={`mailto:${ngo.Email}`} className="email">
                    <img src="/images/email.svg" alt="Email" />
                    {ngo.Email}
                  </a>
                </div>
                <div className="social-links">
                  <a href={ngo.Website} target="_blank" rel="noopener noreferrer">
                    <img src="/images/website.svg" alt="Website" />
                  </a>
                  <a href={ngo.Instagram} target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.svg" alt="Instagram" />
                  </a>
                  <a href={ngo.Twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Call;
