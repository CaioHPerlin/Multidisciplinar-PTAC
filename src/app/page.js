'use client';
import './globals.css';;
import Navbar from './components/Navbar';
import Card from './components/Card';

export default async function Home() {
  const req = await fetch('http://localhost:3001/produtos', {
    next: { revalidate: 1 },
  });
  const produtos = await req.json();

  return (
    <main className="bg-neutral-950 grid grid-cols-1">
      <Navbar/>
      <div className="m-10 grid grid-cols-4 gap-4 justify-items-center rounded overflow-hidden shadow-lg bg-red-700">
        {produtos.map((produto) => ( <Card item={produto}/> ))}
      </div>
    </main>
  );
}
