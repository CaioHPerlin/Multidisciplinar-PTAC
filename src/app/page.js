'use client';
import './globals.css';
import Card from './components/Card';
import Container from './components/Container';

export default async function Home() {
  const req = await fetch('https://centurion-api.vercel.app/produtos', {
    cache:'no-cache'
  });
  const produtos = await req.json();

  return (
    <Container>
      <div className="font-inter body-font m-8 p-6 grid grid-cols-4 gap-6 justify-items-center rounded overflow-hidden shadow-lg bg-red-700">
        {produtos.map((produto) => ( <Card key={produto.id} item={produto}/> ))}
      </div>
    </Container>
  );
}
