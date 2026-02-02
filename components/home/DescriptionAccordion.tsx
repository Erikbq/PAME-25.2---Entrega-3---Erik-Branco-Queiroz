"use client"; // Obrigatório: tem interação (clique), então é Client Component

// Importações de use state e ícones
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Usaremos a setinha para baixo

export default function DescriptionAccordion() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Card do acordeão */}
      <div className="rounded-2xl border border-brand-brown/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Botão */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left bg-brand-light/30 hover:bg-brand-light/50 transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-brand-brown">
              Sobre a Clean Girl
            </span>
            <span className="text-xs text-brand-brown/50 uppercase tracking-widest mt-1">
              Nossa Essência
            </span>
          </div>

          {/* Setinha animada */}
          {/* Se isOpen for true, ela gira 180 graus */}
          <div
            className={`text-brand-pink transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown size={20} />
          </div>
        </button>

        {/* O conteúdo */}
        {/* Truque do grid: grid-rows-[0fr] esconde, grid-rows-[1fr] mostra. 
            Isso permite animar a altura que o CSS normal não deixa fazer com 'auto'. */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="p-6 pt-2 text-brand-brown/80 leading-relaxed font-light">
              <p className="mb-4">
                Mais do que uma cafeteria, somos um refúgio para quem busca
                beleza nos detalhes. A <strong>Clean Girl Coffee</strong> nasceu
                da paixão por momentos de pausa intencionais.
              </p>
              <p>
                Acreditamos na estética minimalista, em ingredientes de origem
                ética e no poder de um café preparado com calma. Aqui, cada
                xícara é um convite para desacelerar e apreciar o agora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
