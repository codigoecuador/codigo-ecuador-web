import React from "react";
// import kodluyoruzLogo from "./kodluyoruz.webp";
// import notSlackersLogo from "./notSlackersLogo.png";

export const partnersText = {
  EN: {
    title: "Our Partners",
    subtitle: (
      <p>
        We are grateful to our partners who share expertise and resources to
        help us succeed.
      </p>
    ),
    partners: [
      {
        name: "Juventud del Mañana",
        image:
          "https://media.istockphoto.com/photos/girlfriends-in-the-city-picture-id700702502",
        content: (
          <>
            <p>
              Juventud del Mañana is an association of dedicated, community -
              minded people who saw and responded to the needs of our youth.
            </p>
            <p>
              It is a teen drop-in centre that provides a safe,
              drug-and-alcohol-free, place designed exclusively to meet their
              needs. It is a place to enjoy their activities, whether it be
              playing basketball, practicing with their band, playing games,
              listening to music, and holding dances.
            </p>
            <p>
              Beginning in October, Juventud del Mañana will provide educational
              programs and on the job experiences designed to help teens reach
              their full potential.
            </p>
          </>
        )
      }
    ],
    //minor partners
    minorPartners: [
      {
        name: "Kodluyoruz",
        image: "/assets/partnerLogos/kodluyoruz.webp",
        imageClassName: "kod-logo",
        text: (
          <p>
            Kodluyoruz.org is a software movement that promotes code literacy
            and adds value to the future of young people in the software field
            in order to improve every segment of society by using technology."
          </p>
        ),
        link: "https://www.kodluyoruz.org/"
      },
      {
        name: "!Slackers",
        image: "/assets/partnerLogos/notSlackersLogo.png",
        imageClassName: "not-slackers-logo",
        text: (
          <p>
            The !Slackers (aka 'The Not Slackers') learned to code together in
            the same cohort at{" "}
            <a href="https://flatironschool.com/career-courses/coding-bootcamp/online/north-america">
              The Flatiron School.
            </a>{" "}
            After graduating in summer 2019, seven members of the cohort built
            our website from the ground up. If you need full-stack developers,
            hire them!
            <a href="https://github.com/joanrig/codigo-ecuador-web/graphs/contributors">
              {" "}
              You can see their Github profiles here.
            </a>
          </p>
        ),
        link: "https://www.google.com/"
      },
      {
        name: "Become a Partner",
        image:
          "https://static.wixstatic.com/media/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_246,h_164,al_c,q_80,usm_0.66_1.00_0.01,blur_2/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg",
        imageClassName: "become-partner-logo",
        content: (
          <p>
            If you are looking for talent or want to have a partner available to
            share best practices and resources, please feel free to reach out to
            us with your information. We are always looking to form new
            connections with businesses and organizations that share our values.
          </p>
        ),
        link: "mailto:info@codigoecuador.com"
      },
      {
        name: "Placeholder",
        image:
          "https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        imageClassName: "placeholder4-logo",
        content: (
          <p>
            Here is some information about a potential partner. Here is some
            information about a potential partner. Here is some information
            about a potential partner. Here is some information about a
            potential partner.
          </p>
        ),
        link: "https://www.google.com/"
      }
    ]
  },

  ES: {
    title: "Nuestros socios",
    subtitle: (
      <p>
        Agradecemos a nuestros socios que comparten experiencia para ayudarnos a
        tener éxito.
      </p>
    ),
    partners: [
      {
        name: "Juventud del Mañana",
        image:
          "https://media.istockphoto.com/photos/girlfriends-in-the-city-picture-id700702502",
        content: (
          <>
            <p>
              La Juventud del Mañana es una asociación de personas dedicadas y
              comunitarias que vieron y respondieron a las necesidades de
              nuestros jóvenes.
            </p>
            <p>
              Es un centro de entrega para adolescentes que proporciona un lugar
              seguro, libre de drogas y sin alcohol, diseñado exclusivamente
              para satisfacer sus necesidades. Es un lugar para disfrutar de sus
              actividades, ya sea jugando al baloncesto, practicando con su
              banda, jugando, escuchando música y bailando.
            </p>
            <p>
              A partir de Octubre, Juventud del Mañana ofrecerá programas
              educativos.
            </p>
          </>
        )
      }
    ],

    //minor partners
    minorPartners: [
      {
        name: "Kodluyoruz",
        image: "/assets/partnerLogos/kodluyoruz.webp",
        imageClassName: "kod-logo",
        text: (
          <p>
            Kodluyoruz.org es un movimiento de software que promueve la
            alfabetización de códigos y añade valor al futuro de los jóvenes en
            el campo del software con el fin de mejorar cada segmento de la
            sociedad mediante el uso de la tecnología.
          </p>
        ),
        link: "https://www.kodluyoruz.org/"
      },
      {
        name: "!Slackers",
        image: "/assets/partnerLogos/notSlackersLogo.png",
        imageClassName: "not-slackers-logo",
        text: (
          <p>
            Los !Slackers (tambien conocidos como 'The Not Slackers) aprendieron
            a programar juntos en el mismo grupo en
            <a href="https://flatironschool.com/career-courses/coding-bootcamp/online/north-america">
              The Flatiron School.
            </a>{" "}
            Despuès de graduarse en el verano de 2019, siete miembros del grupo
            crearon nuestra pàgina web desde cero. Si necesitas desarrolladores
            full-stack, ¡Contràtalos!
            <a href="https://github.com/joanrig/codigo-ecuador-web/graphs/contributors">
              {" "}
              Puedes encontrar sus perfiles de Github aquì..
            </a>
          </p>
        ),
        link: "https://www.google.com/"
      },
      {
        name: "Hazte Socio",
        image:
          "https://static.wixstatic.com/media/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_246,h_164,al_c,q_80,usm_0.66_1.00_0.01,blur_2/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg",
        imageClassName: "become-partner-logo",
        content: (
          <p>
            Si está buscando talento o desea tener un socio disponible para
            compartir las mejoras prácticas y recursos, no dude en comunicarse
            con nosotros con su información. ​ Siempre, buscamos establecer
            nuevas conexiones con empresas y organizaciones que compartan
            nuestros valores.
          </p>
        ),
        link: "mailto:info@codigoecuador.com"
      },
      {
        name: "Marcador de Posición",
        image:
          "https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        imageClassName: "placeholder4-logo",
        content: (
          <p>
            Aquí hay información sobre un posible socio. Aquí hay información
            sobre un posible socio. Aquí hay información sobre un posible socio.
            Aquí hay información sobre un posible socio. Aquí hay información
            sobre un posible socio. Aquí hay información sobre un posible socio.
          </p>
        ),
        link: "https://www.google.com/"
      }
    ]
  }
};
