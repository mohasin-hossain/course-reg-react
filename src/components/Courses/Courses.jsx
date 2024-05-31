import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mx-auto py-10 w-4/6">
      <h3 className="text-blue-400 text-start text-xl font-semibold mb-4">
        Mandatory Courses: {courses.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <Course
            key={idx}
            course={course}
            handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Courses;
