import styled from "styled-components";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchOrders } from "../features/order/orderSlice";
import { useEffect } from "react";

const Title = styled.div`
    padding:20px 0px 20px 0px;
    font-family: 'Courier New', Courier, monospace;
    font-size:50px;
    font-weight:800;
`;
const ContainerWeb = styled.div`
    padding: 20px 50px 20px 50px;
`;
const ContainerCard = styled.div`  
    display: grid;
    grid-template-columns: repeat(6,1fr);    
    align-items: baseline;
    gap: 10px;
    font-family: 'Courier New', Courier, monospace;
    justify-content:center;
  `;
function Order() {
  return (
    <>
      <ContainerWeb>
        <Navigation />
        <Title>Pedidos</Title>
        <ContainerCard>
          {/* <Card key={index} number_order={order.number_order}  created_at={formatTime(order.created_at)} status={order.status} detail={order.detail}/> */}
          <Card />
        </ContainerCard>
      </ContainerWeb>
    </>
  )
}

export default Order