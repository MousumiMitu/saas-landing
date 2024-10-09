"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const secRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={secRef}
      className="bg-gradient-to-b from-white to-[#D2DCEF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="gradient-heading ">Sign up for free today</h2>
          <p className="section-desc mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            tenetur.
          </p>

          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            className="absolute -top-[137px] -left-[350px]"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="star image"
            width={360}
            className="absolute -top-[19px] -right-[331px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="flex gap-1 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
