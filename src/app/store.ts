import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/order/orderSlice";
import detailReducer from "../features/order/detailSlice";


export const store = configureStore({
    reducer: {
        orders: orderReducer,
        details: detailReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch