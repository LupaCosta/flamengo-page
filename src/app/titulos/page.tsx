import Image from "next/image";

export default function Titulos() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-red-600">
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          Títulos do Clube de Regatas do Flamengo
        </h1>
      </section>

      {/* Tabela de Títulos */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Quadro de Títulos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-6 border">Campeonato</th>
                <th className="py-3 px-6 border">Quantidade de Títulos</th>
                <th className="py-3 px-6 border">Último Título</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 odd:bg-white">
                <td className="py-3 px-6 border">Campeonato Carioca</td>
                <td className="py-3 px-6 border">37</td>
                <td className="py-3 px-6 border">2024</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-white">
                <td className="py-3 px-6 border">Campeonato Brasileiro</td>
                <td className="py-3 px-6 border">8</td>
                <td className="py-3 px-6 border">2023</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-white">
                <td className="py-3 px-6 border">Copa do Brasil</td>
                <td className="py-3 px-6 border">4</td>
                <td className="py-3 px-6 border">2023</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-white">
                <td className="py-3 px-6 border">Copa Libertadores</td>
                <td className="py-3 px-6 border">3</td>
                <td className="py-3 px-6 border">2022</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-white">
                <td className="py-3 px-6 border">Mundial de Clubes</td>
                <td className="py-3 px-6 border">1</td>
                <td className="py-3 px-6 border">1981</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Momentos de Conquista
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          <Image
            src="/images/zico.jpeg"
            alt="Flamengo comemorando título"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />
          <Image
            src="/images/didico.webp"
            alt="Torcida do Flamengo comemorando"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />
          <Image
            src="/images/arrasca.webp"
            alt="Jogadores do Flamengo com troféu"
            width={400}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </section>
    </div>
  );
}
