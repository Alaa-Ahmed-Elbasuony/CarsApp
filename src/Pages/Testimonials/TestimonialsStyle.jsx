import { styled } from "styled-components";

export const TestimonialContainer = styled.div`
  background-color: #12273d;
  padding-bottom: 86px;
`;
export const TestimonialTextContainer = styled.div`
  position: relative;
`;
export const TestimonialText = styled.h2`
  color: #ebebeb64;
  text-align: center;
  font-size: 84px;
  margin-top: 0;
  padding-top: 64px;
  @media (max-width: 675px) {
    font-size: 48px;
  }
  @media (max-width: 444px) {
    font-size: 32px;
  }
`;

export const TestimonialHeading = styled.h3`
  font-size: 48px;
  position: absolute;
  text-align: center;
  color: #fff;
  left: 40%;
  top: 64px;
  @media (max-width: 675px) {
    font-size: 24px;
  }
  @media (max-width: 444px) {
    font-size: 17px;
  }
`;
export const TestimonialCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 850px;
  margin: auto;
  position: relative;
  @media (max-width: 1210px) {
    margin: 0;
    margin-left: 64px;
  }
  @media (max-width: 1032px) {
    width: 600px;
  }
  @media (max-width: 785px) {
    width: 400px;
    margin: auto;
  }
  @media (max-width: 490px) {
    height: 70rem;
  }
  @media (max-width: 440px) {
    width: 33rem;
  }
`;
export const TestimonialPara = styled.p`
  font-size: 24px;
  padding-top: 24px;
  width: 450px;
  @media (max-width: 785px) {
    width: 250px;
    text-align: center;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: center;
  @media (max-width: 785px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const Name = styled.h2`
  font-size: 32px;
  @media (max-width: 785px) {
    margin-bottom: 0;
  }
`;
export const City = styled.h2`
  color: #979797;
  font-size: 24px;
`;
export const Stars = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #ffd90058;
  margin-bottom: 0;
`;
export const CarImg = styled.img`
  position: absolute;
  width: 350px;
  height: 230px;
  right: -17rem;
  bottom: -7rem;
  @media (max-width: 1105px) {
    width: 250px;
    height: 200px;
    right: -10rem;
    bottom: -6rem;
  }
  @media (max-width: 625px) {
    width: 180px;
    height: 120px;
    right: -4rem;
  }
  @media (max-width: 490px) {
    width: 180px;
    height: 160px;
    right: 1rem;
  }
  @media (max-width: 350px) {
    right: 2.5em;
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
    background-color: #f8deb2;
  }
  &.not-active {
    background-color: #b3b3b3;
  }
`;
