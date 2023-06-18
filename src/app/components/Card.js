'use client';
import Link from 'next/link';
import Image from 'next/image'

export default function Card({ item }) {
  return (
    <div key={item.id} className="bg-white rounded p-4 text-black">
      <Link href={`/produto/${item.id}`}>
        <Image
          className="rounded"
          src={item.imagem}
          width={300}
          height={300}
          alt={item.titulo}
        />
        <h1 className="py-2 text-center">{item.titulo}</h1>
        <div className="text-center grid grid-cols-2 items-center my-2">
          <h1>À vista por:</h1>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-900 relative before:hover:bg-red-800">
            <span className="text-white text-sm font-semibold relative underline decoration-yellow-500">
              R${item.preco}
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
