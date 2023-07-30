import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// store is an onject

const store = configureStore({
  //contains slices
  reducer: {
    cart: cartSlice,
  },
});

export default store;

{
  /***

Create Store
  - configureStore() - rtk,

Provide Store to my app
  - <provider store = {store} />  -- react-redux  

Slice 
  - RTK 
       createSlice({
        name:"",
        intialState,
        reducers:{
            addItem: (state,action) => {
                state.item = action.payload
            }
        }
       })
      *** export default { addItem, removeItem } = cartSlice.actions
      *** export default cartSlice.reducer 

Put slice into our store
   - {
       reducer:{
        cart: cartSlice,
        user: userSlice
       }
     }

To Get the State of Store:
    - const cartItems = useSelector((store) => store.cart.items);
    
To update State -- actions: 
    - const dispatch = useDispatch();
    dispatch(addItems(item));

*/
}
