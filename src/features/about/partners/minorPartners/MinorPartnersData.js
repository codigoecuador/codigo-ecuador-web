import React from "react";
import kodluyoruzLogo from "./kodluyoruz.webp";
import notSlackersLogo from "./notSlackersLogo.png";
import { partnersText } from "../../../../common/aboutText/partnersText";

const kod = {
  name: "Kodluyoruz",
  image: kodluyoruzLogo,
  imageClassName: "kod-logo",
  content: <>{partnersText[localStorage.getItem("language")].kodText}</>,
  link: "https://www.kodluyoruz.org/"
};

const notSlackers = {
  name: "!Slackers",
  image: notSlackersLogo,
  imageClassName: "not-slackers-logo",
  content: (
    <>{partnersText[localStorage.getItem("language")].notSlackersText}</>
  ),
  link: "https://www.google.com/"
};

const becomeAPartner = {
  name: (
    <>{partnersText[localStorage.getItem("language")].becomeAPartnerName}</>
  ),
  image:
    "https://static.wixstatic.com/media/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_246,h_164,al_c,q_80,usm_0.66_1.00_0.01,blur_2/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg",
  imageClassName: "become-partner-logo",
  content: (
    <>{partnersText[localStorage.getItem("language")].becomeAPartnerText}</>
  ),
  link: "mailto:info@codigoecuador.com"
};

const placeholder = {
  name: "Placeholder",
  image:
    "https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  imageClassName: "placeholder4-logo",
  content: (
    <>{partnersText[localStorage.getItem("language")].placeholderText}</>
  ),
  link: "https://www.google.com/"
};

export const minorPartnersData = [
  kod,
  notSlackers,
  becomeAPartner,
  placeholder
];

//to add new partners, populate partner 3 and 4 above, then add them to list on line 42
