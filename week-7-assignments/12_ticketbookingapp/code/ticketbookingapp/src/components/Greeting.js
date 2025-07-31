import React from "react";
export function UserGreeting()
{
    return <h2>Welcom Back ! readt to book your next flight </h2>;
}

export function GuestGreeting()
{
    return(
        <div className="guest-greeting">
            <h2>Browser Available flights : </h2>
            <p>Login to book tickets</p>
        </div>
    );
}

export function Greeting({isLoggedIn})
{
    if(isLoggedIn)
    {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}