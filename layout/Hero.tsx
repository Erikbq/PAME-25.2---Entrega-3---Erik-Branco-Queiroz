export default function Hero() {
  return (
    
    <section className="relative w-full grid grid-cols-1 rounded-2xl overflow-hidden shadow-lg bg-white h-72">
      <div className="block lg:hiddem h-full w-full bg-brand-cream">
        <img
          src="/fachada_esticada.png"
          alt="Fachada Clean Girl"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="hiddem lg:block h-full w-full bg-brand-cream">
        <img
          src="/fachada_esticada.png"
          alt="Fachada Clean Girl"
          className="w-full h-full object-contain object-bottom"
        />
      </div>


      {/* 1. O OVERLAY (Cobre as duas fotos) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* 2. O TEXTO (Centralizado no meio de tudo) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream drop-shadow-md mb-2">
          Clean Girl
        </h2>

        <p className="text-white/90 text-sm md:text-base font-light max-w-md">
          Café especial, <br /> essencialmente simples.
        </p>
      </div>
    </section>
  );
}
