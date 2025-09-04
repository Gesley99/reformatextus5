import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Obrigado = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-10 shadow-elegant">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-14 h-14 text-secondary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-3">
          Obrigado! Formulário enviado com sucesso.
        </h1>
        <p className="text-muted-foreground mb-8">
          Entraremos em contato em breve.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="hero" onClick={() => window.open("/", "_self")}>
            Voltar ao site
          </Button>
          <Button variant="cta" onClick={() => window.open("https://wa.me/61996212692", "_blank")}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
