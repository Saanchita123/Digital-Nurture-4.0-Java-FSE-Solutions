import React from "react";

function WelcomeButton()
{
    const sayWelcome = (message) => {
        alert(`${message} to our application ... ! `);
    };


return (
    <div>
        <button onClick={()=>sayWelcome('Welcome')}>
            Say welcome 
        </button>
    </div>
);
}
export default WelcomeButton;
