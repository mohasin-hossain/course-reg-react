import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleAddToCart = (course, price, credit_hour) => {
    const alreadyInCart = cart.find((c) => c.id === course.id);

    if (alreadyInCart === undefined) {
      const newCourse = [...cart, course];
      setCart(newCourse);
      setCreditHour(creditHour + credit_hour);
      setTotalPrice(totalPrice + price);
      setRemainingCredit(remainingCredit - credit_hour);
    } else {
      alert(
        "This course is already added for Registration. Try other courses."
      );
    }
  };

  const handleRemoveFromCart = (id, price, credit_hour) => {
    const filteredCartCourse = cart.filter((c) => c.id !== id);
    setCart(filteredCartCourse);
    setCreditHour(creditHour - credit_hour);
    setTotalPrice(totalPrice - price);
    setRemainingCredit(remainingCredit + credit_hour);
  };

  return (
    <div className="bg-gray-100">
      <h1 className="text-center p-4 bg-white text-blue-500 text-3xl font-bold border-b-2">
        {" "}
        Course Registration Portal
      </h1>
      <div className="flex px-10">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Sidebar
          cart={cart}
          creditHour={creditHour}
          totalPrice={totalPrice}
          remainingCredit={remainingCredit}
          handleRemoveFromCart={handleRemoveFromCart}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;
