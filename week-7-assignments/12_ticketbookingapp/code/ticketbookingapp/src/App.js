import React, { use, useState } from "react";
import { LoginButton, LogoutButton } from "./components/AuthButton";
import { Greeting } from "./components/Greeting";
import { FlightList, BookingConfirmation } from "./components/FlightComponents";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedFlight, setSlectedFlight] = useState(null);
  const flights = [
    { id: 1, name: "new york to London", time: "9:00 AM ", price: "$550" },
    { id: 2, name: "Paris to Tokyo", time: "2:00 PM ", price: "$780" },
    { id: 3, name: "Dubai to singapore", time: "7:45 AM ", price: "$620" },
    { id: 4, name: "London to USA", time: "3:00 AM ", price: "$950" },
  ];

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSlectedFlight(null);
  };

  const handleBookFlight = (flight) => {
    setSlectedFlight(flight);
  };

  return (
    <div className="app-contianer">
      <header>
        <h1>Flight tickets booking </h1>
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout} />
        ) : (
          <LoginButton onClick={handleLogin} />
        )}
      </header>
      <main>
        <Greeting  isLoggedIn={isLoggedIn}/>
        {isLoggedIn && selectedFlight ? (
          <BookingConfirmation flight={selectedFlight} />
        ) : (
          <FlightList
            flights={flights}
            isLoggedIn={isLoggedIn}
            onBookFlight={handleBookFlight}
          />
        )}
      </main>
    </div>
  );
}
export default App;
