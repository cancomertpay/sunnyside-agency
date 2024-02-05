import React from "react";
// framer motion
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

// logos
import BrandLogo from "../components/UI/BrandLogo";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

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
        <div className="px-6">
          <ul className="flex items-center justify-around pb-6 font-barlow text-primary-darkModerateCyan">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="px-20 py-16">
          <ul className="flex items-center justify-around">
            <li>
              <img src={facebook} alt="sunnyside agency facebook icon" />
            </li>
            <li>
              <img src={instagram} alt="sunnyside agency instagram icon" />
            </li>
            <li>
              <img src={twitter} alt="sunnyside agency twitter icon" />
            </li>
            <li>
              <img src={pinterest} alt="sunnyside agency pinterest icon" />
            </li>
          </ul>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
