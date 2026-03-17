import { InterzicereStatus, type Judet, type UAT } from "../data/types";

export const calcColorJudet = (j: Judet) => {
  const jPuncte = j.UATs.reduce(
    (acc, u) => {
      const p = u.date?.status ? u.date?.status : 0;
      const total = u.date?.populatie ? InterzicereStatus.APROBAT : 0;
      return [acc[0] + p, acc[1] + total, acc[2] + InterzicereStatus.APROBAT];
    },
    [0, 0, 0],
  );

  const v = Math.ceil((jPuncte[0] / (jPuncte[1] || jPuncte[2])) * 100);
  const red = Math.ceil(255 - v * 2.55);
  const green = Math.ceil(v * 2.55);

  return `rgb(${red}, ${green}, 0)`;
};

export const calcColorUat = (uat: UAT) => {
  const status = uat?.date?.status ? uat?.date?.status : 0;
  const v = Math.ceil((status / InterzicereStatus.APROBAT) * 100);
  const red = Math.ceil(255 - v * 2.55);
  const green = Math.ceil(v * 2.55);

  return `rgb(${red}, ${green}, 0)`;
};
