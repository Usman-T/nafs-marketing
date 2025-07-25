import Link from "next/link";
import React from "react";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d2021] text-[#a89984] border-t border-[#3c3836] pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="min-w-fit w-5 h-5 md:w-7 md:h-7 text-[#fe8019]" />
            <h3 className="text-xl font-semibold text-[#ebdbb2]">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-4 text-sm text-[#a89984] max-w-sm">
            {footerDetails.subheading}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#ebdbb2] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.url}
                  className="hover:text-[#fe8019] transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#ebdbb2] mb-4">
            Contact Us
          </h4>
          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-sm hover:text-[#fe8019] mb-1"
            >
              Email: {footerDetails.email}
            </a>
          )}
          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-4">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      target="blank"
                      key={platformName}
                      aria-label={platformName}
                      className="text-[#ebdbb2] hover:text-[#fe8019]"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-[#7c6f64]">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
