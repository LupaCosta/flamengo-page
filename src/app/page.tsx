import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/torcida1.png" // coloque sua imagem na pasta /public/images
            alt="Torcida do Flamengo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Conteúdo */}
        <div className="z-10 max-w-3xl px-4">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Bem-vindo ao Clube de Regatas do Flamengo
          </h1>
          <p className="text-xl mb-18 drop-shadow-lg">
            O maior clube do Brasil, paixão que une milhões de torcedores!
          </p>
          
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Fundado em 1895, o Flamengo é mais que um time: é uma nação. Com uma
          trajetória marcada por conquistas e uma torcida apaixonada, o clube se
          tornou um dos maiores símbolos do esporte mundial.
        </p>
      </section>

      {/* GALERIA */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Momentos Recentes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
                  <Image
            src="/images/flamengo1.jpg"
            alt="Flamengo comemorando"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />

          <Image
            src="/images/flamengo2.jpg"
            alt="Flamengo comemorando"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />

          <Image
            src="/images/flamengo3.webp"
            alt="Flamengo comemorando"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />

        </div>
      </section>
    </div>
  );
}
