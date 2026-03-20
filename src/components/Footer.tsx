import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-6 mt-auto">
      <div className="flex flex-row gap-4">
        <div>instr</div>
        <div>declic</div>
      </div>
      <div className="flex gap-8">
        <Link
          className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-[#002F6C] dark:hover:text-white transition-colors"
          to="/despre-campanie"
        >
          Despre campanie
        </Link>
      </div>
      <div className="flex gap-6">
        {/* <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="Facebook">
            Facebook
          </span>
        </a>
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="Instagram">
            Instagram
          </span>
        </a> */}
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="mail">
            mail
          </span>
        </a>
      </div>
    </footer>
  );
};
