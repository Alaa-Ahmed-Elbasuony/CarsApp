import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  margin-bottom: 25px;
`;
export const Card = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0 10px;
`;
export const Slide = styled.div`
  position: absolute;
  background-color: #741906;
  color: #fff;
  font-size: 24px;
  @media (max-width: 1150px) {
    font-size: 18px;
  }
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  cursor: pointer;
  &.Left {
    left: 24px;
  }
  &.Right {
    right: 24px;
  }
`;

export const CarImage = styled.img`
  width: 100%;
`;
export const CarClass = styled.h2`
  font-size: 28px;
  margin: 0;
  @media (max-width: 1150px) {
    font-size: 20px;
  }
  text-align: center;
  color: #741906;
`;
export const CarName = styled.h3`
  font-size: 16px;
  @media (max-width: 1150px) {
    font-size: 12px;
  }
  text-align: center;
  color: #232222f4;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  & .del-icon {
    color: #000;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
  }
`;
export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
`;
export const Increase = styled.div`
  text-align: center;
  background-color: #741906;
  color: #fff;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  width: 2.5rem;
  height: 2rem;
`;
export const ItemNums = styled.div`
  padding: 5px 10px;
  color: #000;
  text-align: center;
`;
export const Decrease = styled.div`
  background-color: #741906;
  color: #fff;
  text-align: center;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  width: 2.5rem;
  height: 2rem;
`;
export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddCar = styled.div`
  position: relative;
`;
export const AddDel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
`;
