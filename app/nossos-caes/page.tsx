"use client";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { SectionTitle } from "../components/SectionTitle";
import { DogCard } from "../components/DogCard";
import { DogServices } from "../services/DogServices";
import Skeleton from "../components/Skeleton";

const dogServices = new DogServices();

export default function OurDogs() {
  const mainTitleColor = "#3c586b";
  const mainTextColor = "#565656";
  const [dogs, setDogs] = useState([]);

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

  return (
    <>
      <Header mainTitleColor={mainTitleColor} mainTextColor={mainTextColor} />
      <section className="our-dogs-container">
        <SectionTitle>
          Nossos amigocães que estão procurando um lar
        </SectionTitle>
        <div className="our-dogs-card-wrapper">
          {dogs.length > 0 ? (
            dogs?.map((dog: any, index: number) => (
              <DogCard key={index} dog={dog} />
            ))
          ) : (
            <Skeleton cards={12} />
          )}
        </div>
      </section>
    </>
  );
}
