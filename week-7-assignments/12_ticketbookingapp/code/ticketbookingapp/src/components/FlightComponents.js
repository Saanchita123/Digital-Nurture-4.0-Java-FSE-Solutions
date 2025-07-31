import React from "react";


export function FlightList(props)
{
    return (
        <div>
            {props.flights.map(flight=>(
                <div key={flight.id} className="flight-card">
                    <h3>{flight.name}</h3>
                    <p>Time: {flight.time}</p>
                    <p>Price : {flight.price}</p>
                    {props.isLoggedIn && (
                        <button onClick={()=> props.onBookFlight(flight)}>
                            Book now
                        </button>
                    )}
                    </div>
                
            ))}
        </div>
    );
}

export function BookingConfirmation(props)
{
    if(!props.flight) return null;

    return (
        <div className="booking-confirmantion">
            <h3>Booking confirmation </h3>
            <p>Flight : {props.flight.name}</p>
            <p>Departure : {props.flight.time}</p>
            <p>Price : {props.flight.price}</p>
            <button className="confirm-button">
                Confirm Booking 
            </button>
        </div>
    )
}