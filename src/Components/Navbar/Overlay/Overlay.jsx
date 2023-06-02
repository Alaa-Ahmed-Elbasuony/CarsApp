import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayContainer, OverlayContent } from "./OverlayStyle";
import Lobby from "../../Lobby/Lobby";
import { useContext } from "react";
import { CarsContext } from "../../../Context/CarsContext";

const Overlay = () => {
  const cTx = useContext(CarsContext);

  function deleteAllHandler() {
    cTx.setCars((prev) => {
      prev = prev?.map((car) => {
        car.num = 0;
        return car;
      });
      localStorage.setItem("carsdata", JSON.stringify(prev));
      return [...prev];
    });
  }

  return (
    <OverlayContainer>
      <OverlayContent>
        <Lobby />
        <button className="btn" onClick={deleteAllHandler}>
          Delete All <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </OverlayContent>
    </OverlayContainer>
  );
};

export default Overlay;
