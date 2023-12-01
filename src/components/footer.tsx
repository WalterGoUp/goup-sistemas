import { rubik } from "@/app/layout"
import { Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiOutlineCopyright } from "react-icons/ai"

import { BsInstagram, BsFacebook, BsWhatsapp, BsFillEnvelopeFill } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="mt-20 ">
            <div className=" flex flex-col items-center justify-center gap-5 border-t-2 border-gray-300 text-center">
                <h1 className={`${rubik.className} text-bold  mt-6 text-2xl text-[#1a0f31] md:text-4xl`}>
                    Go Up: Sua parceira no caminho do sucesso.
                </h1>
                <div className="flex w-1/2 justify-center border-b-2 border-gray-300 p-6">
                    <Link href={"/"}>
                        <Image
                            src="/images/semfundo.png"
                            quality={100}
                            priority={true}
                            width={90}
                            height={100}
                            alt="Logomarca Go Up"
                        />
                    </Link>
                </div>
                <div>
                    <Typography className="p-3">Se Junte à Go Up: Transformando a Gestão de Sistemas</Typography>
                    <div className="mt-5 flex justify-center gap-5">
                        <Link href={"https://www.facebook.com/goupsistemasmg"} target="_blank">
                            <BsFacebook className="text-2xl text-[#29184d] hover:text-[#523989]" />
                        </Link>
                        <Link href={"https://www.instagram.com/goupsistemas_mg/"} target="_blank">
                            <BsInstagram className="text-2xl text-[#29184d] hover:text-[#523989]" />
                        </Link>
                        <a href="mailto:contato@goupsistemas.com" target="_blank">
                            <BsFillEnvelopeFill className="text-2xl text-[#29184d] hover:text-[#523989]" />
                        </a>
                    </div>
                </div>
                <div className="w-full bg-[#391a7d]">
                    <Typography className="text-white">
                        <AiOutlineCopyright className="inline text-white" /> 2023 Go Up - Todos os direitos reservados
                    </Typography>
                    <div className="flex items-center justify-center gap-1 ">
                        <div>
                           <Typography className="text-white">Desenvolvido por </Typography>
                        </div>
                        <Link
                            href="https://api.whatsapp.com/send?phone=32999788128&text=Olá, gostaria de um orçamento!"
                            target="blank"
                            className="flex items-center justify-center  text-white">
                                <Typography className=" text-white hover:underline">David Cardoso</Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
