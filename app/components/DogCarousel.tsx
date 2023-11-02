"use client";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DogCard } from "./DogCard";
import dogData from "@/data/db.json";

export const DogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftArrowDisabled, setLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setRightArrowDisabled] = useState(false);
  const firstDogs = dogData.dogs.slice(currentIndex, currentIndex + 4);

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setRightArrowDisabled(false);
    }
    if (currentIndex === 1) {
      setLeftArrowDisabled(true);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex < firstDogs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setLeftArrowDisabled(false);
    }
    if (currentIndex === firstDogs.length - 2) {
      setRightArrowDisabled(true);
    }
  };

  return (
    <div className="carousel-wrapper">
      <button
        className={`${"arrow"} ${"left"} ${
          isLeftArrowDisabled ? "disabled" : ""
        }`}
        onClick={handleLeftArrowClick}
      >
        <AiOutlineArrowLeft />
      </button>
      <div className="dog-card-carousel">
        {firstDogs.map((firstDog: any, index: number) => (
          <DogCard key={index} dog={firstDog} />
        ))}
      </div>
      <button
        className={`${"arrow"} ${"right"} ${
          isRightArrowDisabled ? "disabled" : ""
        }`}
        onClick={handleRightArrowClick}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
