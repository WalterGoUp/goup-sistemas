'use client';

import React from 'react';

import Slider from 'react-slick';
import Image from 'next/image';
import { rubik } from '@/app/layout';

export default function Parceiros() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <div id="features" className="">
            <div className="mx-auto flex w-full flex-wrap items-center">
                <div className="flex w-full flex-col text-center">
                    <div className="p-10">
                        <h1
                            className={`${rubik.className} text-bold  text-4xl text-[#1a0f31]`}
                        >
                            Alguns de nossos parceiros
                        </h1>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <Image
                                src="/images/loja7.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja5.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja4.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja6.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja3.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja2.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/loja1.jpg"
                                quality={100}
                                priority={true}
                                width={300}
                                height={201}
                                alt="Logomarca Angulo Coin"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
