import { rubik } from "@/app/layout"
import { Button, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BsWhatsapp } from "react-icons/bs"

export default function Serviços() {
    return (
        <div className="">
            <div className="flex h-full w-full justify-center">
                <div className="absolute -m-72 flex h-1/3 w-4/5 flex-col rounded-xl sm:-m-80 md:-m-32 md:w-2/3 ">
                    <Typography
                        className={`${rubik.className} text-extrabold  text-center text-2xl font-semibold text-[#2a194f] md:p-5 md:text-3xl`}>
                        Go Up atende às demandas específicas do seu negócio de forma abrangente.
                    </Typography>
                    <div className="pt-4 text-center ">
                        <Typography className="text-lg text-black">
                            Descubra como a Go Up pode impulsionar o seu sucesso hoje mesmo!
                        </Typography>
                    </div>
                    <div className="flex justify-center pt-5">
                        <Link
                            href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a Go Up!"
                            target="blank">
                            <Button
                                variant="outlined"
                                className={` ${rubik.className} flex items-center gap-4 rounded-2xl border-none bg-[#391a7d] px-10 py-2
                                            font-bold text-white hover:border-none hover:bg-[#5426B6] hover:text-white`}>
                                <BsWhatsapp /> Entre em contato!
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-20 grid w-11/12 grid-cols-1 grid-rows-2 gap-5 md:mt-32 md:w-2/3 md:grid-cols-3 md:gap-14 ">
                    <div className=" h-60 transform rounded-md p-3 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)] shadow-gray-300 transition-transform hover:scale-105  md:h-64">
                        <div className="flex  flex-col items-center justify-center gap-3">
                            <Image src={"/images/sistema.svg"} alt={""} width={100} height={100} />
                            <Typography className="text-center text-xl">Sistema PDV</Typography>
                            <Typography className="text-center">
                                Sistema PDV eficiente e integrado, que realiza a venda de forma online, incluindo
                                pagamento e emissão de nota fiscal.
                            </Typography>
                        </div>
                    </div>
                    <div className=" h-60 transform rounded-md p-3 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]  shadow-gray-300 transition-transform hover:scale-105 sm:h-72 md:h-64 ">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image src={"/images/add.svg"} alt={""} width={100} height={100} />
                            <Typography className="text-center text-xl">Cadastros</Typography>
                            <Typography className="text-center">
                                Quanto mais informações, melhor. Cadastre clientes, fornecedores, produtos e
                                funcionários para agilizar a rotina e fidelizar.
                            </Typography>
                        </div>
                    </div>
                    <div className="h-60 transform rounded-md p-3 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)] shadow-gray-300  transition-transform hover:scale-105 sm:h-72 md:h-64">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image src={"/images/papel.svg"} alt={""} width={100} height={100} />
                            <Typography className="text-center text-xl">Emissão de notas fiscais</Typography>
                            <Typography className="text-center">
                                Zero burocracia!Emita notas fiscais de todos os tipos: NF-e, NFS-e, NFC-e, CT-e, MDF-e.
                                Leva no máximo 2 minutinhos.
                            </Typography>
                        </div>
                    </div>
                    <div className="h-60 transform rounded-md p-3 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)] shadow-gray-300  transition-transform hover:scale-105 sm:h-72 md:h-64">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image src={"/images/prancheta.svg"} alt={""} width={100} height={100} />
                            <Typography className="text-center text-xl">Relatórios completos</Typography>
                            <Typography className="text-center">
                                Decisões estratégicas embasadas em dados precisos. Gere relatórios automátos e acompanhe
                                resultados em tempo real.
                            </Typography>
                        </div>
                    </div>
                    <div className="h-60 transform rounded-md p-3 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)] shadow-gray-300  transition-transform hover:scale-105 sm:h-72 md:h-64">
                        <div className="flex flex-col items-center justify-center gap-3 ">
                            <Image src={"/images/grafico.svg"} alt={""} width={100} height={100} />

                            <Typography className="text-center text-xl">Controle financeiro</Typography>
                            <Typography className="text-center">
                                Mantenha as finanças da sua empresa sempre em dia. Gerencie contas a pagar e receber sem
                                complicação, direto pelo sistema.
                            </Typography>
                        </div>
                    </div>
                    <div className="h-60 transform rounded-md p-3  shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]  shadow-gray-300 transition-transform hover:scale-105 sm:h-72 md:h-64">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image src={"/images/tablet.svg"} alt={""} width={100} height={100} />
                            <Typography className="text-center text-xl">Controle de estoque</Typography>
                            <Typography className="text-center">
                                Evite perder clientes por falta de produtos e materiais. Controle a entrada e saída de
                                estoque de um jeito simples e rápido.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
