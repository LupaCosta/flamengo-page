import Image from "next/image";

export default function SejaSocio() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/flamengo2.jpg" // coloque sua imagem na pasta /public/images
            alt="Torcedores do Flamengo"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
        </div>

        <div className="px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
            Torça, participe e faça parte do Mengão!
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Seja sócio do Clube de Regatas do Flamengo e viva experiências exclusivas com o maior clube do Brasil.
          </p>
          <a
          href="https://nacao.flamengo.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white font-bold px-10 py-6 rounded-lg shadow-lg hover:bg-red-500 transition text-xl"
        >
          Torne-se Sócio
        </a>

        </div>
      </section>

      {/* Benefícios de ser sócio */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold">Por que ser sócio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-red-600 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Acesso prioritário</h3>
            <p>Garanta ingressos para jogos e eventos antes de todo mundo.</p>
          </div>
          <div className="bg-red-600 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Benefícios exclusivos</h3>
            <p>Descontos na loja oficial, promoções e conteúdos exclusivos.</p>
          </div>
          <div className="bg-red-600 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Conexão com o clube</h3>
            <p>Participe de ações, sorteios e atividades especiais para sócios.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
