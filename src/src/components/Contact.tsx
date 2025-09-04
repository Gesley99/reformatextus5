import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageCircle, Send, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", pages: "",
    service: "",
    deadline: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Entre em <span className="gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Pronto para dar o próximo passo em sua jornada acadêmica?
            Nossa equipe está aqui para ajudar você a alcançar a excelência.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">
                  Solicite seu Orçamento
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Netlify Forms */}
                <form action="/obrigado"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/obrigado"
                  className="form"
                >
                  {/* Necessário para Netlify identificar o formulário */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot anti-spam (oculto por CSS) */}
                  <p className="hidden">
                    <label>Não preencha: <input name="bot-field" /></label>
                  </p>
                  {/* Espelha o valor do Select controlado pelo React */}
                  <input type="hidden" name="service" value={formData.service} />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(11) 99999-9999"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Curso</Label>
                    <Input
                      id="course"
                      name="course"
                      placeholder="Ex.: Direito, Enfermagem, Eng. de Produção"
                      className="focus:ring-2 focus:ring-primary"
                      value={formData.course}
                      onChange={(e) => handleInputChange("course", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pages">Número de páginas</Label>
                    <Input
                      id="pages"
                      name="pages"
                      type="number"
                      min={1}
                      placeholder="Ex.: 10"
                      className="focus:ring-2 focus:ring-primary"
                      value={formData.pages}
                      onChange={(e) => handleInputChange("pages", e.target.value)}
                      required
                    />
                  </div>
        

                    <div className="space-y-2">
                      <Label htmlFor="service">Tipo de Trabalho</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tcc">TCC/Monografia</SelectItem>
                          <SelectItem value="dissertacao">Dissertação</SelectItem>
                          <SelectItem value="tese">Tese</SelectItem>
                          <SelectItem value="artigo">Artigo Científico</SelectItem>
                          <SelectItem value="revisao">Revisão/Formatação</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="deadline">Prazo Desejado</Label>
                    <Input
                      id="deadline"
                      name="deadline"
                      type="date"
                      className="focus:ring-2 focus:ring-primary"
                      value={formData.deadline}
                      onChange={(e) => handleInputChange("deadline", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="message">Detalhes do Projeto</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto, requisitos específicos, número de páginas estimado..."
                      className="min-h-32 focus:ring-2 focus:ring-primary"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full mt-6"
                    type="submit"
                    onClick={() => {
                      if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.deadline) {
                        toast({
                          title: "Campos obrigatórios",
                          description: "Por favor, preencha todos os campos obrigatórios.",
                          variant: "destructive"
                        });
                      }
                    }}
                  >
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Fale Conosco</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">E-mail</div>
                    <div className="text-sm text-muted-foreground">textusacademico@gmail.com</div>
                  </div>
                </div>

                <Button
                  variant="academic"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/61996212692','_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;