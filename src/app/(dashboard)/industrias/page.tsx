import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { rubik } from '../layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

export default function Industrias() {
    return (
        <div>
            <div className=" flex justify-center bg-gradient-to-br from-[#391a7d] to-[#58167d]">
                <div className="plano mt-5 h-40  rounded-xl p-5 text-center">
                    <div className=" py-2">
                        <h1
                            className={`${rubik.className} text-bold font-700 text-center text-2xl text-white md:text-4xl`}
                        >
                            Gestão industrial simplificada e transparente
                        </h1>
                        <h2
                            className={`${rubik.className} text-bold font-700 pt-5 text-center text-white md:text-xl `}
                        >
                            Combine recursos para assegurar um desempenho
                            superior!
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid gap-4 p-10 md:grid-cols-2">
                <div className="">
                    <h1
                        className={`${rubik.className} text-bold font-700 text-center text-2xl md:text-4xl`}
                    >
                        Otimize a gestão da sua indústria
                    </h1>
                    <div className="mt-6 ">
                        <Typography className=" text-justify leading-8">
                            As indústrias confiam no <strong>GoUp</strong> para
                            aprimorar suas operações de produção e logística.
                            Nossa plataforma oferece recursos de controle de
                            produção, gestão de fornecedores e rastreabilidade
                            de produtos, que ajudam a garantir a qualidade e a
                            eficiência em cada etapa. Além disso, o{' '}
                            <strong>GoUp</strong> oferece análises detalhadas
                            para respaldar decisões estratégicas. Com nosso
                            sistema, você pode otimizar suas operações
                            industriais e atender aos mais altos padrões de
                            qualidade.
                        </Typography>
                    </div>
                    <div className="flex justify-center pt-5">
                        <Link
                            href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a GoUp!"
                            target="blank"
                        >
                            <Button
                                variant="outlined"
                                className={` ${rubik.className} flex items-center  gap-3 rounded-2xl border-none bg-[#391a7d] px-4 font-bold   text-white
                                    hover:border-none hover:bg-[#5426B6] md:px-20 `}
                            >
                                <BsWhatsapp /> Entre em contato!
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="grid  gap-4 md:grid-cols-2">
                    <div className="flex  flex-col items-center justify-center rounded-md bg-gray-200 p-4">
                        {' '}
                        <Image
                            src={'/images/voto-positivo.png'}
                            alt={''}
                            width={50}
                            height={50}
                        />
                        <Typography className="text-center text-xl">
                            Facilidade
                        </Typography>
                        <Typography className="text-center">
                            Fácil acesso a informações estratégicas de
                            operações.
                        </Typography>
                    </div>
                    <div className="flex  flex-col items-center justify-center rounded-md bg-gray-200 p-4">
                        {' '}
                        <Image
                            src={'/images/produtividade.png'}
                            alt={''}
                            width={50}
                            height={50}
                        />
                        <Typography className="text-center text-xl">
                            Produtividade
                        </Typography>
                        <Typography className="text-center">
                            Melhor administração do tempo e aumento da
                            eficiência produtiva.
                        </Typography>
                    </div>

                    <div className="flex  flex-col items-center justify-center rounded-md bg-gray-200 p-4">
                        {' '}
                        <Image
                            src={'/images/distintivo.png'}
                            alt={''}
                            width={50}
                            height={50}
                        />
                        <Typography className="text-center text-xl">
                            Qualidade
                        </Typography>
                        <Typography className="text-center">
                            Minimização de falhas e garantia de qualidade
                            consistente.
                        </Typography>
                    </div>

                    <div className="flex  flex-col items-center justify-center rounded-md bg-gray-200 p-4">
                        {' '}
                        <Image
                            src={'/images/ativos.png'}
                            alt={''}
                            width={50}
                            height={50}
                        />
                        <Typography className="text-center text-xl">
                            Controle
                        </Typography>
                        <Typography className="text-center">
                            O aperfeiçoamento constante dos procedimentos,
                            produtos e serviços.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
