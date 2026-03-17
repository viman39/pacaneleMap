export interface Judet {
  id: string;
  dPath: string;
  auto: string;
  nume: string;
  bBox?: string;
  UATs: UAT[];
}

export interface UAT {
  id: string;
  nume: string;
  judet: string;
  dPath: string;
}
