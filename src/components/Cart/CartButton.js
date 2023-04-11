import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartdActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity =  useSelector(state => state.cart.totalQuantity)

  const CartClickHandler = (event) => {
    event.preventDefault();
    dispatch(cartdActions.Cartd());
  }

  return (
    <button className={classes.button}
    onClick={CartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
