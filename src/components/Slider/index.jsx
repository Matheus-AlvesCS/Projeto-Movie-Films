import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./styles";
import Card from "../Card";

function Slider({ data, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper grabCursor spaceBetween={15} slidesPerView={"auto"}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;