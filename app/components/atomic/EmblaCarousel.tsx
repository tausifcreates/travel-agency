"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import DestinationCard from "../DestinationCard";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="headers flex flex-row justify-between mb-12">
        <div className="explore-texts text-start">
          <h1 className="text-[1.75rem] lg:text-5xl font-bold">
            Explore Our Destinations
          </h1>
          <div className="h-2 lg:h-6" />
          <p className="text-lg lg:text-xl text-start lg:w-[48rem]">
            From the serene beaches of Bali to the vibrant streets of Paris,
            discover a world of possibilities with our carefully curated
            destinations.
          </p>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <DestinationCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
