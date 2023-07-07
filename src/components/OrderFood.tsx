import styled from "styled-components";

const OrderFoods = styled.div`
    border-bottom: 1px solid #e3e3e5;
    padding: 10px 0 10px 0;
  `;
const NameFood = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  `;
const DescriptionFood = styled.span`
    color: #898d8e;
    font-size: 15px;
  `;
export default function OrderFood({ name_food, amount, description }: { name_food: string, amount: number, description: string }) {
  return (
    <>
      <OrderFoods>
        <NameFood>
          <span>{name_food}</span>
          <span>x{amount}</span>
        </NameFood>
        <DescriptionFood>{description}</DescriptionFood>
      </OrderFoods>
    </>
  )
}
