/* eslint-disable @next/next/no-sync-scripts */
import { rubik } from '@/app/layout';
import React from 'react';

export default function Postagem() {
    return (
        <div className="p-5">
            <h1
                className={`${rubik.className} text-bold mt-6 text-center text-2xl text-[#1a0f31]  md:text-4xl`}
            >
                Fique por dentro de todas as novidades
            </h1>

            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
                src="//lightwidget.com/widgets/b39e06ce8fdc5e29bd372561b5b2c08a.html"
                scrolling="no"
                // allowtransparency="true"
                className="lightwidget-widget"
                style={{ width: '100%', border: 0, overflow: 'hidden' }}
            ></iframe>
        </div>
    );
}
