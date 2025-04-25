"use client";

import React from "react";

import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { TbMailFilled } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="transition delay-50 duration-300 hover:fill-[#EFB631]" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-row text-lg gap-3.5 md:mt-0 md:ml-auto float-right transition-opacity delay-50 duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.leetcode} icon={SiLeetcode} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="flex flex-col gap-2 md:flex-row lg:mt-24 mt-16 mb-10 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <a
        className="no-underline transition delay-50 duration-300 hover:opacity-90 hover:text-[#EFB631]"
        href={socialLinks.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <time>© {YEAR}</time>{" "} {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
