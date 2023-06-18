'use client';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-red-700">
      <div className="p-7 grid grid-cols-3 items-center">
      <Link href="/" className="w-32">
        <Image
          src="/imagens/logo-centurion.png"
          width={300}
          height={300}
          alt="Centurion Geek Store"
          className="rounded-full w-32 h-32"
        />
      </Link>
      <div className="pr-10">
      <form className="flex items-center">   
    <label htmlFor="searchbar" className="sr-only">Pesquisar</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white" fill="currentColor"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="searchbar" className="text-white caret-color-white bg-gray-50 text-sm rounded-full block w-full pl-10 p-3 px-52 bg-red-600 border border-red-600 hover:border-red-500 outline-none placeholder-white transition duration-300 ease-in-out" placeholder="O que você deseja buscar?" required/>
    </div>
</form>
</div>
    <div className="pl-10 grid grid-cols-2 gap-8 text-center w-5/6">
      <Link href="/"className="bg-red-600 hover:bg-red-500 font-semibold rounded p-3 transition duration-300 ease-in-out">
        Home
      </Link>
      <Link href="/cadastro"className="bg-red-600 hover:bg-red-500 font-semibold rounded p-3 transition duration-300 ease-in-out">
        Cadastro
      </Link>
      </div>
      </div>
    </nav>
  );
}