import Style from "./index.module.css";
import { MapPin } from "phosphor-react";
function Footer() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.menu}>
          <strong>
            R. das Carmelitas, 3465 - Boqueirão Curitiba / PR 81730-050
          </strong>
          <a
            type="button"
            target="_blank"
            href="https://www.google.com/maps/place/Peixaria+Interfish+Boqueir%C3%A3o/@-25.5027406,-49.2322037,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcfaee5c670733:0x3bb5233ba1f79c66!8m2!3d-25.5027455!4d-49.2296288!16s%2Fg%2F11bzwm_9vc?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          >
            <MapPin size={32} />
          </a>
        </div>
        <div className={Style.author}>
          development by{" "}
          <a
            type="button"
            target="_blank"
            href="https://ivan-dias-dev.github.io/Portifolio_DIO/"
          >
            Ivan dias
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
