import DayItemCard from "../components/home/DayItemCard";
import Hero from "../components/home/Hero";
import NavigationCards from "../components/home/NavigationCards";



export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <Hero />
      </div>
      <div className="flex flex-col justify-center items-baseline w-full pl-2 py-3 gap-1.5">
          <h1 className="text-brand-brown font-bold text-2xl">Horário de Funcionamento</h1>
          <p className="text-brand-brown text-sm font-bold">Segunda à sexta: 08:00 às 20:00</p>
          <p className="text-brand-brown text-sm font-bold">Final de semana e feriados: 09:00 às 18:00</p>
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DayItemCard
          title="Item do Dia"
          image="/cappuccino_avela.jpg"
          description="Cappuccino Avelã"
          href="/detalhes"
          />
          <NavigationCards
          title="Cafés e bebidas"
          image="/bebidas_clean_girl.jpg"
          href="/bebidas"
          />
          <NavigationCards
          title="Comidas"
          image="/avocado_toast.jpg"
          href="comidas"
          />
      </div>
    </div>
  );
}
