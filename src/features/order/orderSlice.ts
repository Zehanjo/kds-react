import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../supabase";

interface Order {
    id: number;
    number_order: number;
    created_at: Date;
    number_table: number;
    status: string;
    detail: OrderDetail[];
}

interface OrderDetail {
    id: number;
    create_at: Date;
    status: string;
    name_food: string;
    description: string;
    amount: number;
    price: number;
}

interface OrdersState {
    orders: Order[],
    isLoading: boolean,
    error: string | null
}

const initialState: OrdersState = {
    orders: [],
    isLoading: false,
    error: null
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        // addTakeOrder:(state, action) =>{
        //     state.push(action.payload)
        // },
        // setOrders:(state,action: PayloadAction<Order[]>)=>{
        //     state.orders = action.payload;
        // }
        fetchOrdersStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchOrdersSuccess: (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchOrdersFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
          },
    }
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure } = orderSlice.actions

export default orderSlice.reducer


export const fetchOrders = () => async (dispatch: any) => {
    try {
        dispatch(fetchOrdersStart());
        const { data: orders, error } = await supabase.rpc('get_orders_with_foods');

        if (error) {
            throw new Error(error.message);
        }

        const formattedOrders = orders.map((order: any) => ({
            "id": order.order_id,
            "number_order": order.number_order,
            "status": order.status,
            "created_at": order.created_at,
            "detail": order.foods,            
        }));

        console.log("Data");
        console.log(orders);
        
        if(orders[0].status == 3){
            console.log('Si esta activo')
        }else{
            console.log('No esta activo');
            
        }
        dispatch(fetchOrdersSuccess(formattedOrders));
    } catch (error) {
        dispatch(fetchOrdersFailure('error'));
    }
};