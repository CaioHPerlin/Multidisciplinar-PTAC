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
      <form className="flex items-start">   
    <div className="relative w-full">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-white rounded-lg w-full p-2.5 px-8 placeholder-gray-400 outline-none" placeholder="Procurar" required/>
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 bg-red-800 hover:bg-red-600 focus:ring-blue-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </button>
</form>

      <Link href="/cadastro"className="bg-red-900 hover:bg-red-800 font-semibold rounded p-3">
        CADASTRO
      </Link>
    </nav>
  );
}