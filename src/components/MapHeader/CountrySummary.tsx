import type { County } from "../../app/types";

export function CountrySummary({ counties }: { counties: County[] }) {
  const totals = counties.reduce((acc, county) => ({
    uats: acc.uats + county.uatsCount,
    approved: acc.approved + county.uatsStatus4Count,
  }), { uats: 0, approved: 0 });

  return <>
    <span>{counties.length} județe · {totals.uats.toLocaleString("ro-RO")} UAT-uri</span>
    <span>{totals.approved.toLocaleString("ro-RO")} UAT-uri cu status „Aprobat în CL”</span>
  </>;
}
