'use client';

export default function Footer({ item }) {
  return (
<footer className="border-gray-200 bg-red-700">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-10">
    <div className="md:flex md:justify-between">
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    <div>
        <h2 class="mb-4 text-sm text-white font-bold">PROGRAMADORES</h2>
            <ul className="text-white font-medium">
            <li className="mb-4">
            <a href="https://github.com/Mooniemd" className="hover:underline ">Moonie</a>
            </li>
            <li>
            <a href="https://github.com/CaioHPerlin" className="hover:underline">Caio</a>
            </li>
            </ul>
    </div>
    <div>
        <h2 className="mb-4 text-sm text-white font-bold">INSPIRAÇÃO</h2>
            <ul className="text-white font-medium">
            <li className="mb-4">
            <a href="https://www.instagram.com/centuriongsna/" className="hover:underline">Centurion</a>
            </li>
            </ul>
    </div>
    </div>
    </div>
        <hr className="my-8 border-white sm:mx-auto opacity-50"/>
    <div className="text-center">
        <span className="text-sm text-white"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:underline">M&C</a>. Todos os Direitos reservados.</span>
    </div>
    </div>
</footer>
  );
}
