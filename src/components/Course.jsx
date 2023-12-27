import React from "react";
import Header from "./Header";
import Content from "./Content";


const Course = ({ course }) => {
  // let total = 0;
  // course.parts.forEach((item) => (total += item.exercises));
const total = course.parts.reduce((accumulator, currentPart) => {
  return accumulator + currentPart.exercises;
}, 0);



  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <h4>total of {total} exercises</h4>
    </div>
  );
};

export default Course;
