import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-400 py-20 text-white">
      <div className="container flex justify-end">
        <div className="grid grid-cols-3 gap-32">
          <div>
            <h3 className="text-xl font-bold mb-3">Get Connected</h3>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>For Physicians</p>
            </div>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>For Hospitals</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Actions</h3>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>Find Doctors</p>
            </div>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>Find a Hospital</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Company</h3>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>About Us</p>
            </div>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>Career</p>
            </div>
            <div className="flex gap-3">
              <img src="./assets/arrow.svg" />
              <p>Join Our Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
