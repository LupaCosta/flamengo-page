import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-red-600 text-white shadow-md">
      {/* Logo + Nome */}
      <div className="flex items-center gap-3">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg"
          alt="Logo Flamengo"
          width={50}
          height={50}
        />
        <span className="text-xl font-bold tracking-wide">Flamengo</span>
      </div>

      {/* Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <li className="hover:text-yellow-300 cursor-pointer">
          <a href="/">Home</a>
          </li>
        <li className="hover:text-yellow-300 cursor-pointer">
          <a href="/historia">História</a>
        </li>

        <li className="hover:text-yellow-300 cursor-pointer">
           <a href="/titulos">Títulos</a> 
        </li>

        <li className="hover:text-yellow-300 cursor-pointer">
           <a href="/store">Store</a>
        </li>
        <li className="hover:text-yellow-300 cursor-pointer">
          <a href="/seja-socio">Seja Sócio</a>
          </li>

        <li className="hover:text-yellow-300 cursor-pointer">
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
