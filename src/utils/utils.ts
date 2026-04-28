import {
  LIMITA_POPULATIE,
  MAP_WHITE,
  MAP_YELLOW3,
  MAP_BLUE1,
  MAP_BLUE2,
  MAP_BLUE3,
} from "../data/constants";
import { InterzicereStatus, type Judet, type UAT } from "../data/types";

const getMapColor = (p: number) => {
  if (p === 0) return MAP_WHITE;
  if (p < 30) return MAP_BLUE1;
  if (p < 60) return MAP_BLUE2;
  if (p < 100) return MAP_BLUE3;
  return MAP_YELLOW3;
};

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

  return getMapColor(procentPunctaj);
};

export const calcColorUat = (uat: UAT) => {
  const status = uat?.date?.status ? uat?.date?.status : 0;
  const procentPunctaj = Math.ceil((status / InterzicereStatus.APROBAT) * 100);

  return getMapColor(procentPunctaj);
};

export const getStatusPetitie = (status: number | undefined) => {
  switch (status) {
    case InterzicereStatus.ANUNTAT:
      return "În dezbatere publica";
    case InterzicereStatus.PROPUS:
      return "Pe ordinea de zi a CL";
    case InterzicereStatus.RESPINS:
      return "Respins în CL";
    case InterzicereStatus.APROBAT:
      return "Aprobat în CL";
    default:
      return undefined;
  }
};
