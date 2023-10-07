import styled from "styled-components";
import BackgroundImage from "./imgs/servicesBg.png";

export const ServicesContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-color: #dfdfdf;
  padding-bottom: 10rem;
`;
export const ServicesH2 = styled.div`
  font-weight: 700;
  font-size: 86px;
  line-height: 64px;
  color: #ebebeb;
  padding-top: 64px;
  text-align: center;
  @media (max-width: 444px) {
    font-size: 32px;
  }
`;
export const ServicesH3 = styled.h3`
  font-weight: 700;
  font-size: 46px;
  color: #741906;
  position: absolute;
  top: 25%;
  left: 45%;
  @media (max-width: 444px) {
    font-size: 32px;
  }
`;
export const ServicesText = styled.div`
  position: relative;
  height: 300px;
`;
export const CarSrvices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 790px) {
    flex-direction: column;
  }
`;
export const CarDetails = styled.div`
  width: 250px;
  text-align: center;
`;
export const CarDetailsHeader = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 24px;
`;
export const CarDetailsText = styled.p`
  font-size: 18px;
  line-height: 24px;
`;
export const ServicePhoto = styled.img`
  width: 100px;
  height: 100px;
`;
