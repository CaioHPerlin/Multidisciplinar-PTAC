'use client';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';

export default async function Detalhamento({ params }) {
  const idJSON = JSON.stringify({ id: parseInt(params.id) });

  const req = await fetch('http://localhost:3001/detalhes', {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: idJSON,
  });
  const produto = await req.json();

  return (
    <main className="bg-neutral-950 grid grid-cols-1">
      <Navbar/>
      <Image
        className="rounded"
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
  );
}
