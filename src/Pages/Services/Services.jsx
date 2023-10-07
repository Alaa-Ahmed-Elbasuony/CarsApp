// import Navbar from "../../Components/Navbar/Navbar";
import {
  CarDetails,
  CarSrvices,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesText,
  CarDetailsHeader,
  CarDetailsText,
  ServicePhoto,
} from "./ServicesStyle";
import FirstPic from "./imgs/service_1.png";
import SecondPic from "./imgs/service_2.png";
import ThirdPic from "./imgs/service_3.png";

function Services() {
  return (
    <ServicesContainer id="services">
      {/* <Navbar /> */}
      <ServicesText>
        <ServicesH2>SERVICES</ServicesH2>
        <ServicesH3 className="about-h3">Services</ServicesH3>
      </ServicesText>
      <CarSrvices>
        <CarDetails>
          <ServicePhoto src={FirstPic} alt="service photo" />
          <CarDetailsHeader>Car sales</CarDetailsHeader>
          <CarDetailsText>
            At YourCar, we offer a wide selection of luxury vehicles for sale.
            Whether you're in the market for a sleek sports car or a spacious
            SUV, we have the perfect vehicle to fit your needs.
          </CarDetailsText>
        </CarDetails>
        <CarDetails>
          <ServicePhoto src={SecondPic} alt="service photo" />
          <CarDetailsHeader>Car rental</CarDetailsHeader>
          <CarDetailsText>
            If you're in need of a luxury car rental, look no further than
            YourCar. Our fleet of high-end vehicles is regularly maintained and
            serviced to ensure that you have a safe and comfortable driving
            experience.
          </CarDetailsText>
        </CarDetails>
        <CarDetails>
          <ServicePhoto src={ThirdPic} alt="service photo" />
          <CarDetailsHeader>Car selling</CarDetailsHeader>
          <CarDetailsText>
            At YourCar, we make it easy to sell your car. Simply bring your
            vehicle in for an appraisal, and we'll handle the rest. We offer
            fair prices and a hassle-free selling process, so you can get your
            vehicle with minimal effort.
          </CarDetailsText>
        </CarDetails>
      </CarSrvices>
    </ServicesContainer>
  );
}

export default Services;
