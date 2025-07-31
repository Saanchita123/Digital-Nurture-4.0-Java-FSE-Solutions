import React from "react";

function SyntheticEvent() {
    const handleClick= (e) => 
    {
        e.preventDefault();
        alert('I was clicked ... ');
        console.log(e);
    };

    return(
        <div>
            <button onClick={handleClick}>
                Click me (Synthetic Event)
            </button>
        </div>
    )
}
export default SyntheticEvent;