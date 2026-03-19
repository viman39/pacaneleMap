import { LIMITA_POPULATIE } from "../data/constants";
import { InterzicereStatus, type Judet, type UAT } from "../data/types";

export const calcColorJudet = (j: Judet) => {
  const jPuncte = j.UATs.reduce(
    (acc, u) => {
      const statusScore = u.date?.status ? u.date?.status : 0;
      const total =
        u.date?.populatie > LIMITA_POPULATIE ? InterzicereStatus.APROBAT : 0;

      return [acc[0] + statusScore, acc[1] + total];
    },
    [0, 0],
  );

  const procentPunctaj = Math.ceil((jPuncte[0] / jPuncte[1]) * 100);
  const red = Math.ceil(255 - procentPunctaj * 2.55);
  const green = Math.ceil(procentPunctaj * 2.55);

  return `rgb(${red}, ${green}, 0)`;
};

export const calcColorUat = (uat: UAT) => {
  const status = uat?.date?.status ? uat?.date?.status : 0;
  const procentPunctaj = Math.ceil((status / InterzicereStatus.APROBAT) * 100);
  const red = Math.ceil(255 - procentPunctaj * 2.55);
  const green = Math.ceil(procentPunctaj * 2.55);

  return `rgb(${red}, ${green}, 0)`;
};
