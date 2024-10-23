'use client'

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import WordPressStores from "./snippets/wordpress-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faqs";
import { useRef } from "react";


export default function Home() {

  const WebsiteDesignRef = useRef<HTMLDivElement>(null);
  const GraphicDesignRef = useRef<HTMLDivElement>(null);
  const WordPressStoresRef = useRef<HTMLDivElement>(null);
  const BrandsRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    WebsiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToGraphicDesign = () => {
    GraphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToWordPressStores = () => {
    WordPressStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToBrands = () => {
    BrandsRef.current?.scrollIntoView({ behavior: "smooth"})
  }



  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar
       scrollToWebsiteDesign={scrollToWebsiteDesign}
       scrollToGraphicDesign={scrollToGraphicDesign}
       scrollTowordPressStores={scrollToWordPressStores}
       scrollToBrands={scrollToBrands}
      
      />
      <Spotlight
      className="hidden md:flex left-80"
      fill="blue"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Create, grow, and <br /> manage your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solution for your business. We are a team of
          creatives who are excited to help you grow your business.
        </p>

        <Link 
        href={"/book"} 
        className="cursor-pointer
        flex items-center
        justify-center
        border rounded-full w-48 p-2
        mx-auto my-6
        text-white"
        >
         Book a call
        </Link>


        <div className="w-full pt-20">
          <SliderOne />

          <div ref={WebsiteDesignRef}>
          <WebsiteDesign />
          </div>

          <div ref={GraphicDesignRef}>
          <GraphicDesign />
          </div>

          <div ref={WordPressStoresRef}>
          <WordPressStores />
          </div>

          <div ref={BrandsRef}>
          <Brands />
          </div>
          
          <Services />
          <FAQS />
          

        </div>

      </div>
    </div>
  );
}
