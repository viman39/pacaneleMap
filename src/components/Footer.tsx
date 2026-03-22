import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-6 mt-auto">
      <div className="flex flex-row gap-4">
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors"
          href="https://www.facebook.com/instrada.ro/"
          target="_blank"
        >
          <img src="/logo_text.png" alt="InStradaLink" width="100" />
        </a>
        <a
          className="text-slate-400 hover:text-[#775a00] transition-colors flex flex-col justify-center"
          href="https://www.declic.ro/"
          target="_blank"
        >
          <img src="/logo_declic.webp" alt="DeclicLink" width="100" />
        </a>
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
        <a
          className="text-slate-400 transition-colors"
          href="https://www.facebook.com/instrada.ro/"
          target="_blank"
        >
          <FaFacebook className="hover:text-blue-600" size="22" />
        </a>
        <a
          className="text-slate-400 transition-colors"
          href="https://www.instagram.com/instrada.ro/"
          target="_blank"
        >
          <FaInstagram className="hover:text-pink-500" size="22" />
        </a>
        <a
          className="text-slate-400 transition-colors"
          href={`mailto:instradaromania@gmail.com`}
          target="_blank"
        >
          <CiMail className="hover:text-gray-800" size="22" />
        </a>
      </div>
    </footer>
  );
};
