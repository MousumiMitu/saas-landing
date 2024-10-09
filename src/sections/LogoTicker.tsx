"use client";
import acmeLogo from "@/assets/logo-acme.png";
import logo2 from "@/assets/logo-echo.png";
import logo3 from "@/assets/logo-pulse.png";
import logo34 from "@/assets/logo-celestial.png";
import logo35 from "@/assets/logo-quantum.png";
import logo36 from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="acme logo" className="logo-ticker-img" />
            <Image src={logo2} alt="logo2  logo" className="logo-ticker-img" />
            <Image src={logo3} alt="logo3  logo" className="logo-ticker-img" />
            <Image src={logo34} alt="logo34 logo" className="logo-ticker-img" />
            <Image src={logo35} alt="logo35 logo" className="logo-ticker-img" />
            <Image src={logo36} alt="logo36 logo" className="logo-ticker-img" />

            <Image src={acmeLogo} alt="acme logo" className="logo-ticker-img" />
            <Image src={logo2} alt="logo2  logo" className="logo-ticker-img" />
            <Image src={logo3} alt="logo3  logo" className="logo-ticker-img" />
            <Image src={logo34} alt="logo34 logo" className="logo-ticker-img" />
            <Image src={logo35} alt="logo35 logo" className="logo-ticker-img" />
            <Image src={logo36} alt="logo36 logo" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
