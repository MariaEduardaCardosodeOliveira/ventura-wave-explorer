import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building, MapPin, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface PersonalInfoProps {
  onDataChange: (data: any) => void;
}

export const PersonalInfo = ({ onDataChange }: PersonalInfoProps) => {
  const [currentTab, setCurrentTab] = useState("pessoais");
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: "",
    email: "",
    telefone: "",
    whatsapp: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    
    // Dados Empresariais
    cnpj: "",
    inscricaoEstadual: "",
    razaoSocial: "",
    
    // Endereço
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    
    // Observações
    observacoesCliente: "",
    observacoesVendedor: ""
  });

  const tabs = [
    { id: "pessoais", name: "Pessoais", icon: User },
    { id: "empresariais", name: "Empresariais", icon: Building },
    { id: "endereco", name: "Endereço", icon: MapPin },
    { id: "observacoes", name: "Observações", icon: MessageSquare }
  ];

  const currentTabIndex = tabs.findIndex(tab => tab.id === currentTab);

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange(newData);
  };

  const goToNextTab = () => {
    if (currentTabIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentTabIndex + 1].id);
    }
  };

  const goToPrevTab = () => {
    if (currentTabIndex > 0) {
      setCurrentTab(tabs[currentTabIndex - 1].id);
    }
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatCNPJ = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const formatCEP = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{1,3})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Informações Pessoais
        </h2>
        <p className="text-muted-foreground">
          Preencha seus dados para finalizar o orçamento
        </p>
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                <IconComponent className="w-4 h-4" />
                {tab.name}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="pessoais" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                  <Input
                    id="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", formatPhone(e.target.value))}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", formatPhone(e.target.value))}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => handleInputChange("cpf", formatCPF(e.target.value))}
                    placeholder="000.000.000-00"
                    maxLength={14}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rg">RG</Label>
                  <Input
                    id="rg"
                    value={formData.rg}
                    onChange={(e) => handleInputChange("rg", e.target.value)}
                    placeholder="00.000.000-0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                  <Input
                    id="dataNascimento"
                    type="date"
                    value={formData.dataNascimento}
                    onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="empresariais" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dados Empresariais</CardTitle>
              <p className="text-sm text-muted-foreground">
                Preencha apenas se for pessoa jurídica
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    value={formData.cnpj}
                    onChange={(e) => handleInputChange("cnpj", formatCNPJ(e.target.value))}
                    placeholder="00.000.000/0000-00"
                    maxLength={18}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                  <Input
                    id="inscricaoEstadual"
                    value={formData.inscricaoEstadual}
                    onChange={(e) => handleInputChange("inscricaoEstadual", e.target.value)}
                    placeholder="000.000.000.000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="razaoSocial">Razão Social</Label>
                <Input
                  id="razaoSocial"
                  value={formData.razaoSocial}
                  onChange={(e) => handleInputChange("razaoSocial", e.target.value)}
                  placeholder="Nome da empresa"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endereco" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Endereço Completo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="logradouro">Logradouro *</Label>
                  <Input
                    id="logradouro"
                    value={formData.logradouro}
                    onChange={(e) => handleInputChange("logradouro", e.target.value)}
                    placeholder="Rua, Avenida, etc."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="numero">Número *</Label>
                  <Input
                    id="numero"
                    value={formData.numero}
                    onChange={(e) => handleInputChange("numero", e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    id="complemento"
                    value={formData.complemento}
                    onChange={(e) => handleInputChange("complemento", e.target.value)}
                    placeholder="Apto, Casa, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input
                    id="bairro"
                    value={formData.bairro}
                    onChange={(e) => handleInputChange("bairro", e.target.value)}
                    placeholder="Nome do bairro"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange("cidade", e.target.value)}
                    placeholder="Nome da cidade"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Input
                    id="estado"
                    value={formData.estado}
                    onChange={(e) => handleInputChange("estado", e.target.value)}
                    placeholder="SP"
                    maxLength={2}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP *</Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => handleInputChange("cep", formatCEP(e.target.value))}
                    placeholder="00000-000"
                    maxLength={9}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="observacoes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Observações do Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="observacoesCliente">
                    Comentários, solicitações especiais, etc.
                  </Label>
                  <Textarea
                    id="observacoesCliente"
                    value={formData.observacoesCliente}
                    onChange={(e) => handleInputChange("observacoesCliente", e.target.value)}
                    placeholder="Digite aqui suas observações..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Observações do Vendedor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="observacoesVendedor">
                    Anotações internas, condições especiais, etc.
                  </Label>
                  <Textarea
                    id="observacoesVendedor"
                    value={formData.observacoesVendedor}
                    onChange={(e) => handleInputChange("observacoesVendedor", e.target.value)}
                    placeholder="Anotações internas..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={goToPrevTab}
            disabled={currentTabIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{currentTabIndex + 1} de {tabs.length}</span>
          </div>
          
          <Button
            variant="outline"
            onClick={goToNextTab}
            disabled={currentTabIndex === tabs.length - 1}
            className="flex items-center gap-2"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Tabs>

      {/* Validation Summary */}
      <Card className="bg-accent/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Campos Obrigatórios</h4>
              <p className="text-sm text-muted-foreground">
                Nome, e-mail, telefone, CPF e endereço completo
              </p>
            </div>
            <div className="text-sm">
              {formData.nomeCompleto && formData.email && formData.telefone && 
               formData.cpf && formData.logradouro && formData.numero && 
               formData.bairro && formData.cidade && formData.estado && formData.cep ? (
                <span className="text-green-600 font-medium">✓ Completo</span>
              ) : (
                <span className="text-orange-600 font-medium">⚠ Incompleto</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};