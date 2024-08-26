import Link from "next/link";

const links = [
  { text: "About", path: "/" },
  { text: "Merchant Lookup", path: "/" },
  { text: "FAQ", path: "/" },
  { text: "Support", path: "/" },
];

const Nav = ({ className }: { className?: string }) => {
  return (
    <nav className={`gap-1 md:gap-5 ${className}`}>
      {links.map((link) => (
        <Link
          href={link.path}
          className="p-[10px] font-inter-tight grow text-center text-black dark:text-white lg:text-white font-medium text-[18px] leading-[21.78px] hover:bg-[#3f55f31a] hover:text-[#2E46F2] rounded-md transition-colors duration-300"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
