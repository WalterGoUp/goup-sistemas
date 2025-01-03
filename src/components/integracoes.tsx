import React from 'react';
import Image from 'next/image';

export default function Integracoes() {
    return (
        <div className="p-6">
            <h1 className=" text-center text-2xl text-[#1a0f31] md:text-4xl mb-8">
                Nossas integrações
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/ml.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/getnet.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/justa.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/melhorenvio.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/pagseguro.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/px.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/stone.png" alt="Integracoes" width={150} height={200} />
                </div>
                <div className="shadow-md rounded-md p-4 flex justify-center items-center">
                    <Image src="/images/integracoes/scan.png" alt="Integracoes" width={200} height={200} />
                </div>
            </div>
        </div>
    );
}
