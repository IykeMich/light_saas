'use client'
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress,[0, 1], [150, -150])
  return (
    <section ref={sectionRef} className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Boost your productivity
            </div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app 
            designed to track your progress and motivate your 
            efforts.
          </p>
        </div>
        <div className="relative">
          <motion.img
          style={{
            translateY
          }}
           src={productImage.src} alt="Product Image" className="mt-10"  />
          <motion.img
          style={{
            translateY,
          }}
          src={pyramidImage.src} alt="Pyramid Image" 
          height={248} width={248} className="hidden md:block absolute -right-36 -top-32"  />
          <Image src={tubeImage} alt="Tube Image" height={248} className="hidden md:block absolute bottom-24 -left-36" />
        </div>
      </div>
    </section>
  );
};
