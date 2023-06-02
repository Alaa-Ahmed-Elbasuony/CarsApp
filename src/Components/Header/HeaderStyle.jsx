import styled from "styled-components";
import BGImag from "./img/back-ground.png";

export const HeaderComponent = styled.div`
  background-image: url(${BGImag});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 75rem;
`;
export const HeaderContainer = styled.div`
  color: #fff;
  text-align: justify;
  -moz-text-align-last: right;
  text-align-last: right;
  width: 620px;
  padding-right: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  float: right;
  @media (max-width: 930px) {
    text-align: center;
    -moz-text-align-last: auto;
    text-align-last: auto;
    width: auto;
    padding-right: 0;
    float: none;
    align-items: center;
  }
`;
export const HeaderH1 = styled.h1`
  margin-top: 128px;
  font-size: 64px;
  margin-bottom: 16px;
  @media (max-width: 930px) {
    font-size: 48px;
  }
`;
export const HeaderH2 = styled.h2`
  width: 350px;
  font-size: 32px;
  @media (max-width: 930px) {
    font-size: 28px;
  }
`;

export const DiscoverBtn = styled.button`
  width: 15rem;
  height: 5rem;
  padding-right: 20px;
  font-size: 20px;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  border: #fff 3px solid;
  cursor: pointer;
  &:hover {
    background-color: #741906;
    border: none;
    padding: 0;
    text-transform: uppercase;
  }
  @media (max-width: 930px) {
    margin-top: 10rem;
  }
`;
