import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, FileText, GraduationCap, Users, Clock } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "TCC & Monografias",
    description: "Trabalhos de conclusão de curso desenvolvidos com rigor metodológico e originalidade.",
    features: ["Pesquisa aprofundada", "Formatação ABNT", "Revisão completa"],
  },
  {
    icon: FileText,
    title: "Projetos de Extensão",
    description: "Atividades acadêmicas aplicadas à comunidade, com foco em impacto social e formação prática.",
    features: ["Planejamento estruturado", "Objetivos definidos", "Resultados transformadores"],
  },
  {
    icon: BookOpen,
    title: "Artigos Científicos",
    description: "Elaboração de artigos científicos de qualidade.",
    features: ["Produção de textos acadêmicos originais", "Referências atualizadas conforme a área", "Estruturação segundo normas científicas"],
  },
  {
    icon: Users,
    title: "Criação de Slides Acadêmicos",
    description: "Design e narrativa para apresentações acadêmicas (TCC, bancas, seminários e resultados de pesquisa).",
    features: ["Estrutura do conteúdo", "Padronização de layout e tipografia", "Exportação pronta para apresentação"],
  },
  {
    icon: Clock,
    title: "Relatório de Estágio",
    description: "Orientação completa para Relatório de Estágio: estrutura, padrões institucionais e evidências.",
    features: ["Estruturação por objetivos e atividades", "Adequação a normas institucionais", "Revisão orientativa do texto"],
  },
  {
    icon: CheckCircle,
    title: "Revisão & Formatação",
    description: "Aperfeiçoamento de trabalhos já desenvolvidos.",
    features: ["Correção ortográfica", "Adequação ABNT", "Melhoria textual"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossos <span className="gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Oferecemos soluções completas para todas as suas necessidades acadêmicas, 
            com qualidade garantida e suporte especializado.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="academic-grid max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="shadow-card hover:shadow-elegant transition-smooth group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="gradient-subtle rounded-2xl p-8 shadow-elegant">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para discutir suas necessidades específicas. 
              Criamos soluções sob medida para cada projeto acadêmico.
            </p>
            <button
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow hover:shadow-elegant transition"
              onClick={() => window.open("https://wa.me/61996212692", "_blank")}
            >
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
