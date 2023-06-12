'use client';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

export default async function Home() {
  const req = await fetch('http://localhost:3001/produtos', {
    next: { revalidate: 1 },
  });
  const produtos = await req.json();

  const formatDate = (date) => new Date(date).toLocaleDateString();

  return (
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
      <div className="m-10 grid grid-cols-4 gap-4 justify-items-center rounded overflow-hidden shadow-lg bg-red-700">
        {produtos.map((produto) => (
          <div key={produto.id}>
            <Link href={`/${produto.id}`} className="px-1 py-8 pb-6">
              <Image className="rounded"
                src={produto.imagem}
                width={300}
                height={300}
                alt={produto.titulo}
              /> 
              <h1 className="py-2 text-sm text-gray-200 text-base mr-2 mb-2">{produto.titulo}</h1>
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-900 relative inline-block">
              <span className="px-4 py-1 text-sm text-2xl font-semibold text-white relative mr-2 mb-2 underline decoration-yellow-500 ">R${produto.preco}</span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
