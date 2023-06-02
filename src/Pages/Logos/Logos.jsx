import { CarLogo, LogosContainer, images } from "./LogosStyle";

function Logos() {
  return (
    <LogosContainer id="contact">
      {images.map((image) => (
        <CarLogo key={image.id} src={image.src} alt={image.alt} />
      ))}
    </LogosContainer>
  );
}

export default Logos;
