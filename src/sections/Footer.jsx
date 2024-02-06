import React from "react";
// framer motion
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

// logos
import BrandLogo from "../components/UI/BrandLogo";
import Facebook from "../components/UI/Icons/Facebook";
import Instagram from "../components/UI/Icons/Instagram";
import Twitter from "../components/UI/Icons/Twitter";
import Pinterest from "../components/UI/Icons/Pinterest";

function Footer() {
  return (
    <>
      <motion.footer
        variants={fadeIn("up", "spring", 0.1, 1)}
        initial="hidden"
        whileInView={"show"}
        className="bg-primary-green"
      >
        <div className="pt-12 pb-6 flex items-center justify-center">
          <BrandLogo fill={"fill-primary-darkDesaturatedCyan"} />
        </div>
        <div className="px-6 lg:px-0">
          <ul className="flex items-center justify-around lg:justify-center lg:gap-[4rem] pb-6 font-barlow text-primary-darkModerateCyan ">
            <li className="hover:text-neutral-white cursor-pointer transition-all">About</li>
            <li className="hover:text-neutral-white cursor-pointer transition-all">Services</li>
            <li className="hover:text-neutral-white cursor-pointer transition-all">Projects</li>
          </ul>
        </div>
        <div className="px-20 py-16 lg:px-0">
          <ul className="flex items-center justify-around lg:justify-center lg:gap-[2rem]">
            <li>
              <Facebook />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Pinterest />
            </li>
          </ul>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
