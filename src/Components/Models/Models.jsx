import {
  CarModel,
  ModelsContainer,
  images,
  Overlay,
  OverlayText,
  ContactBtn,
  CarParent,
  OverlayH3,
  OverlayP,
} from "./ModelsStyle";

function Models() {
  return (
    <CarParent>
      {images.map((image) => (
        <ModelsContainer key={image.id}>
          <CarModel src={image.src} alt={image.alt} />
          <Overlay>
            <OverlayText>
              <OverlayH3>Tesla Model 3</OverlayH3>
              <OverlayP>
                Disruptive, avant-garde, futuristic, innovative.
              </OverlayP>
              <ContactBtn>Contact</ContactBtn>
            </OverlayText>
          </Overlay>
        </ModelsContainer>
      ))}
    </CarParent>
  );
}

export default Models;
