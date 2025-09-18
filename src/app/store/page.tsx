import Image from "next/image";

export default function Store() {
  // Lista de produtos
  const produtos = [
    { nome: "Manto 01", preco: "R$ 299,99", img: "/images/blusa.png" },
    { nome: "Manto 02", preco: "R$ 299,99", img: "/images/blusa2.png" },
    { nome: "Manto 03", preco: "R$ 399,99", img: "/images/blusa3.png" },
    { nome: "Casaco Preto", preco: "R$ 499,99", img: "/images/casaco.png" },
    { nome: "Casaco Branco", preco: "R$ 699,99", img: "/images/casaco2.png" },
    { nome: "Calção", preco: "R$ 99,99", img: "/images/short.png" },
  ];

  return (
    
      <div className="w-full">
            {/* HERO */}
            <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white">
  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/images/herostore.webp"
      alt="Torcida do Flamengo"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  <div className="px-4 max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
      Loja Oficial do Flamengo
    </h1>
  </div>
</section>


      {/* Cards de produtos */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4">
              <Image
                src={produto.img}
                alt={produto.nome}
                width={150}
                height={150}
                className="object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold">{produto.nome}</h3>
              <p className="mt-2 text-red-600 font-semibold">{produto.preco}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
