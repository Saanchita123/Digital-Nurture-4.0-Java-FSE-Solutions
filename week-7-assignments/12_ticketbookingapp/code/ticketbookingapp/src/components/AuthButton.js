import React from "react";

export function LoginButton({onClick})
{
    return(
    <button className="auth-button" onClick={onClick}>
        Login
    </button>
    );
}

export function LogoutButton({onClick})
{
    return(
        <button className="auth-button" onClick={onClick}>
            Logout
        </button>
    );
}