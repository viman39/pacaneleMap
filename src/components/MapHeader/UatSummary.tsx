import type { UatDTO } from "../../app/types";
import { LIMITA_POPULATIE, LINK_LEGE_107_2024 } from "../../data/constants";
import { getStatusPetitie } from "../../utils/utils";

export function UatSummary({ uat }: { uat: UatDTO }) {
  const status = getStatusPetitie(uat.slotsStatus ?? undefined);
  const petitionUrl = uat.petitionLink && /^https?:\/\//i.test(uat.petitionLink) ? uat.petitionLink : undefined;
  return <>
    <span>Populație: {uat.population == null ? "necunoscută" : uat.population.toLocaleString("ro-RO")}</span>
    <span>Status: {status ?? "necunoscut"}</span>
    {uat.population != null && uat.population < LIMITA_POPULATIE && (
      <span>Populație sub pragul de {LIMITA_POPULATIE.toLocaleString("ro-RO")} locuitori. <a className="underline" href={LINK_LEGE_107_2024} target="_blank" rel="noopener noreferrer">Vezi cadrul legal</a></span>
    )}
    {petitionUrl && <a className="underline" href={petitionUrl} target="_blank" rel="noopener noreferrer">Semnează petiția</a>}
    {uat.hallMail && <a className="underline" href={`mailto:${uat.hallMail}`}>Scrie primăriei {uat.name}</a>}
  </>;
}
