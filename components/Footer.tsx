export default function Footer() {
  return (
    <footer className="border-t border-amber-500/10 bg-neutral-950 px-4 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} Honorable Gerry Taama. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-sm text-stone-500">
          <a href="#" className="transition hover:text-amber-400">
            Mentions légales
          </a>
          <a href="#" className="transition hover:text-amber-400">
            Politique de confidentialité
          </a>
        </div>
        <p className="font-serif text-xs italic text-stone-500">
          « L’excellence comme seule signature. »
        </p>
      </div>
    </footer>
  );
}