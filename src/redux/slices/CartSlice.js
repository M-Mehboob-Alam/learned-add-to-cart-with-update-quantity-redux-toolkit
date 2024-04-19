import { createSlice } from "@reduxjs/toolkit";
import { CgLaptop } from "react-icons/cg";

export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        add: (state, action)=>{
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
      
        addQuantity:{reducer(state, action) {
            // Your reducer logic here if needed
            const  id = action.payload[0];
            const  quantity = action.payload[1];
            const item = state.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
                item.sum = quantity * item.price;
            }

        },
        prepare(...args) {
            // Manipulate args or return a custom payload
            console.log('checking payloads');
            console.log(args);
            return { payload: args };
        },
    },
        removeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
        
    }
});

export const {add, remove, addQuantity, removeQuantity} = CartSlice.actions;
export default CartSlice.reducer;