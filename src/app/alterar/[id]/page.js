'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Container from '@/app/components/Container';

export default function Cadastro() {
  const route = useRouter();
  const params = useParams();

  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState();
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');

  async function fetchData(){
    const idJSON = JSON.stringify({ id: parseInt(params.id) });

    const req = await fetch('http://localhost:3001/produtos', {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' },
      body: idJSON,
    });
    const produto = await req.json();
    setTitulo(produto.titulo);
    setPreco(produto.preco);
    setDescricao(produto.descricao);
    setImagem(produto.imagem);
    setDataCadastro(produto.data_cadastro);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const produto = {
      id: params.id,
      titulo: titulo,
      dataCadastro: dataCadastro,
      preco: preco,
      descricao: descricao,
      imagem: imagem,
    };
    const produtoJSON = JSON.stringify(produto);

    fetch('http://localhost:3001/produtos', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: produtoJSON,
    })
      .then(() => {
        route.push('/');
      })
      .catch((err) => console.log('[handleSubmit] Ocorreu um erro:' + err));
  };

  return (
    <Container>
      <div className="flex justify-center py-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 w-2/4 gap-4 p-7 bg-red-700 border-red-800 rounded"
        >
          <h1 className="text-center font-bold text-2xl">
            Altere seu produto aqui!
          </h1>

          <span className="tracking-widest relative block w-full border-t my-2 drop-shadow-lg opacity-50 text-center"></span>

          <label className="mt-2">Como podemos chamar seu produto?</label>
          <input
            required
            value={titulo}
            className="w-50 p-2 pl-4 rounded outline-none"
            type="text"
            placeholder="Insira o nome do produto"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label className="">Qual o preço do seu produto?</label>
          <input
            required
            value={preco}
            className="w-50 p-2 pl-4 rounded outline-none"
            type="number"
            placeholder="Insira o preço do produto"
            onChange={(e) => setPreco(e.target.value)}
          />
          <label className="">Como podemos descrever seu produto?</label>
          <input
            required
            value={descricao}
            className="w-50 p-2 pl-4 rounded outline-none"
            type="text"
            placeholder="Crie uma descrição do produto"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <label className="">Qual imagem será utilizada para o produto?</label>
          <input
            required
            value={imagem}
            className="w-50 p-2 pl-4 rounded outline-none"
            type="text"
            placeholder="Insira o URL da imagem"
            onChange={(e) => setImagem(e.target.value)}
          />
          <button
            type="submit"
            className=" bg-red-600 hover:bg-red-500 p-3 mt-4 font-bold shadow-lg transition duration-300 ease-in-out hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
}
