'use client';
import { useState } from 'react';
import '../globals.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//Imagem que carrega conforme o usuário digita o link (+)
//Verificar formato da DATACADASTRO

export default function Cadastro() {
  const route = useRouter();
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState();
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataCadastro = new Date(Date.now());
    const produto = {
      titulo: titulo,
      dataCadastro: dataCadastro,
      preco: preco,
      descricao: descricao,
      imagem: imagem,
    };

    const produtoJSON = JSON.stringify(produto);
    
    fetch("http://localhost:3001/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: produtoJSON
    }).then(function(){route.push("/")}).catch(() => console.log("Não foi possível cadastrar o produto."));

    setTitulo("");
    setPreco("");
    setDescricao("");
    setImagem("");
  };

  return (
    <main className="select-none bg-neutral-950 grid grid-cols-1 justify-items-center">
      <div className="m-20 grid grid-cols-2 gap-4">
        <Link href="/" className="bg-red-800 p-2">
          HOME
        </Link>
        <Link href="/cadastro" className="bg-red-800 p-2">
          CADASTRO
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 w-2/4 gap-4 p-6 m-12 bg-red-700 border-red-800 border-r-8">
        <input required value={titulo} className="w-50 p-1" type="text" placeholder="Nome do Produto" onChange={e => setTitulo(e.target.value)}/>
        <input required value={preco}className="w-50 p-1" type="number" placeholder="Insira Preço do Produto" onChange={e => setPreco(e.target.value)}/>
        <input required value={descricao} className="w-50 p-1" type="text" placeholder="Descrição do Produto" onChange={e => setDescricao(e.target.value)}/>
        <input required value={imagem} className="w-50 p-1" type="text" placeholder="URL da Imagem" onChange={e => setImagem(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
