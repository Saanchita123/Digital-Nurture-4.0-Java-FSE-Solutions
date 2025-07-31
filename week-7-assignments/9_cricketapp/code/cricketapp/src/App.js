import React from "react";
import { ListOfPlayers, Scorebelow70 } from "./components/ListOfPlayers";
import {
  oddPlayers,
  EvenPlayers,
  IndianPlayer,
  ListofIndianPlayers,
} from "./components/IndianPlayer";

function App() {
  const flag = false;
  const IndianTeam = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shubman Gill",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Rishabh Pant",
    "Jasprit Bumrah",
    "Mohammed Shami",
    "Kuldeep Yadav",
    "Yuzvendra Chahal",
  ];
  return(
    <div>
      {flag?
      (
        <div>
          <h1>List of Players : </h1>
          <ListOfPlayers/>
          <hr/>
          <h1>List of Players having Scores less than 70 </h1>
          <Scorebelow70/>
        </div>
      ):(
        <div>
          <div>
            <h1>Indian Team</h1>
            <h1>Odd players</h1>
            <oddPlayers players={IndianTeam}/>
            <hr/>
            <h1>Even Players : </h1>
            <EvenPlayers players={IndianTeam}/>
          </div>
          <hr/>
          <div>
            <h1>List of Indian Players merged : </h1>
            <ListOfPlayers IndianPlayer={IndianTeam}/>
          </div>
        </div>
      )}
    </div>
  )
}
export default App;
