import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Sidharth Grover. All Rights Reserved.`,
  author: {
    name: "Sidharth Grover",
    accounts: [
      {
        url: "https://github.com/Sid10501",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/sidharthgrover0/",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.linkedin.com/in/sidharth-grover/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:sidharth.grover21@gmail.com",
        label: "Email Sidharth",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
