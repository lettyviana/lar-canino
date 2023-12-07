"use client";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DogCard } from "./DogCard";
import Skeleton from "./Skeleton";
import { DogServices } from "../services/DogServices";

const dogServices = new DogServices();

export const DogCarousel = () => {
  const [dogs, setDogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftArrowDisabled, setLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setRightArrowDisabled] = useState(false);

  const getDogs = async () => {
    try {
      const result = await dogServices.getDogs();
      if (result) {
        setDogs(result);
      }
    } catch (error) {
      console.log("Erro ao listar os cães:", error);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  const firstDogs = dogs?.slice(currentIndex, currentIndex + 4);

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
        {dogs.length > 0 ? (
          firstDogs.map((firstDog: any, index: number) => (
            <DogCard key={index} dog={firstDog} />
          ))
        ) : (
          <Skeleton cards={4} />
        )}
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
