import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AddDel,
  AddItem,
  CarClass,
  CarImage,
  CarName,
  Card,
  CardContainer,
  Container,
  Decrease,
  Increase,
  ItemNums,
  LeftCol,
} from "./LobbyStyle";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CarsContext } from "../../Context/CarsContext";

function Lobby() {
  const cTx = useContext(CarsContext);
  const userCars = cTx.cars;

  function deletCarHandler(idx) {
    cTx.setCars((prev) => {
      prev[idx].num = 0;
      localStorage.setItem("carsdata", JSON.stringify(prev));
      return [...prev];
    });
  }

  function changeItemsHandler(sign, idx) {
    const itemsNum = userCars[idx].num;
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

  const carMapper = userCars
    ?.map((car, i) => {
      if (car.num > 0) {
        return { car, i };
      }
    })
    .filter((data) => data);

  return (
    <CardContainer>
      {carMapper?.map((data) => (
        <Card key={data.car.id}>
          <LeftCol>
            <CarClass>{data.car.class}</CarClass>
            <CarName>{data.car.name}</CarName>
            <Container>
              <AddDel>
                <AddItem>
                  <Increase onClick={() => changeItemsHandler("+", data.i)}>
                    +
                  </Increase>
                  <ItemNums>{data.car.num}</ItemNums>
                  <Decrease onClick={() => changeItemsHandler("-", data.i)}>
                    -
                  </Decrease>
                </AddItem>
                <FontAwesomeIcon
                  className="del-icon"
                  icon={faTrashCan}
                  onClick={() => deletCarHandler(data.i)}
                />
              </AddDel>
            </Container>
          </LeftCol>
          <CarImage src={data.car.image} />
        </Card>
      ))}
    </CardContainer>
  );
}
export default Lobby;
