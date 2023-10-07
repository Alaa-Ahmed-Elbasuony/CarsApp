// import Navbar from "../../Components/Navbar/Navbar";
import {
  faChevronLeft,
  faChevronRight,
  faSuitcase,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Models from "./../../Components/Models/Models";
import {
  AddCar,
  AddItem,
  CarClass,
  CarDescription,
  CarImage,
  CarName,
  Card,
  CardContainer,
  Cards,
  CarsContainer,
  CarsH2,
  CarsH3,
  CarsText,
  Container,
  Decrease,
  Dot,
  Dots,
  Increase,
  ItemNums,
  Luggage,
  LuggageIcon,
  Seat,
  SeatIcon,
  SeatNLuggage,
  Slide,
} from "./CarsStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { CarsContext } from "../../Context/CarsContext";
import Testimonials from "../Testimonials/Testimonials";

function Cars() {
  const [slideFactor, setSlideFactor] = useState(0);
  const cTx = useContext(CarsContext);
  function changeHandler(sign) {
    if (sign === "i") {
      slideFactor === cTx.cars.length - 3
        ? setSlideFactor(slideFactor)
        : setSlideFactor(slideFactor + 1);
    } else {
      slideFactor === 0 ? setSlideFactor(0) : setSlideFactor(slideFactor - 1);
    }
  }
  function changeItemsHandler(sign, idx) {
    const itemsNum = cTx.cars[idx].num;
    cTx.setCars((prev) => {
      if (itemsNum > 0) {
        sign === "+" ? (prev[idx].num += 1) : (prev[idx].num -= 1);
      } else {
        sign === "+" ? (prev[idx].num += 1) : (prev[idx].num = 0);
      }
      localStorage.setItem("carsdata", JSON.stringify(prev));
      return [...prev];
    });
  }
  function sliderHandeler(idx) {
    setSlideFactor(idx);
  }
  return (
    <div id="cars">
      {
        /* <Navbar /> */ <div>
          <CarsContainer>
            <CarsText>
              <CarsH2>CARS</CarsH2>
              <CarsH3>Cars</CarsH3>
            </CarsText>
            <AddCar>
              <Cards slidefactor={slideFactor}>
                {cTx.cars.map((data, i) => (
                  <CardContainer className="Selctor" key={data.id}>
                    <Card>
                      <CarImage src={data.image} />
                      <CarClass>{data.class}</CarClass>
                      <CarName>{data.name}</CarName>
                      <CarDescription>{data.description}</CarDescription>
                      <Container>
                        <SeatNLuggage>
                          <Seat>
                            <SeatIcon>
                              <FontAwesomeIcon icon={faUserGroup} />
                            </SeatIcon>
                            <p>{data.seats} Seats</p>
                          </Seat>
                          <Luggage>
                            <LuggageIcon>
                              <FontAwesomeIcon icon={faSuitcase} />
                            </LuggageIcon>
                            <p>{data.luggage} Luggage</p>
                          </Luggage>
                        </SeatNLuggage>
                        <AddItem>
                          <Increase onClick={() => changeItemsHandler("+", i)}>
                            +
                          </Increase>
                          <ItemNums>{data.num}</ItemNums>
                          <Decrease onClick={() => changeItemsHandler("-", i)}>
                            -
                          </Decrease>
                        </AddItem>
                      </Container>
                    </Card>
                  </CardContainer>
                ))}
                ;
              </Cards>
              <Slide className="Right" onClick={() => changeHandler("i")}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Slide>
              <Slide className="Left">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => changeHandler("d")}
                />
              </Slide>
              <Dots>
                {cTx.cars.map((car, i) =>
                  i <= 3 ? (
                    <Dot
                      key={i + 25}
                      onClick={() => sliderHandeler(i)}
                      className={slideFactor === i ? "active" : "not-active"}
                    ></Dot>
                  ) : (
                    ""
                  )
                )}
              </Dots>
            </AddCar>
          </CarsContainer>
          <Models />
          <Testimonials />
        </div>
      }
    </div>
  );
}

export default Cars;
