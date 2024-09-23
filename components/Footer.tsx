import { siteConfig } from "@/config/site";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Learn More",
    links: ["About Obsidian", "Environment", "Privacy Policy", "Contact Us"],
  },
  {
    title: "Our Community",
    links: ["Climbing Mt Kenya", "Hiking Longonot", "Hiking Ngong hills"],
  },
];

const contact_info = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "+254 720 417002" },
    { label: "Email Officer", value: "obsdiantours.com" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-5xl flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {links.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, linkIndex) => (
                    <Link href="/" key={linkIndex}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={contact_info.title}>
                {contact_info.links.map((link, linkIndex) => (
                  <Link
                    href="/"
                    key={linkIndex}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="text-[14px] font-[600] whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
              <div className="flex flex-row gap-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.twitter}
                >
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter size={30} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.facebook}
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF size={30} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.instagram}
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="text-[14px] font-[400] w-full text-center text-gray-30">
          © {currentYear} | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
