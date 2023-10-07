import { styled } from "styled-components";

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 38rem;
  @media (max-width: 500px) {
    width: 100%;
  }
  margin-top: 90px;
  height: calc(100vh - 90px);
  background-color: #12273de5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .btn {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    background-color: #741906;
    padding: 1rem 2rem;
  }
`;
