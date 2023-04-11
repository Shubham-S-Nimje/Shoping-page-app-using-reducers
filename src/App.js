import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { cartdActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isinitial = true;

function App() {
  const iscartdvisible = useSelector(state => state.cartd.iscartdvisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.cartd.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    if(isinitial){
      isinitial = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(cartdActions.shownotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending Cart Data..'
      }))
    const response = await fetch('https://expense-tracker-using-redux-default-rtdb.firebaseio.com/cart.json',
    {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
    if(!response.ok){
      throw new Error('Failed to send cart data...')
    }
    else{
      dispatch(cartdActions.shownotification({
        status: 'success',
        title: 'Success',
        message: 'Cart Data Saved Succesfully'
      }))
    }
  };
  sendCartData().catch(error => {
    dispatch(cartdActions.shownotification({
      status: 'error',
      title: 'Failed',
      message: 'Error in sending Cart Data..'
    }))
    console.log('[ERROR]', error.message)
  })
  },[cart, dispatch])

  return (
    <Fragment>
    {notification && <Notification 
    status={notification.status}
    title={notification.title}
    message={notification.message}/>}
    <Layout>
      {iscartdvisible && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
