import PropTypes from "prop-types";

const Cart = ({ cartItem, handleRemoveFromCart }) => {
  const { course_name } = cartItem;
  return (
    <div className="flex justify-between my-4 p-2 bg-green-200 list-decimal">
      {course_name}
      <button
        onClick={() => handleRemoveFromCart(cartItem.id)}
        className="p-2 bg-red-400 outline-none border-none rounded-md"
      >
        X
      </button>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
