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
    <main className=" bg-neutral-950 grid grid-cols-1">
      <Navbar/>
      <div className='flex justify-center'>
        <div className='w-3/4 m-10 bg-red-700 p-4 rounded grid grid-cols-2 justify-items-center'>
          <Image
            className="rounded"
            src={produto.imagem}
            width={700}
            height={700}
            alt={produto.titulo}
          />
          <div className=" m-10 justfiy-items-start rounded overflow-hidden shadow-lg bg-red-700 ">
            <h1 className="">{produto.titulo}</h1>
            <h1 className="mb-4">Código: #{produto.id}</h1>
            <h1 className="font-bold text-2xl">R${produto.preco}</h1>
            <span className="border-t-1 color-white"></span>
            <h1 className="">{produto.descricao}</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
