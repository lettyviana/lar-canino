"use client";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import { StandardButton } from "./StandardButton";

export const Home = () => {
  const mainTitleColor = "#ebc7ae";
  const mainTextColor = "#fdfdfd";
  const router = useRouter();

  return (
    <>
      <section className="home-container">
        <Header mainTitleColor={mainTitleColor} mainTextColor={mainTextColor} />
        <div className="background-image" />
        <div className="home-content-container">
          <h2 className="home-title">Seu próximo amigocão está aqui</h2>
          <p className="home-text">
            Nossa missão é unir corações humanos e patas peludas em uma jornada
            de alegria, lealdade e companheirismo. Explore nosso mundo canino e
            descubra como você pode fazer parte de histórias de amor
            incondicional.
          </p>
          <StandardButton
            whichType="button"
            onClick={() => router.push("/agende-uma-visita")}
          >
            Agende uma visita
          </StandardButton>
        </div>
      </section>
    </>
  );
};
