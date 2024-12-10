import { createSlice } from '@reduxjs/toolkit'


const initialState = {
 cartArr: [],
}




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add :(state, action) => {
         console.log(action.payload);
         state.cartArr.push(action.payload);
    },
    remove: (state, action) => {

        console.log(action.payload);

        state.cartArr.splice(action.payload.index, 1)

    },
    increaseQuantity: (state, action) => {
        console.log(action.payload);
        state.cartArr.map((product) => {
            if (product.title === action.payload.title) {
              product.quantity += 1;
            }
            return product;
        })
    },
    decreaseQuantity: (state, action) => {
        console.log(action.payload);
        state.cartArr.map((product) => {
            if (product.title === action.payload.title && product.quantity >= 1) {
                product.quantity -= 1;
              }

            if (product.title === action.payload.title && product.quantity < 1) {
              state.cartArr.splice(product.index, 1)
            }
          
            return product;
        })
    }
  },
})


// Action creators are generated for each case reducer function
export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer