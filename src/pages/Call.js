import React, { useState, useEffect } from "react";
import "../styles/Call.css";

const Call = () => {
  const [activeTab, setActiveTab] = useState("volunteers");
  const [volunteers, setVolunteers] = useState([]);
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxfoi9Hc1StyEG4uT6ZeEWMRhMi06E8PdjERaBLUvKCmpx4GcZmwDhGf7O2PGqBDvwA/exec?sheet=volunteers")
      .then((res) => res.json())
      .then((data) => setVolunteers(data))
      .catch((err) => console.error(err));

    fetch("https://script.google.com/macros/s/AKfycbxfoi9Hc1StyEG4uT6ZeEWMRhMi06E8PdjERaBLUvKCmpx4GcZmwDhGf7O2PGqBDvwA/exec?sheet=ngos")
      .then((res) => res.json())
      .then((data) => setNgos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mini-container">
      <div className="call-nav">
        <button
          className={activeTab === "volunteers" ? "active" : ""}
          onClick={() => setActiveTab("volunteers")}
        >
          <img src={`/images/${activeTab === "volunteers" ? "call-active.svg" : "call.svg"}`} alt="Volunteers" />
          Our Volunteers
        </button>
        <button
          className={activeTab === "ngos" ? "active" : ""}
          onClick={() => setActiveTab("ngos")}
        >
          <img src={`/images/${activeTab === "ngos" ? "ngo-active.svg" : "ngo.svg"}`} alt="NGOs" />
          Relevant NGOs
        </button>
      </div>

      <div className="contact-list">
        {activeTab === "volunteers" &&
          volunteers.map((volunteer, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-box">
                <img src="/images/volunteer-contact.svg" alt="Volunteer Contact" />
              </div>
              <div className="contact-info">
                <strong>{volunteer.Name}</strong>
                <div className="phone-list">
                  {volunteer["Phone Number"].split(",").map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.trim()}`} className="phone-number">
                      <img src="/images/call.svg" alt="Call" />
                      {phone.trim()}
                    </a>
                  ))}
                </div>
                <div className="location">
                  <img src="/images/location.svg" alt="Location" />
                  {volunteer.Location}
                </div>
              </div>
            </div>
          ))}

        {activeTab === "ngos" &&
          ngos.map((ngo, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-box">
                <img src="/images/ngo-contact.svg" alt="NGO Contact" />
              </div>
              <div className="contact-info">
                <a href={ngo.Website} target="_blank" rel="noopener noreferrer" className="ngo-name">
                  {ngo.Name}
                </a>
                <p className="purpose">{ngo.Purpose}</p>
                <div className="phone-list">
                  {ngo["Phone Number"].split(",").map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.trim()}`} className="phone-number">
                      <img src="/images/call.svg" alt="Call" />
                      {phone.trim()}
                    </a>
                  ))}
                </div>
                <div className="email">
                  <img src="/images/email.svg" alt="Email" />
                  <a href={`mailto:${ngo.Email}`}>{ngo.Email}</a>
                </div>
                <div className="location">
                  <img src="/images/location.svg" alt="Location" />
                  {ngo.Location}
                </div>
                <div className="social-links">
                  {ngo.Website && (
                    <a href={ngo.Website} target="_blank" rel="noopener noreferrer">
                      <img src="/images/website.svg" alt="Website" />
                    </a>
                  )}
                  {ngo.Instagram && (
                    <a href={ngo.Instagram} target="_blank" rel="noopener noreferrer">
                      <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                  )}
                  {ngo.Twitter && (
                    <a href={ngo.Twitter} target="_blank" rel="noopener noreferrer">
                      <img src="/images/twitter.svg" alt="Twitter" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Call;

