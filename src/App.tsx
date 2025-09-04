import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Obrigado from "./pages/Obrigado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* WhatsApp Button (right-fixed, expands left on hover, text fully contained) */}
      <a
        href="https://wa.me/61996212692"
        target="_blank"
        rel="noreferrer"
        className="group fixed right-4 top-1/2 -translate-y-1/2 z-50 overflow-hidden rounded-full shadow-glow bg-[hsl(var(--secondary))] text-secondary-foreground h-12 w-12 transition-all duration-300 ease-out hover:w-96 flex items-center justify-end"
        aria-label="Fale no WhatsApp"
        title="Fale no WhatsApp"
      >
        <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pr-4 whitespace-nowrap">
          Solicite seu trabalho pelo nosso WhatsApp
        </span>
        <span className="min-w-12 w-12 h-12 flex items-center justify-center shrink-0">
          {/* WhatsApp icon */}
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
            <path fill="currentColor" d="M27.6 14.8c0 6.6-5.4 12-12.1 12-2.1 0-4.1-.5-5.8-1.5L4 27.9l1.7-5.6c-1.1-1.9-1.7-4.1-1.7-6.5 0-6.6 5.4-12 12.1-12s12.1 5.4 12.1 12zM15.5 4.6C9.8 4.6 5.1 9.3 5.1 15c0 2.3.7 4.4 1.9 6.1l-1.2 3.8 3.9-1.2c1.6 1.1 3.6 1.7 5.8 1.7 5.6 0 10.3-4.7 10.3-10.4S21.1 4.6 15.5 4.6z"/>
            <path fill="currentColor" d="M20 17.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.4-.2-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.6.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8 0 1.6 1.2 3.1 1.4 3.3.2.2 2.4 3.6 5.7 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6 0-.1-.2-.1-.5-.3z"/>
          </svg>
        </span>
      </a>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obrigado" element={<Obrigado />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
