import { cartActions } from "./cart-slice";
import { cartdActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(cartdActions.shownotification({
                status: 'pending',
                title: 'Fetching',
                message: 'Fetching Cart Data..'
              }));
            const response = await fetch(
                'https://expense-tracker-using-redux-default-rtdb.firebaseio.com/cart.json'
            );
            if(!response.ok) {
                throw new Error('Unable To Fetch Data')
            }
            const data = await response.json();
            return data;
            
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCartData({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
            }));
            dispatch(cartdActions.shownotification({
                status: 'success',
                title: 'Fetched',
                message: 'Cart Data Fetched Succesfully'
              }))
        }
        catch (error) {
            dispatch(cartdActions.shownotification({
                status: 'error',
                title: 'Failed to Get Data',
                message: 'Error in Getting Cart Data..'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      //sync sideeffect
      dispatch(cartdActions.shownotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending Cart Data..'
      }));
      const sendRequest = async() => {
        const response = await fetch('https://expense-tracker-using-redux-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if(!response.ok){
        throw new Error('Failed to send cart data...')
      }
      }
      try {
        await sendRequest()
        dispatch(cartdActions.shownotification({
          status: 'success',
          title: 'Success',
          message: 'Cart Data Saved Succesfully'
        }))
      }
      catch (error) {
        dispatch(cartdActions.shownotification({
          status: 'error',
          title: 'Failed',
          message: 'Error in sending Cart Data..'
        }))
      }
    };
  };