import React, { Component } from "react";
import { Cart } from "./Cart";
export class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        new Cart("Appel", 1.5),
        new Cart("banana", 0.75),
        new Cart("Headphones", 50),
        new Cart("Book", 15),
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Online Shopping cart</h1>
        <table border="1" cellPadding="10">
          <thead>
            <tr>Item name</tr>
            <tr>Item price</tr>
          </thead>
          <tbody>
            {this.state.cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
