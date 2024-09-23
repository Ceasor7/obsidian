import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-auto max-w-5xl py-2 items-center ">
      <Link href="/">
        <Image src="/obsidian.png" alt="logo" width={80} height={30} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
