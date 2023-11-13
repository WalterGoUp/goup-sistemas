"use client";

import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import { rubik } from "@/app/layout";

export default function Parceiros() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section id="parceiros">
      <div id="features" className="">
        <div className="mx-auto flex w-full flex-wrap items-center">
          <div className="flex w-full flex-col text-center">
            <div className="p-10">
              <h1
                className={`${rubik.className} text-bold text-2xl text-[#1a0f31] md:text-4xl`}
              >
                Alguns de nossos parceiros
              </h1>
            </div>
            <Slider {...settings}>
              <div>
                <Image
                  src="/images/agroboi.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Agroboi"
                />
              </div>
              <div>
                <Image
                  src="/images/borracha.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Shoping da borracha"
                />
              </div>
              <div>
                <Image
                  src="/images/casarao.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Casarão"
                />
              </div>
              <div>
                <Image
                  src="/images/embalagens.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Embalagens"
                />
              </div>
              <div>
                <Image
                  src="/images/emes.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Emes"
                />
              </div>
              <div>
                <Image
                  src="/images/guarino.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Casas guarino"
                />
              </div>
              <div>
                <Image
                  src="/images/hortilar.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="hortilar"
                />
              </div>
              <div>
                <Image
                  src="/images/kassia.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Hortilar"
                />
              </div>
              <div>
                <Image
                  src="/images/fielgas.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="fielgas"
                />
              </div>
              <div>
                <Image
                  src="/images/kiferro.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="ki-ferro"
                />
              </div>
              <div>
                <Image
                  src="/images/kuelhos.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="kuelhos"
                />
              </div>
              <div>
                <Image
                  src="/images/lacerda.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="lacerda"
                />
              </div>
              <div>
                <Image
                  src="/images/luzcolor.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="luzcolor"
                />
              </div>
              <div>
                <Image
                  src="/images/gastro-mansao.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="mansao"
                />
              </div>

              <div>
                <Image
                  src="/images/marquinho.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="marquinho oticas"
                />
              </div>
              <div>
                <Image
                  src="/images/mc.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="mc criacoes"
                />
              </div>
              <div>
                <Image
                  src="/images/nossa-otica.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Fiel-gas"
                />
              </div>
              <div>
                <Image
                  src="/images/hamburgueria-paulus.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Paulus"
                />
              </div>
              <div>
                <Image
                  src="/images/barra-shop.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Barra shoes"
                />
              </div>
              <div>
                <Image
                  src="/images/pietro.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="san pietro "
                />
              </div>
              <div>
                <Image
                  src="/images/quimio.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="quimio"
                />
              </div>
              <div>
                <Image
                  src="/images/silvinho.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="silvinho"
                />
              </div>
              <div>
                <Image
                  src="/images/soleneve.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="soleneve"
                />
              </div>
              <div>
                <Image
                  src="/images/varanda.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="restaurante varanda"
                />
              </div>
              <div>
                <Image
                  src="/images/ylafrut.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="ylafrut"
                />
              </div>
              <div>
                <Image
                  src="/images/plastic.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="Marquinhos otica"
                />
              </div>
              <div>
                <Image
                  src="/images/emporio.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="emporio"
                />
              </div>
              <div>
                <Image
                  src="/images/mfc.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="mfc esportes"
                />
              </div>
              <div>
                <Image
                  src="/images/bokas.jpg"
                  quality={100}
                  priority={true}
                  width={200}
                  height={200}
                  alt="otica"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
