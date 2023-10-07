import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import {
  BoldLogo,
  DivEl,
  Lobby,
  Logo,
  NavbarContainer,
  NavbarList,
  NavbarListElement,
  Num,
  SpanEl,
} from "./NavbarStyle";
import { useContext, useEffect, useState } from "react";
import Overlay from "./Overlay/Overlay";
import { CarsContext } from "../../Context/CarsContext";
// import { useNavigate } from "react-router-dom";

function Navbar({ intersect }) {
  const [carsNumber, setCarsNumber] = useState(0);

  const cTx = useContext(CarsContext);
  useEffect(() => {
    let sum = 0;
    cTx.cars?.map((car) => {
      sum += car.num;
    });
    setCarsNumber(sum);
  }, [cTx.cars]);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayClick = () => {
    setShowOverlay(!showOverlay);
  };
  const [isActive, setIsActive] = useState(false);

  function ListShowHandeler() {
    setIsActive(!isActive);
  }
  //   const navigate = useNavigate();

  //   const homeHandeler = () => {
  //     navigate("/");
  //   };

  //   const aboutHandeler = () => {
  //     navigate("/about");
  //   };

  //   const carsHandeler = () => {
  //     navigate("/cars");
  //   };

  //   const contactHandeler = () => {
  //     navigate("/contact");
  //   };

  //   const servicesHandeler = () => {
  //     navigate("/services");
  //   };

  return (
    <NavbarContainer intersect={intersect}>
      <Logo>
        <BoldLogo>Your</BoldLogo>Car
      </Logo>
      <NavbarList>
        <NavbarList>
          <DivEl className={isActive ? "DivStyle" : ""}>
            <NavbarListElement className="phone-nav active">
              <Link
                className="width"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </NavbarListElement>
            <NavbarListElement className="phone-nav active">
              <Link
                className="width"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </NavbarListElement>
            <NavbarListElement className="phone-nav active">
              <Link
                className="width"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </NavbarListElement>
            <NavbarListElement className="phone-nav active">
              <Link
                className="width"
                to="cars"
                spy={true}
                smooth={true}
                duration={500}
              >
                Cars
              </Link>
            </NavbarListElement>
            <NavbarListElement className="phone-nav active">
              <Link
                className="width"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact us
              </Link>
            </NavbarListElement>
          </DivEl>

          <SpanEl>
            <NavbarListElement>
              <Lobby onClick={handleOverlayClick}>
                <FontAwesomeIcon
                  className={showOverlay ? "active-btn" : ""}
                  icon={faCartShopping}
                />
                <Num className={showOverlay ? "active-num" : ""}>
                  {carsNumber}
                </Num>
              </Lobby>
            </NavbarListElement>
            <NavbarListElement onClick={ListShowHandeler} className="list">
              <FontAwesomeIcon icon={faListUl} />
            </NavbarListElement>
          </SpanEl>
        </NavbarList>
      </NavbarList>
      {showOverlay && <Overlay onClick={handleOverlayClick} />}
    </NavbarContainer>
  );
}

export default Navbar;
