const pieces = [
  {
    id: 1,
    name: 'Table Mère GETAK',
    description:
      'Acajou massif centenaire, patine naturelle et finition satinée. Une pièce qui traverse les générations.',
    price: '4 200 000 FCFA',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Bureau Directoire en Noyer Noir',
    description:
      'Lignes sobres et prestance absolue. Conçu pour les décideurs qui impriment leur marque.',
    price: '3 800 000 FCFA',
    image:
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    name: 'Console d’Exception en Teck',
    description:
      'Sculpture artisanale, alliance du bois brut et de la précision des ateliers GETAK.',
    price: '2 950 000 FCFA',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

export default function CraftShop() {
  return (
    <section id="menuiserie" className="bg-neutral-950 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-stone-100 sm:text-5xl">
            Atelier GETAK – Menuiserie d’Art
          </h2>
          <p className="mt-4 text-stone-400">
            Luxe brut, bois nobles, héritage artisanal
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((piece) => (
            <article
              key={piece.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-amber-500/10 bg-neutral-900 transition-shadow hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-stone-200">
                  {piece.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-400">
                  {piece.description}
                </p>
                <p className="mt-4 text-lg font-bold text-amber-400">
                  {piece.price}
                </p>
                <button className="mt-6 w-full rounded-lg border border-amber-500 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-400 transition hover:bg-amber-500 hover:text-black">
                  Réserver cette pièce unique
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}