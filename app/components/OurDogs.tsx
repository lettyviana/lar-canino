"use client";
import { useRouter } from "next/navigation";
import { DogCarousel } from "./DogCarousel";
import { SectionTitle } from "./SectionTitle";
import { StandardButton } from "./StandardButton";

export const OurDogs = () => {
  const router = useRouter();
  return (
    <section id="our-dogs" className="our-dogs-container">
      <div className="our-dogs-content-container">
        <SectionTitle>
          Nossos amigocães que estão procurando um lar
        </SectionTitle>
        <DogCarousel />
        <StandardButton
          whichType="button"
          styleType="unhovered"
          onClick={() => router.push("/nossos-caes")}
        >
          Conheça todos eles
        </StandardButton>
      </div>
    </section>
  );
};
