'use client';
import Link from 'next/link';
import Image from 'next/image'

export default function Card({ item }) {
  return (
    <div key={item.id}>
      <Link href={`/produto/${item.id}`} className="px-1 py-8 pb-6">
        <Image
          className="rounded"
          src={item.imagem}
          width={300}
          height={300}
          alt={item.titulo}
        />
        <h1 className="my-2 text-gray-200 text-base">{item.titulo}</h1>
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-900 relative inline-block">
          <span className="px-4 text-sm font-semibold relative underline decoration-yellow-500">
            R${item.preco}
          </span>
        </span>
      </Link>
    </div>
  );
}
