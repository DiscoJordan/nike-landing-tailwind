import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className=" padding-x py-8 sticky top-0  w-full bg-white z-30 shadow-sm">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <img className=" max-lg:block hidden"
          src={hamburger}
          width={24}
          height={24}
          alt="Menu"
        />
      </nav>
    </header>
  );
};

export default Nav;
