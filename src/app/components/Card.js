'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ item }) {
  return (
    <div className="bg-white rounded p-4 text-black">
      <Link href={`/produto/${item.id}`}>
        <Image
          className="rounded w-96 h-96"
          src={item.imagem}
          alt={item.titulo}
          width={300}
          height={300}
        />
        <div>
          <h1 className="py-2 text-center">{item.titulo}</h1>
          <div className="text-center grid grid-cols-2 items-center my-2">
            <h1>À vista por:</h1>
            <span className="block py-2 -inset-1 -skew-y-3 bg-red-900 relative hover:bg-red-800">
              <span className="text-white text-sm font-semibold relative underline decoration-yellow-500">
                R${item.preco.toFixed(2)}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
