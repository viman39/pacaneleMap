import type { ReactNode } from "react";

type Props = { title?: ReactNode; children?: ReactNode; actions?: ReactNode };

export function PageHeader({ title, children, actions }: Props) {
  return (
    <header className={`sticky top-0 z-40 bg-surface/80 backdrop-blur-md px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center gap-6 ${title || children ? "min-h-[20vh] justify-between" : "min-h-[10vh] justify-end"}`}>
      {(title || children) && <div className="min-w-0">
        {title && <h1 className="font-headline text-2xl font-extrabold tracking-tight text-primary">{title}</h1>}
        {children && <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">{children}</div>}
      </div>}
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-3">{actions}</div>}
    </header>
  );
}
