// Importa a biblioteca de atributos de botão do react
import { ButtonHTMLAttributes } from "react";

// Define que o botão aceita todas as propriedades normais de um botão HTML
// + uma propriedade extra chamada 'variant'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

// define os parâmetros passados para a função e para quem 
export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  // Base: estilos que todo botão vai ter (arredondado, transição suave)
  const baseStyles =
    "px-6 py-2 rounded-full font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";

  // Variantes: as cores específicas de cada tipo
  const variants = {
    primary: "bg-brand-green text-white shadow-md hover:bg-brand-pink/90 hover:shadow-lg",
    secondary: "bg-brand-brown text-white shadow-md hover:bg-brand-brown/90",
    outline: "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
