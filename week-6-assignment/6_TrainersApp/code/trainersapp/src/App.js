import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Home } from "./Home";
import {TrainerList} from "./TrainerList";
import { TrainerDetailWrapper } from "./TrainerDetails";
import trainers from "./TrainerMock"; 
function App()
{
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trainer">Trainer List</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/trainer" element={<TrainerList trainers={trainers}/>}/>
            <Route path="/trainer/:id" element={<TrainerDetailWrapper trainers={trainers}/>}/>
          </Routes>
        </div>
    </Router>
  )
}
export default App;