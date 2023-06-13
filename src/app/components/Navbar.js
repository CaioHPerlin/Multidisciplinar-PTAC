'use client';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-red-700 p-8 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/imagens/logo-centurion.png"
          width={300}
          height={300}
          alt="Centurion Geek Store"
          className="rounded-full w-32 h-32"
        />
      </Link>
      <Link href="/cadastro"className="bg-red-900 hover:bg-red-800 font-semibold rounded p-3">
        CADASTRO
      </Link>
    </nav>
  );
}