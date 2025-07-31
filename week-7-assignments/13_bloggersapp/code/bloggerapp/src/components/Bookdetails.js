import React from "react";
const BookDetails =(props)=>
{
    return(
    <div>
        <h1>Book Details </h1>
        <ul>
            {props.books.map((book)=>(
                <div key={book.id}>
                    <h3>{book.name}</h3>
                    <h3>{book.price}</h3>
                </div>
            ))}
        </ul>
    </div>
    );
}
export default BookDetails;