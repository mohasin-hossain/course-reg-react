import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Sidebar = ({
  cart,
  creditHour,
  totalPrice,
  remainingCredit,
  handleRemoveFromCart,
}) => {
  return (
    <div className={`flex-1 w-2/6 max-h-screen p-8 sticky top-0 overflow-scroll ${cart.length ? "block" : "hidden"}`}>
      <p
        className={`text-base font-semibold text-center p-4 ${
          creditHour >= 20 ? "text-green-500 font-bold" : "text-black"
        }`}
      >
        {creditHour >= 20
          ? "Credit Criteria Fullfilled for 1st Semester!"
          : "Credit Hour Remaining: " + remainingCredit + "hr"}{" "}
      </p>
      <hr />
      <p className="mt-4">Added Courses:</p>
      <div className="mb-4">
        {cart.map((cartItem, idx) => (
          <Cart
            key={idx}
            cartItem={cartItem}
            handleRemoveFromCart={handleRemoveFromCart}
          ></Cart>
        ))}
      </div>
      <hr />
      <p className="p-4 text-center font-semibold">Total Credit Hour: {creditHour}hr</p>
      <hr />
      <p className="font-semibold p-4 text-center">Total Price: {totalPrice} USD</p>
      <hr />
    </div>
  );
};

Sidebar.propTypes = {
  cart: PropTypes.object.isRequired,
  creditHour: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Sidebar;
