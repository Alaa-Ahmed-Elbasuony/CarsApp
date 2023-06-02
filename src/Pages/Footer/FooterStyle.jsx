import styled from "styled-components";

export const FooterContainer = styled.footer``;

export const FollowUs = styled.footer`
  padding: 20px;
  text-align: center;
`;

export const BoldLogo = styled.span`
  font-weight: 700;
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #741906;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: #333;
  margin: 0 10px;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #000;
  }
`;
export const Line = styled.div`
  border: 1px #741906 solid;
  margin: 2rem;
`;
export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Summary = styled.div`
  width: 200px;
`;
export const NewsLetter = styled.div`
  /* width: 240px; */
  text-align: center;
  & p {
    width: 240px;
    margin: auto;
    margin-bottom: 5rem;
  }
`;
export const ContactUs = styled.div`
  width: 180px;
  & .IconSize {
    position: absolute;
    left: -25px;
    top: 12px;
    font-size: 16px;
  }
  & .ZeroMargin {
    margin: 0;
  }
  & .Fixing {
    top: 0;
  }
`;
export const Heading = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #741906;
`;
export const ParaText = styled.p`
  font-size: 16px;
  color: #12273d;
`;
export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EmailInput = styled.input`
  padding: 15px;
  width: 275px;
  border: 1px solid #741906;
`;
export const EmailButton = styled.button`
  color: #fff;
  width: 135px;
  font-size: 18px;
  padding: 10px;
  background-color: #741906;
`;
export const ContactWraper = styled.div`
  position: relative;
`;
export const CopyRight = styled.div`
  font-size: 12px;
`;
