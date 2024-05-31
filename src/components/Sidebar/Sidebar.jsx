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
    <div className="flex-1 border-2 w-1/5 max-h-screen p-8">
      <p
        className={`text-base font-semibold text-center ${
          creditHour >= 20 ? "text-green-500 font-bold" : "text-black"
        }`}
      >
        {creditHour >= 20
          ? "Credit Criteria Fullfilled"
          : "Credit Hour Remaining: " + remainingCredit + "hr"}{" "}
      </p>
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
      <p className="p-4">Total Credit Hour: {creditHour}hr</p>
      <hr />
      <p className="font-semibold p-4">Total Price: {totalPrice} USD</p>
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
