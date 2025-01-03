/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-sync-scripts */
import { rubik } from "@/app/layout"
import React from "react"

export default function Postagem() {
    return (
        <div className="mt-14">
            <div className="p-5">
                <h1 className={`${rubik.className} text-bold text-center text-2xl text-[#1a0f31] md:text-4xl`}>
                    Fique por dentro das novidades no Instagram
                </h1>
            </div>
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-512d6e18-afcb-4cab-9d78-2251ab612275" data-elfsight-app-lazy></div>
        </div>
    )
}
