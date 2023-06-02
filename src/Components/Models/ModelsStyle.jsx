import styled from "styled-components";

import Car1 from "./imgs/GCar1.png";
import Car2 from "./imgs/GCar2.png";
import Car3 from "./imgs/GCar3.png";
import Car4 from "./imgs/GCar4.png";
import Car5 from "./imgs/GCar5.png";
import Car6 from "./imgs/GCar6.png";
import Car7 from "./imgs/GCar7.png";
import Car8 from "./imgs/GCar8.png";
import Car9 from "./imgs/GCar9.png";

export const images = [
  { id: 1, src: Car1, alt: "Image 1" },
  { id: 2, src: Car2, alt: "Image 2" },
  { id: 3, src: Car3, alt: "Image 3" },
  { id: 4, src: Car4, alt: "Image 4" },
  { id: 5, src: Car5, alt: "Image 5" },
  { id: 6, src: Car6, alt: "Image 6" },
  { id: 7, src: Car7, alt: "Image 7" },
  { id: 8, src: Car8, alt: "Image 8" },
  { id: 9, src: Car9, alt: "Image 9" },
];

export const ModelsContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
  &:hover {
    opacity: 1;
  }
`;
export const OverlayText = styled.div`
  color: #fff;
  font-size: 18px;
`;
export const CarModel = styled.img`
  width: 100%;
  height: 23rem;
  margin-bottom: -3px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const ContactBtn = styled.button`
  background-color: transparent;
  padding: 1rem 2rem;
  border: 2px #fff solid;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
`;
export const CarParent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 950px) {
    :nth-child(n + 7) {
      display: none;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    :nth-child(n + 4) {
      display: none;
    }
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const OverlayH3 = styled.h3``;
export const OverlayP = styled.p``;
