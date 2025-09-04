import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    tema: "",
    service: "",
    min_pages: "",
    max_pages: "",
    deadline: "",
    deadline_time: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-24">
      <div className="container">
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
                <CardTitle className="text-2xl">Solicite um orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form action="/obrigado"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/obrigado"
                  className="space-y-6"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Não preencha: <input name="bot-field" /></label>
                  </p>

                  {/* Serviço (Select controlado + hidden para Netlify) */}
                  <input type="hidden" name="Serviço" value={formData.service} />
                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço</Label>
                    <Select value={formData.service} onValueChange={(v) => handleInputChange("service", v)}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TCC">TCC / Monografia</SelectItem>
                        <SelectItem value="Artigo">Artigo Científico</SelectItem>
                        <SelectItem value="RelatorioEstagio">Relatório de Estágio</SelectItem>
                        <SelectItem value="Slides">Criação de Slides</SelectItem>
                        <SelectItem value="Revisao">Revisão / Normalização</SelectItem>
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dados principais */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="Nome"
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
                        name="E-mail"
                        type="email"
                        placeholder="seu@email.com"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="Telefone"
                        placeholder="(DDD) 99999-9999"
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
                        name="Curso"
                        placeholder="Ex.: Administração | Direito | Enfermagem"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.course}
                        onChange={(e) => handleInputChange("course", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Tema */}
                  <div className="space-y-2">
                    <Label htmlFor="tema">Tema</Label>
                    <Input
                      id="tema"
                      name="Tema"
                      type="text"
                      placeholder="Ex.: Educação e tecnologia"
                      className="focus:ring-2 focus:ring-primary"
                      value={formData.tema}
                      onChange={(e) => handleInputChange("tema", e.target.value)}
                    />
                  </div>

                  {/* Páginas mín/máx */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="min_pages">Páginas (mín.)</Label>
                      <Input
                        id="min_pages"
                        name="Páginas (mín.)"
                        type="number"
                        min={1}
                        placeholder="Ex.: 10"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.min_pages}
                        onChange={(e) => handleInputChange("min_pages", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="max_pages">Páginas (máx.)</Label>
                      <Input
                        id="max_pages"
                        name="Páginas (máx.)"
                        type="number"
                        min={1}
                        placeholder="Ex.: 15"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.max_pages}
                        onChange={(e) => handleInputChange("max_pages", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Prazo (data + horário) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Prazo final (data)</Label>
                      <Input
                        id="deadline"
                        name="Prazo final"
                        type="date"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.deadline}
                        onChange={(e) => handleInputChange("deadline", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline_time">Horário</Label>
                      <Input
                        id="deadline_time"
                        name="Horário"
                        type="time"
                        className="focus:ring-2 focus:ring-primary"
                        value={formData.deadline_time}
                        onChange={(e) => handleInputChange("deadline_time", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="Mensagem"
                      placeholder="Conte brevemente sua necessidade"
                      className="min-h-[120px] resize-y"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Button type="submit" variant="hero" className="min-w-40">
                      Enviar
                    </Button>
                    <Button type="button" variant="outline" onClick={() => window.open("https://wa.me/61996212692", "_blank")}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Conversar no WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info card (lado direito) */}
          <div className="hidden lg:block">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Resposta em até 1 dia útil. Para urgências, fale conosco pelo WhatsApp.
                </p>

                {/* === Botão de WhatsApp (logo abaixo do texto) === */}
                <div className="mt-4">
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => window.open("https://wa.me/61996212692", "_blank")}
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
                {/* === fim do botão === */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
