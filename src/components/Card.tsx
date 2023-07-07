import { styled } from "styled-components";
import OrderFood from "./OrderFood";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchOrders } from "../features/order/orderSlice";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";


const Cards = styled.div`
    border: 1px solid #e3e3e5 ;
    border-radius: 5px;
  `;

const CardHeader = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f24e40;
    border-radius: 5px 5px 0 0;
    border: 0.1px solid #e3e3e5 ;
    color: white;
    font-size: 15px;
  `;

const CardBody = styled.div`padding: 0px 15px 0px 15px;`;

const CardEnd = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 10px;
    font-size: 15px;
    padding: 7px;
`;

export default function Card() {
  const dispatch = useAppDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const isLoading = useSelector((state: RootState) => state.orders.isLoading);
  const error = useSelector((state: RootState) => state.orders.error);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Order Card");
  console.log(orders);
  // const dispatch = useAppDispatch();
  // const orders = useSelector((state:RootState)=> state.orders.orders)

  // useEffect(() => {
  //   const fetchDataOrders = async () => {
  //     const {data,error} = await supabase.rpc('get_orders_with_foods');
  //     console.log("data");
  //     console.log(data);
  //     if (error) {
  //       console.error(error)
  //       return;
  //     }else{ 
  //       const ordersWithFoods = dispatch(setOrders(data.map((orders:any)=>({
  //         id: orders.id,
  //         number_order: orders.number_order,
  //         created_at: orders.created_at,
  //         detail: orders.foods
  //       }))))

  //       return ordersWithFoods;
  //     }
  //   }
  //   fetchDataOrders();
  // }, [dispatch])
  // console.log("orders");
  // console.log(orders);
  
  const formatTime = (date: Date): string => {
    let dates = new Date(date);    
    const hours = dates.getHours();
    const minutes = dates.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <>
    {orders.map((order,index)=>(
      <Cards key={index}>
        <CardHeader>
          <span>ORD00{order.number_order}</span>
          <span>{formatTime(order.created_at)}</span>
        </CardHeader>
        <CardBody>
          {order.detail.map((details,index) => (
            <OrderFood
              key={index}
              name_food={details.name_food}
              amount={details.amount}
              description={details.description}
            />
          ))}
        </CardBody>
        {/* <CardEnd>
          <button>Listo</button>
          <button>Cancel</button>
        </CardEnd> */}
      </Cards>
      ))}
    </>
  )
}