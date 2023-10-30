import { Header } from "../Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2 className="home-title">Seu próximo amigocão está aqui</h2>
        <p className="home-text">
          Nossa missão é unir corações humanos e patas peludas em uma jornada de
          alegria, lealdade e companheirismo. Explore nosso mundo canino e
          descubra como você pode fazer parte de histórias de amor
          incondicional.
        </p>
      </div>
    </>
  );
};
