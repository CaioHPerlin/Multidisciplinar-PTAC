'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default async function Detalhamento({params}) {
    const router = useRouter();
    const idJSON = JSON.stringify({ id: parseInt(params.id) });

    const req = await fetch("http://localhost:3001/detalhes", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json"},
        body: idJSON
    });
    const produto = await req.json();

    return(
        <main className="bg-neutral-950 grid grid-cols-1">
        <nav className="border-gray-200 bg-red-700 p-7 flex justify-between items-center">
        <Link href="/">
        <Image 
          src="/imagens/logo-centurion.png"
          width={300}
          height={300}
          alt='Centurion Geek Store'
          className="rounded-full w-32 h-32"
        />
        </Link>
        <Link href="/cadastro" className="bg-red-900 hover:bg-red-800 font-semibold text-white rounded p-3 h-12">
          CADASTRO
        </Link>
      </nav>
                <Image className="rounded"
                src={produto.imagem}
                width={500}
                height={500}
                alt={produto.titulo}
              /> 
              <div className="m-10 grid grid-rows-3 gap-4 justify-items-end rounded overflow-hidden shadow-lg bg-red-700">
            <h1 className="">{produto.titulo}</h1>
            <h1 className="">R${produto.preco}</h1>
            <h1 className="">{produto.descricao}</h1>
            </div>
        </main>
    )
}