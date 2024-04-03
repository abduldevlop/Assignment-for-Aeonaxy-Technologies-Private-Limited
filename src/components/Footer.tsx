import { footerLinks } from "../data";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white flex flex-col xl:flex-row justify-between items-center px-20 pt-10 pb-40 gap-10  ">
      <div className="flex flex-col gap-5">
        <a href="/" className="text-4xl font-bold uppercase">
          Boords
        </a>
        <p className="text-gray-400  ">
          The shorcut to effective <br /> storyboard
        </p>
        <button className="bg-white text-black px-4 py-2 font-bold w-fit rounded-md">
          Try for free
        </button>
      </div>
      <div className="flex gap-5 flex-col xl:flex-row w-full ml-14 xl:justify-between">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id}>
            <h1 className="text-xl font-medium ">{footerLink.title}</h1>
            <ul className="mt-5 flex flex-col gap-1">
              {footerLink.links.map((link) => (
                <li key={link} className="teec">
                  {link}
                  {link == "Affilates" ? (
                    <span className="border text-[12px] border-red-300 text-red-300 px-2 rounded-full ml-2">
                      New
                    </span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
