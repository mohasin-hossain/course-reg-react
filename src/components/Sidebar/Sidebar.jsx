import Cart from "../Cart/Cart";

const Sidebar = ({ cart, creditHour, totalPrice, remainingCredit }) => {
  return (
    <div className="flex-1 border-2 w-1/5 max-h-screen p-8">
      <p className={creditHour >= 20 ? 'text-green-500 font-bold' : 'text-black'}>
        {creditHour >= 20
          ? "Credit Criteria Fullfilled"
          : "Credit Hour:" + remainingCredit + "hr Remaining"}
        {" "}
      </p>
      <p>Course Name {cart.length}</p>
      <ol className="bg-green-200">
        {cart.map((cartItem, idx) => (
          <Cart key={idx} cartItem={cartItem}></Cart>
        ))}
      </ol>
      <p>Total Credit Hour: {creditHour}hr</p>
      <p>Total Price: {totalPrice} USD</p>
    </div>
  );
};

export default Sidebar;
