"use client";

import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/7.png";
import tubeImage from "@/assets/hexagon.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const secRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={secRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#f0e1ef] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className=" gradient-heading mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-desc mt-5">
            Effortlessly turn your ideas into fully functional, responsive, Saas
            website in just minutes with this template
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10 " />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid image"
            className="hidden md:block absolute -top-24 -right-36"
            width={220}
            height={220}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="pyramid image"
            className="hidden md:block absolute -left-36 bottom-24"
            height={210}
            width={210}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
