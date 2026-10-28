export type CountyDTO = {
  id: number;
  slug: string;
  code: string;
  name: string;
  svgPath: string;
  viewBox: string;
  codeX: number;
  codeY: number;
  uatsCount: number;
  slotsStatusSum: number;
  uatsOver15000Count: number;
  uatsStatus4Count: number;
};

export type County = CountyDTO & {
  countyScore: number;
};

export type UatDTO = {
  id: number;
  name: string;
  siruta: number;
  svgPath: string;
  isResidence?: boolean;
  slotsStatus?: number;
  population?: number;
  hallMail?: string;
  petitionLink?: string;
};
