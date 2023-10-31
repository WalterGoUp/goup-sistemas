/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiDumbbell, CiShoppingTag } from 'react-icons/ci';
import { IoIosRestaurant } from 'react-icons/io';
import { GiShoppingCart, GiCorn } from 'react-icons/gi';
import { BsBoxSeam } from 'react-icons/bs';
import { PiFactoryLight } from 'react-icons/pi';
import { VscTools } from 'react-icons/vsc';
import { IoGlassesOutline, IoStorefrontOutline } from 'react-icons/io5';
import { FaTractor } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="flex w-full items-center justify-around bg-gray-100 p-5">
            <div className="">
                <Link href={'/'}>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={130}
                        height={100}
                    />
                </Link>
            </div>
            <div className="md:hidden">
                <Button onClick={toggleMenu}>
                    <FiMenu className="  hover:scale-120 text-2xl text-[#391a7d] transition-transform hover:text-[#7b097e]" />
                </Button>
            </div>
            <div
                className={`md:flex ${
                    isMenuOpen ? 'transition-all duration-1000' : 'hidden'
                }  flex-col md:flex md:h-full md:justify-between `}
            >
                <div
                    className={`md:flex ${
                        isMenuOpen
                            ? 'flex-col'
                            : '' /* Se o menu estiver aberto, use flex-col para empilhar os itens verticalmente */
                    } ${
                        isMenuOpen ? 'transition-all duration-1000' : 'hidden'
                    } md:flex md:h-full md:flex-col md:justify-between md:bg-none `}
                >
                    <Button variant="text">
                        <Link
                            href={'/'}
                            className=" text-[#391a7d] hover:text-[#7b097e] "
                        >
                            <Typography className="font-bold">Home</Typography>
                        </Link>
                    </Button>
                    <Button
                        id="basic-button"
                        variant="text"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        // onClick={handleClick}
                        onMouseEnter={handleClick}
                        className="  text-[#391a7d] hover:text-[#7b097e]"
                    >
                        <Typography className="font-bold">Serviços</Typography>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div className="flex">
                            <div>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/atacadistas'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <BsBoxSeam /> Atacadistas
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/oticas'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <IoGlassesOutline /> Óticas
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/supermercados'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        {' '}
                                        <GiShoppingCart /> Supermercados
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/varejo'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <CiShoppingTag /> Lojas de Varejo
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/industrias'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <PiFactoryLight /> Indústrias
                                    </Link>
                                </MenuItem>
                            </div>
                            <div>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/construcao'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <VscTools /> Materiais de construção
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/rural'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <FaTractor /> Produtor rural
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/moveis'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <IoStorefrontOutline />
                                        Lojas de Móveis e Eletrodomésticos
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/restaurantes'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <IoIosRestaurant /> Restaurantes,
                                        Padarias e Lanchonetes
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        href={'/academias'}
                                        className="flex items-center gap-2 hover:text-[#7b097e]"
                                    >
                                        <CiDumbbell /> Academias e clubes
                                    </Link>
                                </MenuItem>
                            </div>
                        </div>
                    </Menu>
                    <Button variant="text">
                        <Link
                            href={'parceiros'}
                            className=" text-[#391a7d] hover:text-[#7b097e]"
                        >
                            <Typography className="font-bold">
                                Parceiros
                            </Typography>
                        </Link>
                    </Button>
                    <Button variant="text">
                        <Link
                            href={'/contato'}
                            className=" text-[#391a7d] hover:text-[#7b097e]"
                        >
                            <Typography className="font-bold">
                                Contato
                            </Typography>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
