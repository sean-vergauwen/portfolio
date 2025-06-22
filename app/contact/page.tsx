import React from "react";
import type { Metadata } from "next";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { TbMailFilled } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "app/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "My contact informations",
};

function SocialLink({ href, icon: Icon, name}) {
  return (
      <div className="flex items-center flex-row text-lg gap-3.5"> <Icon /> <a href={href} target="_blank">{name}</a></div>
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
        <SocialLink href={socialLinks.leetcode} icon={SiLeetcode} name={"Leetcode"} />
      </div>
    </section>
  );
}
