import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
    return (
        <div className="flex w-full items-center justify-around bg-gray-100 p-5">
            <div className="">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={130}
                    height={100}
                />
            </div>
            <div className="flex gap-5 uppercase">
                <Link
                    href={'/'}
                    className=" text-[#391a7d] hover:text-[#7b097e] "
                >
                    <Typography className="font-bold">Home</Typography>
                </Link>
                <Link
                    href={'#'}
                    className=" text-[#391a7d] hover:text-[#7b097e]"
                >
                    <Typography className="font-bold">Serviços</Typography>
                </Link>
                <Link
                    href={'#'}
                    className=" text-[#391a7d] hover:text-[#7b097e]"
                >
                    <Typography className="font-bold">Parceiros</Typography>
                </Link>
                <Link
                    href={'#'}
                    className=" text-[#391a7d] hover:text-[#7b097e]"
                >
                    <Typography className="font-bold">Contato</Typography>
                </Link>
            </div>
        </div>
    );
}
