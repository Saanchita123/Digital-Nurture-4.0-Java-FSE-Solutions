import React from "react";
const players=[
      { name: 'Virat Kohli', score: 87 },
    { name: 'Rohit Sharma', score: 76 },
    { name: 'KL Rahul', score: 52 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'Hardik Pandya', score: 34 },
    { name: 'Ravindra Jadeja', score: 28 },
    { name: 'Rishabh Pant', score: 65 },
    { name: 'Jasprit Bumrah', score: 5 },
    { name: 'Mohammed Shami', score: 11 },
    { name: 'Kuldeep Yadav', score: 14 },
    { name: 'Yuzvendra Chahal', score: 10 },

    ];

    export function ListOfPlayers()
    {
        return(
            <div>
               {players.map((item)=>(
                <div key={item.name}>
                    <li>mr.{item.name} <span>{item.score}</span></li>

                </div>
               ))}
            </div>
        );
    }

    export function Scorebelow70()
    {
        const players70=players.filter(item => item.score <= 70);
        return(
            <div>
              {players70.map((item)=>(
                <div key={item.name}>
                    <li>Mr. {item.name}<span>{item.score}</span> </li>
                </div>
              ))}
            </div>
        );
    }