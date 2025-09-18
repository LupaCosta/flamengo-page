import Image from "next/image";

export default function Contato() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/flamengo2.jpg" // coloque sua imagem na pasta /public/images
            alt="Fundo Contato Flamengo"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
        </div>

        <div className="px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
            Fale Conosco
          </h1>
          <p className="text-xl drop-shadow-md">
            Estamos prontos para ouvir você. Envie sua mensagem e entraremos em contato!
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form className="bg-gray-100 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="w-full border border-gray-300 p-3 rounded-md h-32"
              placeholder="Escreva sua mensagem aqui"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
}
