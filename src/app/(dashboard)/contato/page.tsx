/* eslint-disable prettier/prettier */
"use client"
import Typography from "@mui/material/Typography"
import React from "react"
import { BsFillEnvelopeFill, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import Link from "next/link"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { rubik } from "@/app/layout"

export default function Contato() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDGFpg7xsr3jhc0aF9gG5-vFwuMQxh7f-E"
    })
    return (
        <>
            <div>
                <div className="mt-20 flex justify-center">
                    <div className=" grid w-11/12 md:w-3/5 md:grid-cols-2 ">
                        <div className=" bg-gradient-to-br from-[#391a7d] to-[#58167d] p-4 md:rounded-l-md">
                            <div className=" text-center text-white">
                                <h1 className={`${rubik.className} text-bold mt-6 text-2xl text-gray-200  md:text-4xl`}>
                                    Contate-nos
                                </h1>
                                <Typography>
                                    Estamos aqui para atender qualquer necessidade de negócios e promover sua empresa.
                                </Typography>
                            </div>
                            <div className="border-b-4 border-gray-500 p-4"></div>
                            <div className="pt-4 text-white">
                                <div className="flex items-center gap-2 pb-3 md:gap-3">
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a Go Up!"
                                        target="blank">
                                        <div className="flex items-center gap-2 hover:scale-105 ">
                                            <div>
                                                <BsWhatsapp className="text-xl text-[#ffffff]" />
                                            </div>
                                            <Typography>(32) 9 9924-5031</Typography>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 pb-3 md:gap-3">
                                    <Link href={"https://www.instagram.com/goupsistemas_mg/"} target="blank">
                                        <div className="flex items-center gap-2 hover:scale-105 ">
                                            <div>
                                                <BsInstagram className="text-xl text-[#ffffff]" />
                                            </div>
                                            <Typography>goupsistemas_mg</Typography>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 pb-3 md:gap-3">
                                    <Link href={"mailto:contato@goupsistemas.com"} target="blank">
                                        <div className="flex items-center gap-2 hover:scale-105 ">
                                            <div>
                                                <BsFillEnvelopeFill className="text-xl text-[#ffffff] " />
                                            </div>
                                            <Typography>contato@goupsistemas.com</Typography>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 pb-3 md:gap-3">
                                    <div>
                                        <SlLocationPin className="text-xl text-[#ffffff]" />
                                    </div>
                                    <Typography>
                                        Rua Itagiba de Oliveira, 250 Barra - Muriaé-MG - CEP:36884-056
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="bg-end hidden rounded-r-md bg-[url('/images/contato.jpg')] bg-cover md:block"></div>
                    </div>
                </div>
                <div className="mt-10 flex h-screen w-full items-center justify-center">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: "100%",
                                height: "100%"
                            }}
                            center={{
                                lat: -21.13183565960778,
                                lng: -42.37948450069418
                            }}
                            zoom={15}>
                            <Marker position={{ lat: -21.13183565960778, lng: -42.37948450069418 }} />
                        </GoogleMap>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}
