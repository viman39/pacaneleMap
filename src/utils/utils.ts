import {
  LIMITA_POPULATIE,
  MAP_WHITE,
  MAP_YELLOW1,
  MAP_YELLOW2,
  MAP_YELLOW3,
} from "../data/constants";
import { InterzicereStatus, type Judet, type UAT } from "../data/types";

const getMapColor = (p: number) => {
  if (p === 0) return MAP_WHITE;
  if (p < 50) return MAP_YELLOW1;
  if (p < 100) return MAP_YELLOW2;
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
