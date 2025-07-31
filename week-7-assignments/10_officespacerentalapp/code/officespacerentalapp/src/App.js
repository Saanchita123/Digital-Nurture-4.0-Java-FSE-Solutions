import React from "react";
import './App.css';

const officeSpaces=[
  {
  name:'DBS',
  rent:50000,
  address:'Oriental',
  image: './images/office_1.jpg'
  },
  {
    name: 'Chrome Tower',
    rent: 65000,
    address: 'Downtown',
    image: './images/office_2.jpg'
  },
  {
    name: 'Sky View',
    rent: 85000,
    address: 'Business District',
    image: './images/office_3.jpg'
  }
];

function OfficeSpace({office})
{
  const rentColor=office.rent<=60000?'red':
  office.rent >= 80000 ? 'green':'black';
  return(
    <div>
      <img src={office.image} alt={office.name} width="225" height="225"/>
      <h2>Name : {office.name}</h2>
      <h3 style={{color:rentColor}}>Rent : rs. {office.rent}</h3>
    </div>
  )
}
function App()
{
  return (
    <div className="app">
      <h1> Office space At Affordable Range</h1>
      <div>
        {officeSpaces.map((office,index)=>
        (
          <OfficeSpace key={index} office={office}/>
        ))}
      </div>
    </div>
  )
}
export default App;