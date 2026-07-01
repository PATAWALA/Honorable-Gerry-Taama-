const books = [
  {
    id: 1,
    title: 'Le Courage de Réformer',
    description:
      'Plaidoyer pour une transformation audacieuse des institutions publiques africaines.',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Fils du Continent',
    description:
      'Roman puissant, fresque historique et intime saluée par la critique.',
    image:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Stratégies de Puissance',
    description:
      'Essai sur la géopolitique des matières premières et la souveraineté africaine.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

export default function Library() {
  return (
    <section className="bg-neutral-950 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-stone-100 sm:text-5xl">
            Ouvrages & Pensée
          </h2>
          <p className="mt-4 text-stone-400">
            L’écriture comme prolongement du leadership
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex flex-col items-center rounded-2xl border border-amber-500/10 bg-neutral-900 p-8 text-center"
            >
              <div className="mb-6 w-48 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-200">
                {book.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                {book.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500 px-6 py-3 text-sm font-medium text-amber-400 transition hover:bg-amber-500 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-5-9v9"
                  />
                </svg>
                Acheter l&apos;ouvrage
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}