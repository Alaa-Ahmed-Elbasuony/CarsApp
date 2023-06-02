import carImage from "./Car.png";
import {
  CarImg,
  City,
  Container,
  Dot,
  Dots,
  Name,
  Stars,
  TestimonialCard,
  TestimonialContainer,
  TestimonialHeading,
  TestimonialPara,
  TestimonialText,
  TestimonialTextContainer,
} from "./TestimonialsStyle";

import { useEffect, useState } from "react";

function Testimonials() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slideFactor, setSlideFactor] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  function sliderHandeler(idx) {
    setSlideFactor(idx);
  }
  const fetchData = async () => {
    try {
      const response = await fetch("testimonials.json");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } else {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TestimonialContainer>
          <TestimonialTextContainer>
            <TestimonialText>TESTIMONIALS</TestimonialText>
            <TestimonialHeading>Testimonials</TestimonialHeading>
            <TestimonialCard>
              <div>
                <TestimonialPara>
                  {data[slideFactor].description}
                </TestimonialPara>
                <Stars>⭐⭐⭐⭐⭐</Stars>
                <Container>
                  <Name>{data[slideFactor].name}</Name>
                  <City>Las Vegas</City>
                  <CarImg src={carImage} />
                </Container>
              </div>
            </TestimonialCard>
            <Dots>
              {data.map((comment, i) =>
                i <= 3 ? (
                  <Dot
                    key={i + 50}
                    onClick={() => sliderHandeler(i)}
                    className={slideFactor === i ? "active" : "not-active"}
                  ></Dot>
                ) : (
                  ""
                )
              )}
            </Dots>
          </TestimonialTextContainer>
        </TestimonialContainer>
      )}
    </div>
  );
}

export default Testimonials;
