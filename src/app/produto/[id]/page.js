'use client';
import Container from '@/app/components/Container';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default async function Detalhamento({ params }) {
  const idJSON = JSON.stringify({ id: parseInt(params.id) });
  const router = useRouter();

  const req = await fetch('http://localhost:3001/produtos', {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'content-type': 'application/json' },
    body: idJSON
  });

  const produto = await req.json();

  const handleDelete = () => {
    fetch('http://localhost:3001/produtos', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: idJSON
    }).then(() => {
      router.push("/")
    }).catch((err) => {console.log("[handleDelete] Ocorreu um erro: " + err)})
  }

  const formatDate = (date) => new Date(date).toLocaleDateString();

  return (
    <Container>
      <div className="flex justify-center py-2">
        <div className="w-3/4 m-10 bg-red-700 p-4 rounded grid grid-cols-2 justify-items-center">
          <Image
            className="rounded"
            src={produto.imagem}
            width={700}
            height={700}
            alt={produto.titulo}
          />
          <div className="m-10 justfiy-items-start rounded overflow-hidden bg-red-700 ">
            <h1 className="font-bold text-2xl">{produto.titulo}</h1>
            <div className="mb-4 inline-flex">
              <h1>Código: #{produto.id} |   {formatDate(produto.data_cadastro)}</h1>
            </div>
            <span className="block w-full border-t my-4 mx-auto drop-shadow-lg opacity-50"></span>
            <h1 className="font-bold text-2xl my-2">R${produto.preco}</h1>
            <h1 className="text-justify text-sm my-2">{produto.descricao}</h1>
            <span className="block w-full border-t my-4 mx-auto drop-shadow-lg opacity-50"></span>
            <h1 className="my-4">Tamanho</h1>
            <div className="grid grid-cols-5 gap-4 font-bold rounded">
              <button className="border-red-600 border-2 py-2 px-4 hover:border-red-500 focus:border-2 focus:border-red-500">
                PP
              </button>
              <button className="border-red-600 border-2 py-2 px-4 hover:border-red-500 focus:border-2 focus:border-red-500">
                P
              </button>
              <button className="border-red-600 border-2 py-2 px-4 hover:border-red-500 focus:border-2 focus:border-red-500">
                M
              </button>
              <button className="border-red-600 border-2 py-2 px-4 hover:border-red-500 focus:border-2 focus:border-red-500">
                G
              </button>
              <button className="border-red-600 border-2 py-2 px-4 hover:border-red-500 focus:border-2 focus:border-red-500">
                GG
              </button>
            </div>
            <div className="my-14 grid grid-cols-2 gap-8">
              <button className="bg-red-600 hover:bg-red-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                Alterar
              </button>
              <button onClick={handleDelete} className="bg-red-600 hover:bg-red-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                Deletar
              </button>
            </div>
            <div className="grid grid-cols-1" >
              <button className="bg-red-600 hover:bg-red-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
}