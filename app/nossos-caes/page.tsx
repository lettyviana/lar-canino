import { Header } from "../components/Header";
import { SectionTitle } from "../components/SectionTitle";
import { DogCard } from "../components/DogCard";
import dogData from "@/data/db.json";

export default function OurDogs() {
  const mainTitleColor = "#3c586b";
  const mainTextColor = "#565656";
  return (
    <>
      <Header mainTitleColor={mainTitleColor} mainTextColor={mainTextColor} />
      <section className="our-dogs-container">
        <SectionTitle>
          Nossos amigocães que estão procurando um lar
        </SectionTitle>
        <div className="our-dogs-card-wrapper">
          {dogData.dogs.map((dog: any, index: number) => (
            <DogCard key={index} dog={dog} />
          ))}
        </div>
      </section>
    </>
  );
}
