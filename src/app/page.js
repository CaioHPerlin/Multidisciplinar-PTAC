
"use client"
import styles from "./page.module.css"
import Image from "next/image";

export default async function Home() {

  const req = await fetch("http://localhost:3001/produtos", {
    next: {revalidate: 1}
  });
  const produtos = await req.json();

  return (
    <main className={styles.main}>
      {produtos.map(produto => (
        <div key={produto.id}>
          <h1>{produto.titulo}</h1>
          <h2>{produto.preco}</h2>
          <p>{produto.descricao}</p>
          <p>{produto.data_cadastro}</p>
          <Image
            src={produto.imagem}
            width={300}
            height={300}
            alt={produto.titulo}
          />
        </div>
      ))}
    </main>
  )
}