import styled from "styled-components";

import Logo1 from "./imgs/img1.png";
import Logo2 from "./imgs/img2.png";
import Logo3 from "./imgs/img3.png";
import Logo4 from "./imgs/img4.png";
import Logo5 from "./imgs/img5.png";
import Logo6 from "./imgs/img6.png";
import Logo7 from "./imgs/img7.png";
import Logo8 from "./imgs/img8.png";

export const images = [
  { id: 17, src: Logo8, alt: "Logo 8" },
  { id: 16, src: Logo7, alt: "Logo 7" },
  { id: 15, src: Logo6, alt: "Logo 6" },
  { id: 14, src: Logo5, alt: "Logo 5" },
  { id: 13, src: Logo4, alt: "Logo 4" },
  { id: 12, src: Logo3, alt: "Logo 3" },
  { id: 11, src: Logo2, alt: "Logo 2" },
  { id: 10, src: Logo1, alt: "Logo 1" },
];

export const LogosContainer = styled.div`
  padding: 12rem;
  background-color: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  align-items: center;
  justify-content: center;
`;
export const CarLogo = styled.img`
  width: 8rem;
`;
