/* eslint-disable @next/next/no-sync-scripts */
import { rubik } from '@/app/layout';
import React from 'react';

export default function Postagem() {
    return (
        <div className="mt-14">
            <div className="p-5">
                <h1
                    className={`${rubik.className} text-bold text-center text-2xl text-[#1a0f31] md:text-4xl`}
                >
                    Fique por dentro das novidades no Instagram
                </h1>
            </div>
            {/* <script src="https://snapwidget.com/js/snapwidget.js"></script> */}
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            {/* <iframe
                src="https://snapwidget.com/embed/1048706"
                className="snapwidget-widget p-10"
                // allowtransparency="true"
                // frameborder="0"
                scrolling="no"
                style={{
                    border: 'none',
                    overflow: 'hidden',
                    width: '100%',
                }}
            ></iframe> */}
            <iframe
                src="//lightwidget.com/widgets/e90b017a209a5cc7a0df4bbefc6fa6be.html"
                scrolling="no"
                // allowtransparency="true"
                className="lightwidget-widget p-2"
                style={{
                    border: 'none',
                    overflow: 'hidden',
                    width: '100%',
                }}
            ></iframe>
        </div>
    );
}
