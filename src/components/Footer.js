import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="border border-t-2 border-cyan-50 flex justify-evenly items-center py-4 font-roboto font-medium">
      <p className="text-lg w-[30%]">Designed and Developed by Prem Kumar</p>
      <p className="text-lg w-[30%]">Copyright © {year} PK</p>
      <ul className="flex justify-center items-center gap-6">
        <li>
          <a href="https://github.com/Prem324" target="_blank" rel="noreferrer">
            <AiFillGithub className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prem324"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </li>
        <li>
          <a href="mailto:prem324r@gmail.com" target="_blank" rel="noreferrer">
            <MdEmail className="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
