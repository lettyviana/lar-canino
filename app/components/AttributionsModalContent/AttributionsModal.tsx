import { AttributionLink } from "./AttributionLink";
import { Subtitle } from "./Subtitle";

export const AttributionsModal = () => {
  return (
    <div className="attributions-wrapper">
      <h2 className="attributions-title">Atribuições</h2>
      <article className="content-wrapper">
        <Subtitle>Design</Subtitle>
        <p className="text">
          Design do{" "}
          <AttributionLink link="https://dribbble.com/shots/4094909-Shelter">
            Dribbble
          </AttributionLink>
          .
        </p>
      </article>
      <article className="content-wrapper">
        <Subtitle>Ícones</Subtitle>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/pet-food"
          title="pet food icons"
        >
          Pet food icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/delivery"
          title="delivery icons"
        >
          Delivery icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/dog"
          title="dog icons"
        >
          Dog icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/pet-bowl"
          title="pet bowl icons"
        >
          Pet bowl icons created by berkahicon - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/pet-shampoo"
          title="pet shampoo icons"
        >
          Pet shampoo icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/vitamin"
          title="vitamin icons"
        >
          Vitamin icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/vaccine"
          title="vaccine icons"
        >
          Vaccine icons created by photo3idea_studio - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/collar"
          title="collar icons"
        >
          Collar icons created by iconfield - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/pet-bed"
          title="pet-bed icons"
        >
          Pet-bed icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/online-donation"
          title="online donation icons"
        >
          Online donation icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/love-letter"
          title="love letter icons"
        >
          Love letter icons created by muhammad atho&apos; - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/phone"
          title="phone icons"
        >
          Phone icons created by Creaticca Creative Agency - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/location"
          title="location icons"
        >
          Location icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/address"
          title="address icons"
        >
          Address icons created by Freepik - Flaticon
        </AttributionLink>
        <AttributionLink
          link="https://www.flaticon.com/free-icons/paw-print"
          title="paw print icons"
        >
          Paw print icons created by Freepik - Flaticon
        </AttributionLink>
      </article>
      <article className="content-wrapper">
        <Subtitle>Fotos dos cães</Subtitle>
        <p className="text">
          <AttributionLink link="https://unsplash.com/pt-br">
            Unsplash
          </AttributionLink>{" "}
          &{" "}
          <AttributionLink link="https://www.pexels.com/pt-br/">
            Pexels
          </AttributionLink>
        </p>
      </article>
    </div>
  );
};
