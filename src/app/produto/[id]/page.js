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
      <div className="flex justify-center">
        <div className='w-3/4 m-10 bg-red-700 p-4 rounded grid grid-cols-2 justify-items-center'>
          <Image
            className="rounded"
            src={produto.imagem}
            width={700}
            height={700}
            alt={produto.titulo}
          />
          <div className="m-10 justfiy-items-start rounded overflow-hidden bg-red-700 ">
            <h1 className="font-bold text-2xl">{produto.titulo}</h1>
            <h1 className="mb-4">Código: #{produto.id}</h1>
            <span className="block w-full border-t my-4 mx-auto drop-shadow-lg opacity-50"></span>
            <h1 className="font-bold text-2xl my-2">R${produto.preco}</h1>
            <h1 className="text-justify text-sm my-2">{produto.descricao}</h1>
            <span className="block w-full border-t my-4 mx-auto drop-shadow-lg opacity-50"></span>
            <h1 className="my-4">Tamanho</h1>
            <div className="grid grid-cols-5 gap-4">
            <button className="border-red-600 border-solid border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">PP</button>
            <button className="border-red-600 border-solid border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">P</button>
            <button className="border-red-600 border-solid border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">M</button>
            <button className="border-red-600 border-solid border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">G</button>
            <button className="border-red-600 border-solid border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">GG</button>
            </div>
            <div className="my-20 grid grid-cols-2 gap-8">
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Alterar</button>
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Deletar</button>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
}
