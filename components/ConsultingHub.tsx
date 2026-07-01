'use client';
export default function ConsultingHub() {
  return (
    <section className="bg-neutral-900 px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-stone-100 sm:text-5xl">
            Conseil & Partenariats Public-Privé
          </h2>
          <p className="mt-4 text-stone-400">
            Téléchargez notre note stratégique réservée aux dirigeants et directeurs canadiens
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 rounded-2xl border border-amber-500/20 bg-neutral-800/90 p-8 backdrop-blur sm:p-12"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-stone-300"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-200 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="mb-2 block text-sm font-medium text-stone-300"
            >
              Poste occupé
            </label>
            <input
              type="text"
              id="position"
              required
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-200 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="Directeur général, VP Partenariats..."
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-stone-300"
            >
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              required
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-200 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="Nom de votre organisation"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-stone-300"
            >
              Téléphone professionnel
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-200 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="+1 (514) xxx-xxxx"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 px-6 py-4 text-base font-semibold text-black transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-800"
          >
            Télécharger la Note Stratégique
          </button>
          <p className="text-center text-xs text-stone-500">
            Confidentiel • Aucune information ne sera partagée
          </p>
        </form>
      </div>
    </section>
  );
}