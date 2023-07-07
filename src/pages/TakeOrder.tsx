import React, { useState } from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Navigation from "../components/Navigation";
// import { addTakeOrder } from "../features/order/orderSlice";

const ContainerWeb = styled.div`
    display:flex;
    padding: 20px 50px 50px 50px;
    flex-direction:column
`;
const ContainerRegister = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:5px;
`;

const Title = styled.div`
    padding:20px 0px 20px 0px;
    font-family: 'Courier New', Courier, monospace;
    font-size:50px;
    font-weight:800;
`;

function TakeOrder() {
  const [takeOrder, setTakeOrder] = useState({
    number_table: '52',
    number_order: '35',
    details: [
      {
        name_food: 'Sopa Verde',
        amount: 2
      },
      {
        name_food: 'Pachamanca',
        amount: 3
      },
      {
        name_food: 'Lomo saltado',
        amount: 2
      }
    ]
  })

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {
    setTakeOrder({
      ...takeOrder,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault()
    // dispatch(addTakeOrder(takeOrder))
    // console.log(takeOrder);

  }

  return (
    <>
      <ContainerWeb>
        <Navigation />
        <Title>Simulación de Registrar Pedido</Title>
        <ContainerRegister>
          <Form onSubmit={handleSubmit}>
            <input name="number_table" type="text" placeholder="food" onChange={handleChange} />
            <textarea name="completed" placeholder="completed order" onChange={handleChange}></textarea>
            <button>Save</button>
          </Form>
        </ContainerRegister>
      </ContainerWeb>
    </>
  )
}

export default TakeOrder