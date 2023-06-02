// import Navbar from "../../Components/Navbar/Navbar";
import {
  AboutContainer,
  AboutH2,
  AboutH3,
  AboutPage,
  ImgWrapper,
  InnerImg,
  OutterImg,
  TextWrapper,
  Wrapper,
} from "./AboutStyle";
import inner from "./inner.png";
import outter from "./outter.png";

function About() {
  return (
    <AboutPage id="about">
      <AboutContainer>
        {/* <Navbar /> */}
        <AboutH2>ABOUT US</AboutH2>
        <AboutH3 className="about-h3">About us</AboutH3>
      </AboutContainer>
      <Wrapper>
        <TextWrapper>
          <p>
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>
          <p>
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </TextWrapper>
        <ImgWrapper>
          <InnerImg src={inner} alt="car background not found" />
          <OutterImg src={outter} alt="car not found" />
        </ImgWrapper>
      </Wrapper>
    </AboutPage>
  );
}

export default About;
