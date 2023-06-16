'use client';
import Link from 'next/link';
import Image from 'next/image'

export default function Card({ item }) {
  return (
    <div key={item.id} className="bg-white rounded py-4 px-4">
      <Link href={`/produto/${item.id}`} className="px-1 py-8 pb-6">
        <Image
          className="rounded"
          src={item.imagem}
          width={300}
          height={300}
          alt={item.titulo}
        />
        <h1 className="my-2 text-black text-base text-center">{item.titulo}</h1>
        <div className="text-center grid grid-cols-2 items-center">
        <h1 className="text-black text-align-center">12x sem juros</h1>
        <span class="my-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-900 relative inline-block before:hover:bg-red-800">
          <span className="px-4 text-sm font-semibold relative underline decoration-yellow-500">
            R${item.preco}
          </span>
        </span>
        </div>
      </Link>
    </div>
  );
}
