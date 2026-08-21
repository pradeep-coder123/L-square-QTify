import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Card from "../Card/Card";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import styles from "./Carousel.module.css";

function Carousel({ data, isSongSection = false }) {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.carousel}>
      {!isBeginning && (
        <LeftArrow
          onClick={() =>
            swiperRef.current ? swiperRef.current.slidePrev() : null
          }
        />
      )}

      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          //   setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              image={item.image}
              follows={isSongSection ? item.likes : item.follows}
              title={item.title}
              isSong={isSongSection}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isEnd && (
        <RightArrow
          onClick={() =>
            swiperRef.current ? swiperRef.current.slideNext() : null
          }
        />
      )}
    </div>
  );
}

export default Carousel;
