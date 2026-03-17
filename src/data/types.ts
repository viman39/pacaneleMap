export interface Judet {
  id: string;
  dPath: string;
  auto: string;
  nume: string;
  bBox: string;
  UATs: UAT[];
  date?: any;
  autoX: number;
  autoY: number;
}

export interface UAT {
  id: string;
  nume: string;
  judet: string;
  dPath: string;
  resedinta?: boolean;
  date?: any;
}

export const InterzicereStatus = {
  ANUNTAT: 1,
  PROPUS: 2,
  RESPINS: -1,
  APROBAT: 4,
};
