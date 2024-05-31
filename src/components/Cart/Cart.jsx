
const Cart = ({cartItem}) => {
    const {course_name} = cartItem;
    return (
            <li className="list-decimal">{course_name}</li>
    );
};

export default Cart;