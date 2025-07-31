import React from "react";
import BookDetails from "./components/Bookdetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

export const books = [
  { id: 101, bname: "MASTER REACT", price: 670 },
  { id: 101, bname: "Deep dive in to angulat", price: 970 },
  { id: 101, bname: "Mongo essentials ", price: 570 },
];

export const courses = [
  { name: "Angular", date: "4/5/2021" },
  { name: "react", date: "6/3/2021" },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <CourseDetails courses={courses} />
      <BookDetails books={books} />
      <BlogDetails />
    </div>
  );
}
export default App;