export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-6 mt-auto">
      <div
        className="w-8 h-8 clip-path-polygon-[50%_0%,_0%_100%,_100%_100%] bg-[#775a00]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div className="flex gap-8">
        <a
          className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-[#002F6C] dark:hover:text-white transition-colors"
          href="#"
        >
          About Us
        </a>
        <a
          className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-[#002F6C] dark:hover:text-white transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-[#002F6C] dark:hover:text-white transition-colors"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-[#002F6C] dark:hover:text-white transition-colors"
          href="#"
        >
          Contact Support
        </a>
      </div>
      <div className="flex gap-6">
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="public">
            public
          </span>
        </a>
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="rss_feed">
            rss_feed
          </span>
        </a>
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="mail">
            mail
          </span>
        </a>
      </div>
      <p className="font-['Inter'] text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
        © 2024 Sovereign Interface. Institutional Authority Reserved.
      </p>
    </footer>
  );
};
