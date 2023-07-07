import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface OrderDetail{
    id:number;
    create_at:Date;
    status:string;
    name_food:string;
    description:string;
    amount:number;
    price:number;
}

interface DetailsState{
    details: OrderDetail[];
}

const initialState: DetailsState = {
    details:[]
}

export const detailSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setDetails:(state,action: PayloadAction<OrderDetail[]>)=>{
            state.details = action.payload;
        }
    }
})

export const { setDetails } = detailSlice.actions

export default detailSlice.reducer