import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store';


const CartButton = (props) => {
  const dispatch = useDispatch()

  const CartClickHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.Cart());
  }

  return (
    <button className={classes.button}
    onClick={CartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
