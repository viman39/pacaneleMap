import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { to: string; label: string; icon?: ReactNode; onClick?: () => void };

export function HeaderLink({ to, label, icon, onClick }: Props) {
  return <Link to={to} onClick={onClick} className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-6 py-2.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm">
    {icon && <span aria-hidden="true" className="text-yellow-500">{icon}</span>}
    <span className="font-label font-bold text-sm text-primary">{label}</span>
  </Link>;
}
