import {
  CarModel,
  ModelsContainer,
  images,
  Overlay,
  OverlayText,
  ContactBtn,
  CarParent,
} from "./ModelsStyle";

function Models() {
  return (
    <CarParent>
      {images.map((image) => (
        <ModelsContainer key={image.id}>
          <CarModel src={image.src} alt={image.alt} />
          <Overlay>
            <OverlayText>
              <h3>Tesla Model 3</h3>
              <p>Disruptive, avant-garde, futuristic, innovative.</p>
              <ContactBtn>Contact</ContactBtn>
            </OverlayText>
          </Overlay>
        </ModelsContainer>
      ))}
    </CarParent>
  );
}

export default Models;
