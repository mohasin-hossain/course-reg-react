import PropTypes from "prop-types";

const Course = ({ course, handleAddToCart }) => {
  const { course_name, description, course_img, price, credit_hour } = course;

  return (
    <div className="flex flex-col justify-around shadow-lg p-4 rounded-lg bg-white h-[30rem]">
      <img
        className="w-full"
        src={course_img}
        alt={`Course Image for ${course_name}`}
      />
      <h3 className="font-semibold text-xl">{course_name}</h3>
      <p className="text-slate-500 text-base">{description}</p>
      <div className="flex justify-between">
        <div>Price: {price}</div>
        <div>Credit: {credit_hour}hr</div>
      </div>
      <button
        onClick={() => handleAddToCart(course, price, credit_hour)}
        className="p-2 bg-blue-500 w-full rounded-lg text-white"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Course;
