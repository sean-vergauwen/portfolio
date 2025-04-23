import React from "react";
import type { Metadata } from "next";

import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { TbMailFilled } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { metaData, socialLinks } from "app/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "My contact informations",
};

function SocialLink({ href, icon: Icon, name}) {
  return (
      <div className="flex sm:items-center sm:flex-row text-lg gap-3.5"> <Icon /> <a href={href} target="_blank">{name}</a></div>
  );
}

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Contact me</h1>
      <div>
        <SocialLink href={socialLinks.email} icon={TbMailFilled} name={"Mail"} />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} name={"Linkedin"} />
        <SocialLink href={socialLinks.github} icon={FaGithub} name={"Github"} />
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} name={"X (Formerly Twitter)"} />
        <SocialLink href={socialLinks.leetcode} icon={SiLeetcode} name={"Leetcode"} />
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} name={"Instagram"} />
      </div>
    </section>
  );
}
