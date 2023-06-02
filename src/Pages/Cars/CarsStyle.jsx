import { styled } from "styled-components";

export const CarsH2 = styled.div`
  font-weight: 700;
  font-size: 86px;
  line-height: 64px;
  color: #ebebeb;
  padding-top: 64px;
  text-align: center;
`;
export const CarsContainer = styled.div`
  background-color: #f7f7f7;
`;
export const CarsH3 = styled.h3`
  font-weight: 700;
  font-size: 46px;
  color: #741906;
  position: absolute;
  top: 22%;
  left: 48%;
`;

export const CarsText = styled.div`
  position: relative;
  height: 300px;
`;

export const AddCar = styled.div`
  position: relative;
`;
export const Cards = styled.div`
  overflow: hidden;
  width: calc(100% - 156px);
  margin: auto;
  display: flex;
  & .Selctor {
    transform: translateX(
      calc(${({ slideFactor }) => -1 * slideFactor * 100}%)
    );
  }
`;
export const CardContainer = styled.div`
  min-width: 33.33%;
  transition: all 1s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
  padding: 5px;
  @media (max-width: 1090px) {
    min-width: fit-content;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 4rem 3rem;
  height: 100%;
  padding-bottom: 0;
`;
export const Slide = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: #741906;
  color: #fff;
  font-size: 24px;
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

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin: 5rem;
  padding: 2rem;
`;
export const Dot = styled.div`
  border: none;
  background-color: #b3b3b3;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: #741906;
  }
  &.not-active {
    background-color: #b3b3b3;
  }
`;
export const CarImage = styled.img`
  width: 100%;
`;
export const CarClass = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #741906;
  margin-bottom: 0;
`;
export const CarName = styled.h3`
  font-size: 16px;
  text-align: center;
  margin-top: 0;
  color: #232222f4;
`;
export const CarDescription = styled.p`
  font-size: 16px;
  color: #232222f4;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;
export const SeatNLuggage = styled.div`
  position: relative;
`;
export const Seat = styled.div`
  font-size: 16px;
`;
export const SeatIcon = styled.div`
  position: absolute;
  left: -25px;
`;
export const Luggage = styled.div`
  font-size: 16px;
`;
export const LuggageIcon = styled.div`
  position: absolute;
  left: -25px;
`;
export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
`;
export const Increase = styled.div`
  padding: 5px 10px;
  text-align: center;
  background-color: #741906;
  color: #fff;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`;
export const ItemNums = styled.div`
  padding: 5px 10px;
  text-align: center;
`;
export const Decrease = styled.div`
  padding: 5px 10px;
  background-color: #741906;
  color: #fff;
  text-align: center;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;
