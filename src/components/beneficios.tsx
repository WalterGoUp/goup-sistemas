"use client"
import * as React from "react"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Typography from "@mui/material/Typography"
import { rubik } from "@/app/layout"
import { FaLock, FaTools, FaSortAmountUpAlt, FaBook } from "react-icons/fa"

export default function Beneficios() {
    return (
        <div
            className=" mt-20  bg-center bg-no-repeat bg-auto"
            style={{
                backgroundImage:
                    ' linear-gradient(265deg, rgba(57,26,125,0.9) , rgba(57,26,125,0.9)  ), url("/images/project.png") '
            }}>
            <h1 className={`${rubik.className} text-semibold  pt-5 text-center text-2xl text-white md:text-4xl`}>
                Veja todos os benefícios de ter o <br /> Go Up na sua empresa!
            </h1>
            <Timeline position="alternate-reverse">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector className="border-[#7b097e]" />
                        <TimelineDot className=" border-[#7b097e] bg-white p-2 md:p-4" variant="outlined">
                            <FaBook className="text-xl text-[#7b097e] md:text-4xl" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="flex flex-col items-end justify-end py-8">
                        <Typography component="span" className="text-base text-gray-300 sm:text-xl">
                            Treinamento Personalizado
                        </Typography>

                        <Typography className="  hidden  w-1/2 text-white md:block">
                            Instrutores experientes capacitam sua equipe cpara enfrentar os desafios do mercado,
                            garantindo crescimento e sucesso contínuos.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className="border-[#7b097e] bg-white p-2 md:p-4" variant="outlined">
                            <FaTools className="text-xl text-[#7b097e] md:text-4xl" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="py-5 md:py-7">
                        <Typography component="span" className="text-base text-gray-300 sm:text-xl">
                            Sistema Multisserviços
                        </Typography>
                        <Typography className="hidden w-1/2 text-white md:block">
                            A Go Up oferece um Sistema Multisserviços que atende a todas as necessidades do seu negócio
                            em um só lugar.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot variant="outlined" className="border-[#7b097e] bg-white p-2 md:p-4">
                            <FaLock className="text-xl text-[#7b097e] md:text-4xl" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="flex flex-col items-end justify-end py-8">
                        <Typography component="span" className="text-base text-gray-300 sm:text-xl">
                            Segurança de Dados
                        </Typography>
                        <Typography className=" hidden  w-1/2 text-white md:block">
                            Tecnologias avançadas de criptografia e protocolos de segurança para garantir que suas
                            informações estejam sempre protegidas.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className="border-[#7b097e] bg-white p-2 md:p-4" variant="outlined">
                            <FaSortAmountUpAlt className="text-xl text-[#7b097e] md:text-4xl" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=" py-8">
                        <Typography component="span" className="text-base text-gray-300 sm:text-xl">
                            Melhoria Contínua
                        </Typography>
                        <Typography className="hidden  w-1/2 text-white md:block">
                            A Go Up evolui constantemente para atender às suas necessidades em constante mudança.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}
