import styled from "styled-components";

export const NavbarContainer = styled.nav`
  font-family: "Lora";
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 78px;
  z-index: 5;
  background-color: ${({ intersect }) => (intersect ? "#fff" : "transparent")};
  color: ${({ intersect }) => (intersect ? "#12273D" : "#fff")};
  @media (max-width: 440px) {
    padding-right: 0;
  }
  @media (max-width: 440px) {
    padding-left: 15px;
  }
`;

export const BoldLogo = styled.span`
  font-weight: 700;
`;
export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const NavbarList = styled.ul`
  list-style-type: none;
`;

export const NavbarListElement = styled.li`
  display: inline-block;
  margin-left: 30px;
  cursor: pointer;
  height: 38px;
  font-weight: 700;
  font-size: 24px;
  padding: 5px;
  &.list {
    display: none;
  }

  &:hover {
    transform: scale(1.2);
  }
  &:first-child {
    margin-left: 0;
  }
  & .active {
    background-color: #741906;
    color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
  }
  & .active-btn {
    color: #741906;
    border-radius: 6px;
  }

  @media (max-width: 970px) {
    padding: 0;
    &.list {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
    &.phone-nav {
      display: none;
    }
  }
`;
export const SpanEl = styled.span`
  @media (max-width: 550px) {
    display: flow-root;
    margin-top: -32px;
    margin-left: 24px;
  }
`;
export const Lobby = styled.div`
  position: relative;
`;
export const Num = styled.div`
  position: absolute;
  font-size: 18px;
  top: -50%;
  right: -50%;
  color: #000;
  text-align: center;
  background-color: #f8d7a4;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  &.active-num {
    background-color: #741906;
    color: #fff;
  }
`;
export const DivEl = styled.div`
  display: inline-block;
  &.DivStyle {
    @media (max-width: 970px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 38rem;
      margin-top: 90px;
      height: calc(100vh - 90px);
      background-color: #081018f1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 25px;
      text-align: center;
      .phone-nav {
        display: flex;
        width: 100%;
        color: #fff;
        margin-left: 0;
        &:hover {
          transform: scale(1);
        }
      }
      & .width {
        width: 100%;
        display: block;
      }
    }
  }
`;
