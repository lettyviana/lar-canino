import { Icon } from "../Icon";
import { SectionTitle } from "../SectionTitle";
import petFood from "@/app/assets/images/icons/pet-food.svg";
import transport from "@/app/assets/images/icons/transport.svg";
import toys from "@/app/assets/images/icons/toys.svg";
import bowls from "@/app/assets/images/icons/bowl.svg";
import hygiene from "@/app/assets/images/icons/hygiene.svg";
import vitamins from "@/app/assets/images/icons/vitamins.svg";
import medicines from "@/app/assets/images/icons/medicine.svg";
import collars from "@/app/assets/images/icons/collar.svg";
import beds from "@/app/assets/images/icons/bed.svg";
import donation from "@/app/assets/images/icons/donation.svg";

export const Help = () => {
  return (
    <section id="como-ajudar" className="help-container">
      <div className="content-container">
        <SectionTitle>Como você pode nos ajudar</SectionTitle>
        <div className="icons-container">
          <Icon src={petFood} alt="Ração" text="Ração" />
          <Icon src={transport} alt="Transporte" text="Transporte" />
          <Icon src={toys} alt="Brinquedos" text="Brinquedos" />
          <Icon src={bowls} alt="Tigelas" text="Tigelas" />
          <Icon src={hygiene} alt="Higiene" text="Higiene" />
          <Icon src={vitamins} alt="Vitaminas" text="Vitaminas" />
          <Icon src={medicines} alt="Medicamentos" text="Medicamentos" />
          <Icon src={collars} alt="Coleiras" text="Coleiras" />
          <Icon src={beds} alt="Camas/casas" text="Camas/casas" />
          <Icon src={donation} alt="Doações" text="Doações" />
        </div>
      </div>
    </section>
  );
};
