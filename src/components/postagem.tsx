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
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
                src="https://cdn.lightwidget.com/widgets/76166597393f5d2e8dbffa1604329cad.html"
                scrolling="no"
                // allowtransparency="true"
                className="lightwidget-widget px-2"
                style={{
                    overflow: "hidden",
                    width: "100%"
                }}></iframe>
        </div>
    )
}
