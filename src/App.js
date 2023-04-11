import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/Cart-actions';

let isinitial = true;

function App() {
  const iscartdvisible = useSelector(state => state.cartd.iscartdvisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.cartd.notification)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if(isinitial){
      isinitial = false;
      return;
    }
    if(cart.changed) {
    dispatch(sendCartData(cart))
    }
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
