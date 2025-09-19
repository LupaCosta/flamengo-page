import Image from "next/image";

export default function Historia() {
  return (

    
    
    <div className="w-full">
      {/* Hero simples */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/torcida1.png"
            alt="Torcida do Flamengo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      
        <div className="px-4 max-w-3xl">
          <h1 className="text-4xl mb-35 md:text-5xl font-extrabold drop-shadow-lg">
            História do Clube de Regatas do Flamengo
          </h1>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        {/* Seção 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/flamengo5.jpg" // imagem da história do clube
            alt="Fundação do Flamengo"
            width={400}
            height={300}
            className="rounded-xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Fundação e primeiros anos</h2>
            <p className="text-gray-700 leading-relaxed">
              O Clube de Regatas do Flamengo foi fundado em 1895 como um clube de remo, mas logo se tornou um dos maiores clubes de futebol do mundo. Nos primeiros anos, o Flamengo já se destacou pelo espírito competitivo e pela paixão da torcida.
            </p>
          </div>
        </div>

        {/* Seção 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <Image
            src="/images/flamengo2.jpg"
            alt="Primeiros títulos do Flamengo"
            width={400}
            height={300}
            className="rounded-xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Crescimento e conquistas</h2>
            <p className="text-gray-700 leading-relaxed">
              Com o passar dos anos, o Flamengo conquistou diversos títulos estaduais, nacionais e internacionais. A torcida cresceu e se tornou uma das mais apaixonadas do Brasil, transformando o clube em símbolo de paixão e tradição.
            </p>
          </div>
        </div>

        {/* Seção 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/flamengo3.webp"
            alt="Flamengo moderno"
            width={400}
            height={300}
            className="rounded-xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">O Flamengo hoje</h2>
            <p className="text-gray-700 leading-relaxed">
              Atualmente, o Flamengo é referência no futebol mundial, com conquistas expressivas e uma base sólida de jogadores. Além do esporte, o clube promove ações sociais e mantém a paixão de milhões de torcedores ao redor do mundo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
