'use client'

import Image from 'next/image';

export default function Detalhamento({params}) {
    return(
        <main>
            <h1 className="text-black">Camiseta - {params.id}</h1>
        </main>
    )
}