import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md py-4 px-10 ">
      <div className=" flex px-20 text-white gap-6 justify-center">
        <a href="#home" className="hover:text-blue-400">
          Home
        </a>
        <a href="#shop" className="hover:text-blue-400">
          Shop
        </a>
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </div>

      <div className="border-t border-gray-700 mt-2">
        <div className="flex flex-col items-center justify-center py-6 gap-4">
          <div className="flex gap-4 text-white/70 items-center">
            <Facebook className="cursor-pointer hover:text-blue-400 transition" />
            <Linkedin className="cursor-pointer hover:text-blue-500 transition" />
            <Twitter className="cursor-pointer hover:text-sky-400 transition" />
            <Instagram className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
