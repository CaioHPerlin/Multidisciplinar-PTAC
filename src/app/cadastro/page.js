'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
//Imagem que carrega conforme o usuário digita o link (+)

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
    <main className="bg-neutral-950 grid grid-cols-1">
      <Navbar/>
      <div className="flex justify-center py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 w-2/4 gap-4 p-6 bg-red-700 border-red-800 border-r-8">
          <input required value={titulo} className="w-50 p-1" type="text" placeholder="Nome do Produto" onChange={e => setTitulo(e.target.value)}/>
          <input required value={preco}className="w-50 p-1" type="number" placeholder="Insira Preço do Produto" onChange={e => setPreco(e.target.value)}/>
          <input required value={descricao} className="w-50 p-1" type="text" placeholder="Descrição do Produto" onChange={e => setDescricao(e.target.value)}/>
          <input required value={imagem} className="w-50 p-1" type="text" placeholder="URL da Imagem" onChange={e => setImagem(e.target.value)}/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
