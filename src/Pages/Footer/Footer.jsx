import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  BoldLogo,
  ContactUs,
  ContactWraper,
  CopyRight,
  Email,
  EmailButton,
  EmailInput,
  FollowUs,
  FooterContainer,
  Heading,
  Line,
  Logo,
  NewsLetter,
  PageInfo,
  ParaText,
  SocialIcon,
  SocialIconsContainer,
  Summary,
} from "./FooterStyle";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <FooterContainer>
      <PageInfo>
        <Summary>
          <Logo>
            <BoldLogo>Your</BoldLogo>Car
          </Logo>
          <ParaText>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </ParaText>
          <ParaText>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </ParaText>
        </Summary>

        <NewsLetter>
          <Heading>News Letter</Heading>
          <ParaText>
            Subscribe to our news letter for updates, news and exclusive offers
          </ParaText>
          <Email>
            <EmailInput placeholder="Email" type="input" />
            <EmailButton>Subsucrib</EmailButton>
          </Email>
        </NewsLetter>
        <ContactUs>
          <Heading>Contact</Heading>
          <ContactWraper>
            <ParaText>2038 2nd Avenue, Las Vegas, United States</ParaText>
            <FontAwesomeIcon icon={faLocationDot} bounce className="IconSize" />
          </ContactWraper>
          <ContactWraper>
            <FontAwesomeIcon icon={faPhone} bounce className="IconSize" />
            <ParaText className="ZeroMargin">01444773421423</ParaText>
            <ParaText className="ZeroMargin">01477678449405</ParaText>
          </ContactWraper>
          <ContactWraper>
            <FontAwesomeIcon icon={faEnvelope} className="IconSize Fixing" />
            <ParaText>info@YourCar.com</ParaText>
          </ContactWraper>
        </ContactUs>
      </PageInfo>
      <FollowUs>
        <SocialIconsContainer>
          <SocialIcon href="https://facebook.com">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com">
            <FaInstagram />
          </SocialIcon>
        </SocialIconsContainer>
        <Line />
        <CopyRight>
          &copy; Copyright 2023 · <BoldLogo>YourCar</BoldLogo>
          All rights reserved
        </CopyRight>
      </FollowUs>
    </FooterContainer>
  );
}
