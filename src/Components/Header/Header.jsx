import {
  DiscoverBtn,
  HeaderComponent,
  HeaderContainer,
  HeaderH1,
  HeaderH2,
} from "./HeaderStyle";

function Header() {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <HeaderH1>Find the perfect car for you at YourCar.</HeaderH1>
        <HeaderH2>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </HeaderH2>
        <DiscoverBtn>Discover 🏹</DiscoverBtn>
      </HeaderContainer>
    </HeaderComponent>
  );
}

export default Header;
