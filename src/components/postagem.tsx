/* eslint-disable @next/next/no-sync-scripts */
import { rubik } from '@/app/layout';
import React from 'react';

export default function Postagem() {
    return (
        <div>
            <div className="p-5">
                <h1
                    className={`${rubik.className} text-bold text-center text-2xl text-[#1a0f31] md:text-4xl`}
                >
                    Fique por dentro das novidades no Instagram
                </h1>
            </div>

            <iframe
                src="https://www.juicer.io/api/feeds/goupsistemas_mg/iframe"
                frameborder="0"
                width="100%"
                height="1000"
                style={{ display: 'block', margin: '0 auto' }}
            ></iframe>
        </div>
    );
}
