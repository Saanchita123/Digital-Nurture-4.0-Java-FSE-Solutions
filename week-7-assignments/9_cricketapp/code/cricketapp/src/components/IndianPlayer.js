import React from "react";
export function oddPlayers({players})
{
    const [,first, ,third, ,fifth]=players;
    return(
        <div>
            <li>first :{first}</li>
            <li>third: {third}</li>
            <li>fifth:{fifth}</li>
        </div>
    );
}

export function EvenPlayers({players})
{
   const [second, ,fourth, ,sixth]=players;
    return(
        <div>
            <li>Second : {second}</li>
            <li>Fourth: {fourth}</li>
            <li>sixth :{sixth}</li>
        </div>
    );
}
//merge feature

const T20Players=['First Player','Second Player','Third Player']
const RanjiTrophyPlayers=['Fourth player','Fifth Player','Sixth Player']
export const IndianPlayers=[...T20Players,...RanjiTrophyPlayers]
export function ListofIndianPlayers({IndianPlayers})
{
    return(
        <div>
            {IndianPlayers.map((player,index)=>(
                <div key={index}>
                    <li>{player}</li>
                    </div>
            ))}
        </div>
    )
}