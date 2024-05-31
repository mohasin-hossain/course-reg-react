import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToCart}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mx-auto py-20 w-4/5">
      <h3 className="text-blue-400 text-start text-2xl font-semibold mb-4">Available Courses: {courses.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <Course key={idx} course={course} handleAddToCart={handleAddToCart}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
