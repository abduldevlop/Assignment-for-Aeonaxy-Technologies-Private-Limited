import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  interface NavLink {
    id: number;
    title: string;
    href: string;
    icon?: React.ReactNode; // Making icon optional
  }

  const navLinks: NavLink[] = [
    { id: 1, title: "Solutions", href: "solutions", icon: <IoIosArrowDown /> },
    { id: 2, title: "Features", href: "features", icon: <IoIosArrowDown /> },
    { id: 3, title: "Resources", href: "resources", icon: <IoIosArrowDown /> },
    { id: 4, title: "Pricing", href: "pricing" },
  ];
  return (
    <nav className=" px-4 xl:container mx-auto py-5 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <a href="/" className=" text-2xl xl:text-4xl font-bold uppercase">
          BOORDS
        </a>
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.id}
            className="hidden xl:flex items-center gap-1 font-medium"
          >
            {link.title}
            <span className="font-thin"> {link.icon}</span>
          </a>
        ))}
      </div>
      <button className="bg-black text-white text-[13px] xl:text-sm px-4 py-2 rounded-xl ">
        Login
      </button>
    </nav>
  );
};

export default NavBar;
