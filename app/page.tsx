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
      <div className="">
          <NavigatinCard
          title="Item do Dia"
          image=""
          href=""
          />
          <NavigatinCard
          title=""
          image=""
          href=""
          />
          <NavigatinCard
          title=""
          image=""
          href=""
          />
      </div>
    </div>
  );
}
