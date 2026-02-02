// Importa os ícones utilizados
import { FaInstagram, FaFacebook, FaYoutube} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full h-14 flex justify-between items-center px-3 mt-auto bg-brand-pink" >
      <div className="flex justify-center gap-2 sm:gap-3 d:gap-4 ">
        {/* Ícone Facebook */}
        <a
          href="https://facebook.com"
          target="_blank" //Abre em nova aba
          className="text-brand-cream hover:text-brand-brown transition-colors"
        >
            <FaFacebook size={20} />
        </a>      

        {/* Ícone Instagram */}
        <a
          href="https://instagram.com"
          target="_blank" // Abre em nova aba
          className="text-brand-cream hover:text-brand-brown transition-colors"
        >
          {/* size={20} define o tamanho em pixels (20x20) */}
          <FaInstagram size={20} />
        </a> 

        {/* Ícone Youtube */}
        <a
          href="https://youtube.com"
          target="_blank" // Abre em nova aba
          className="text-brand-cream hover:text-brand-brown transition-colors"
          >
            <FaYoutube size={20} />
        </a>
      </div>
      <p className="text-xs sm:text-sm text-brand-cream">email@cleangril.com</p>
    </div>
  );
}