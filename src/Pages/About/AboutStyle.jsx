import styled from "styled-components";

export const AboutPage = styled.div`
  margin-bottom: 50px;
`;

export const AboutContainer = styled.div`
  position: relative;
`;

export const AboutH2 = styled.div`
  position: absolute;
  font-weight: 700;
  left: 42px;
  top: 42px;
  font-size: 86px;
  line-height: 64px;
  color: #ebebeb;
`;
export const AboutH3 = styled.h3`
  position: absolute;
  left: 52px;
  top: 42px;
  font-weight: 700;
  font-size: 46px;
  color: #741906;
`;
export const TextWrapper = styled.div`
  margin-top: 200px;
  margin-left: -150px;
  display: inline-block;
  width: 620px;
  font-family: "Nunito Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #232730;
  @media (max-width: 805px) {
    margin-left: auto;
    padding: 0 20px;
    width: auto;
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  @media (max-width: 1190px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  @media (max-width: 1350px) {
    justify-content: center;
  }
`;

export const InnerImg = styled.img`
  width: 400px;
`;

export const OutterImg = styled.img`
  width: 400px;
  position: absolute;
  left: 100px;
`;
