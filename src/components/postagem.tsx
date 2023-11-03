/* eslint-disable @next/next/no-sync-scripts */
import { rubik } from '@/app/layout';
import Link from 'next/link';
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

            <script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            ></script>
            <div
                className="elfsight-app-c2518e6b-1250-46bb-a655-a75d99c391e1"
                data-elfsight-app-lazy
            ></div>
        </div>
    );
}
