import React from "react";
import "./HomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-title">Selamat Datang di Restoran Kami</h1>
      <p className="welcome-description">
        Kami menyediakan berbagai makanan yang enak dan sehat
      </p>
      <img
        className="welcome-image"
        src="https://img.jakpost.net/c/2017/02/24/2017_02_24_22244_1487926772._large.jpg"
        alt="Gambar Selamat Datang"
      />
      <p className="welcome-cta">
        Mulai menjelajahi website kami sekarang juga!
      </p>
    </div>
  );
};

export default WelcomePage;
