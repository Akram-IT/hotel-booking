import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Royal Stay</h1>
        <ul>
          <li>Home</li>
          <li>Rooms</li>
          <li>Book Now</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero">
        <h2>Welcome to Royal Stay Hotel</h2>
        <p>Experience luxury and comfort like never before.</p>
      </header>

      <section className="rooms">
        <h3>Our Rooms</h3>
        <div className="room-list">
          <div className="room-card1">
            <img src="C:\Users\lets play physics\Downloads\pic1.jpg" alt="" />
            <h4>Deluxe Room</h4>
            <p>₹4000 / night</p>
          </div>
          <div className="room-card2">
            <img src="C:\Users\lets play physics\Downloads\pic2.jpg" alt="" />
            <h4>Suite Room</h4>
            <p>₹6000 / night</p>
          </div>
          <div className="room-card3">
            <img src="C:\Users\lets play physics\Downloads\pic3.jpg" alt="" />
            <h4>Standard Room</h4>
            <p>₹2500 / night</p>
          </div>
          <div className="room-card4">
            <img src="C:\Users\lets play physics\Downloads\pic4.jpg" alt="" />
            <h4>Cottage</h4>
            <p>₹8000 / night</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Royal Stay Hotel. All rights reserved.</p>
        <p><i>Designed and developed by Akram.</i></p>
      </footer>
    </div>
  );
}

export default App;