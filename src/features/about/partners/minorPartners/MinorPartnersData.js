import kodluyoruzLogo from "./kodluyoruz.webp";
import notSlackersLogo from "./notSlackersLogo.png";
import React from "react";

const kod = {
  name: "Kodluyoruz",
  image: kodluyoruzLogo,
  imageClassName: "kod-logo",
  content: [
    <p>
      Kodluyoruz.org is a software movement that promotes code literacy and adds
      value to the future of young people in the software field in order to
      improve every segment of society by using technology."
    </p>
  ],
  link: "https://www.kodluyoruz.org/"
};

const notSlackers = {
  name: "!Slackers",
  image: notSlackersLogo,
  imageClassName: "not-slackers-logo",
  content: [
    <p>
      The !Slackers (aka 'The Not Slackers') learned to code together in the
      same cohort at{" "}
      <a href="https://flatironschool.com/career-courses/coding-bootcamp/online/north-america">
        The Flatiron School.
      </a>{" "}
      After graduating in summer 2019, seven members of the cohort built our
      website from the ground up. If you need full-stack developers, hire them!
      <a href="https://github.com/joanrig/codigo-ecuador-web/graphs/contributors">
        {" "}
        You can see their Github profiles here.
      </a>
    </p>
  ],
  link: "https://www.google.com/"
};

const becomeAPartner = {
  name: "Become a Partner",
  image:
    "https://static.wixstatic.com/media/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_246,h_164,al_c,q_80,usm_0.66_1.00_0.01,blur_2/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg",
  imageClassName: "become-partner-logo",
  content: [
    <p>
      If you are looking for talent or want to have a partner available to share
      best practices and resources, please feel free to reach out to us with
      your information. We are always looking to form new connections with
      businesses and organizations that share our values.
    </p>
  ],
  link: "mailto:info@codigoecuador.com"
};

const placeholder = {
  name: "Placeholder",
  image:
    "https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  imageClassName: "placeholder4-logo",
  content: [
    <p>
      Here is some information about a potential partner. Here is some
      information about a potential partner. Here is some information about a
      potential partner. Here is some information about a potential partner.
    </p>
  ],
  link: "https://www.google.com/"
};

export const minorPartnersData = [
  kod,
  notSlackers,
  becomeAPartner,
  placeholder
];

//to add new partners, populate partner 3 and 4 above, then add them to list on line 42
